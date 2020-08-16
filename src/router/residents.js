const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
        res.render("resident.ejs", { pageTitle: "Add new resident" });
});

module.exports = router;
