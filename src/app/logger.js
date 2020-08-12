const { createLogger, format, transports } = require("winston");
require("winston-mongodb");
const { printf, colorize, combine, label, timestamp, prettyPrint, splat } = format;
const formatMessage = printf((msg) => {
        return `${msg.timestamp}-${msg.label} - ${msg.level}: ${msg.message}`;
});

module.exports.logger = createLogger({
        transports: [
                new transports.Console({
                        format: combine(
                                colorize(),
                                timestamp(),
                                label({ label: "[SYS-logger]" }),
                                splat(),
                                formatMessage
                        ),
                }),

                new transports.File({
                        filename: "system.log",
                        dirname: "log",
                        level: "info",
                        format: combine(timestamp(), prettyPrint()),
                }),

                new transports.File({
                        filename: "error.log",
                        dirname: "log",
                        level: "error",
                        format: combine(timestamp(), prettyPrint()),
                }),

                // new transports.MongoDB({
                //         db: process.env.DB_URL,
                //         level: "info",
                //         format: combine(timestamp(), prettyPrint()),
                // }),
        ],
});
