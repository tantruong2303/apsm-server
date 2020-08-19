const { getDB } = require("../app/db");
const { User } = require("../models/user");
const formatError = require("../utils/formatError");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const auth = require("../middleware/auth");

router.post("/register", async (req, res) => {
        const db = getDB().collection("user");

        const info = _.pick(req.body, ["username", "password", "confirm"]);
        const { error, value } = User.validateRegister(info);
        if (error) {
                return res.status(400).send(formatError(error.details[0].context.label, error.details[0].type));
        }

        const user = new User(value.username, value.password);

        const isUnique = await db.findOne({ username: user.username });
        if (isUnique) return res.status(400).send("Username is taken.");

        await user.hashingPassword(5);

        const newUser = new User(user.username, user.password);

        await db.insertOne(newUser);

        res.send(newUser);
});

router.post("/login", async (req, res) => {
        const db = getDB().collection("user");

        const info = _.pick(req.body, ["username", "password"]);

        const { error, value } = User.validateLogin(info);
        if (error) {
                return res.status(400).send(formatError(error.details[0].context.label, error.details[0].type));
        }

        const userInDB = await db.findOne({ username: value.username });
        if (!userInDB) return res.status(400).send("username or password is not correct.");
        const user = new User(userInDB.username, userInDB.password);

        const isCorrect = await user.comparePassword(value.password);
        if (!isCorrect) return res.status(400).send("username or password is not correct.");

        res.status(200).cookie("_id", userInDB._id).end();
});

router.post("/changePassword", [auth], async (req, res) => {
        const db = getDB().collection("user");

        const info = _.pick(req.body, ["username", "currentPassword", "newPassword", "confirm"]);

        const { error, value } = User.validateChangePassword(info);
        if (error) {
                return res.status(400).send(formatError(error.details[0].context.label, error.details[0].type));
        }

        const userInDB = await db.findOne({ username: value.username });
        if (!userInDB) return res.status(400).send("username or currentPassword is not correct.");

        const user = new User(userInDB.username, userInDB.password);
        const isCorrect = await user.comparePassword(value.currentPassword);
        if (!isCorrect) return res.status(400).send("username or currentPassword is not correct.");

        user.password = value.newPassword;
        await user.hashingPassword(5);

        await db.updateOne({ username: user.username }, { $set: { password: user.password } });

        res.send(user);
});

module.exports = router;
