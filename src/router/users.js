const express = require("express");
const router = express.Router();

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

module.exports = router;
