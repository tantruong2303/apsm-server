const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const check = require("../middleware/checkLogin");

router.get("/add", [auth], [check], (req, res) => {
        res.render("resident.ejs", { pageTitle: "Add new resident", ...req.check });
});

module.exports = router;
