const { getDB } = require("../app/db");
const { Resident } = require("../models/resident");
const formatError = require("../utils/formatError");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const auth = require("../middleware/auth");

router.post("/add", [auth], async (req, res) => {
        const db = getDB().collection("resident");
        const info = _.pick(req.body, ["name", "houseId", "sex", "old", "career"]);
        const { error, value } = Resident.validateResident(info);
        if (error) {
                console.log(error.details[0].type);
                return res.status(400).send(formatError(error.details[0].context.label, error.details[0].type));
        }
        const resident = new Resident(value.name, value.houseId, value.sex, value.old, value.career);
        await db.insertOne(resident);
        res.send(resident);
});

module.exports = router;
