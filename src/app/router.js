const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const MongoDbStore = require("connect-mongodb-session")(session);
const cors = require("cors");
const passport = require("passport");

const home = require("../router/home");
const userAPI = require("../router/usersAPI");
const user = require("../router/users");
const residentAPI = require("../router/residentsAPI");
const resident = require("../router/residents");
const cookieParser = require("cookie-parser");

const userToken = new MongoDbStore({
        uri: process.env.DB_URL,
        collection: "token",
});

module.exports = function (app) {
        app.use(express.json());
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cookieParser());
        app.use(
                session({
                        secret: process.env.SECRET_SESSION_KEY,
                        resave: true,
                        saveUninitialized: false,
                        store: userToken,
                        cookie: {
                                maxAge: 2 * 3600 * 24,
                                secure: false,
                        },
                })
        );
        app.use(passport.initialize());
        app.use(passport.session());
        app.set("view engine", "ejs");
        app.set("views", path.join(__dirname, "../views"));
        app.use(express.static(path.join(__dirname, "../public")));
        //--------------Router--------//
        app.use("/", home);

        app.use("/api/user", userAPI);
        app.use("/user", user);

        app.use("/resident", resident);
        app.use("/api/resident", residentAPI);
        //---------------------------//
};
