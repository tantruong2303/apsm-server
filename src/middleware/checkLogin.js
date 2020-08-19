module.exports = function (req, res, next) {
        const check = {};
        console.log(req.session);
        if (!req.cookies._id) {
                check.isLogin = false;
        } else check.isLogin = true;

        req.check = check;

        next();
};
