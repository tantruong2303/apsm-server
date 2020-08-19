const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const protectedRouter = require("../middleware/protectedRouter");
const check = require("../middleware/checkLogin");

router.get("/login", [protectedRouter], [check], (req, res) => {
        res.render("login.ejs", { pageTitle: "Login", ...req.check });
});

router.get("/register", [protectedRouter], [check], (req, res) => {
        res.render("register.ejs", { pageTitle: "Register", ...req.check });
});

router.get("/changePassword", [auth], [check], (req, res) => {
        res.render("changePassword.ejs", { pageTitle: "Change password", ...req.check });
});

router.get("/delete", [auth], [check], (req, res) => {
        res.render("deleteUser.ejs", { pageTitle: "Delete Account", ...req.check });
});

router.get("/logout", [auth], (req, res) => {
        res.clearCookie("_id");
        res.redirect("/home");
});
module.exports = router;
