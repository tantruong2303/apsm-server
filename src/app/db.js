const mongodb = require("mongodb");
const mongodbURI = require("mongodb-uri");
const { logger } = require("../app/logger");

var _db;

//initialized database
module.exports = function () {
        mongodb.connect(process.env.DB_URL, { useUnifiedTopology: true }, (error, result) => {
                if (error) {
                        logger.error(error);
                        throw error;
                }

                const dbInfo = mongodbURI.parse(process.env.DB_URL);
                logger.info(`Connecting to host: ${dbInfo.hosts[0].host} on database: ${dbInfo.database}`);

                _db = result.db("apartment");
        });
};

//get db for controller
module.exports.getDB = () => {
        if (!_db) {
                logger.info(`you have to init before`);
                return;
        }

        return _db;
};
