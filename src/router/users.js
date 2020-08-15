const { getDB } = require("../app/db");
const { User } = require("../models/user");
const formatError = require("../utils/formatError");
const express = require("express");
const router = express.Router();
const _ = require("lodash");

router.get("/login", (req, res) => {
        res.render("login.ejs", { pageTitle: "Login" });
});
router.get("/register", (req, res) => {
        res.render("register.ejs", { pageTitle: "Register" });
});
router.get("/changePassword", (req, res) => {
        res.render("changePassword.ejs", { pageTitle: "Change password" });
});

router.get("/resident", (req, res) => {
        res.render("addResident.ejs", { pageTitle: "Add Resident" });
});

router.post("/register", async (req, res) => {
        const db = getDB().collection("user");

        const info = _.pick(req.body, ["username", "password", "confirm"]);
        const { error, value } = User.validateRegister(info);
        if (error) {
                return res.send(formatError(error.details[0].context.label, error.details[0].type));
        }

        const user = new User(value.username, value.password);
        console.log(user);

        const isUnique = await db.findOne({ username: user.username });
        if (isUnique) return res.status(400).send("Username is taken.");

        await user.hashingPassword(5);

        const newUser = await db.insertOne({
                username: user.username,
                password: user.password,
        });

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

        res.send("Login successful.");
});

module.exports = router;
