const { User } = require("../models/user");
const { getDB } = require("../app/db");
const { ObjectID } = require("mongodb");

module.exports = async (req, res, next) => {
        const cookie = req.cookies._id;
        if (!cookie) res.status(401).send("Access denied. No cookie provided.");

        const user = await getDB()
                .collection("user")
                .findOne({ _id: new ObjectID(req.cookies._id) });

        if (!user) res.status(400).send("Invalid cookie.");

        req.user = User.classTraformer(user);

        next();
};
