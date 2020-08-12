require("dotenv").config();
const express = require("express");
const { logger } = require("./app/logger");

const app = express();
require("./app/router")(app);
require("./app/prod")(app);

require("./app/db")();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    logger.info(`Current mode: ${process.env.NODE_ENV}`);
    logger.info(`Listening on port ${port}`);
});
