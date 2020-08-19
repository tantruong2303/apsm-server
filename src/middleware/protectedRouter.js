module.exports = (req, res, next) => {
        if (req.cookies._id) {
                res.redirect("/home");
        }
        next();
};
