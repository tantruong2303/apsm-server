const express = require("express");
const router = express.Router();
const check = require("../middleware/checkLogin");

router.get("/home", [check], (req, res) => {
        res.render("home.ejs", { pageTitle: "Home", ...req.check });
});

module.exports = router;
