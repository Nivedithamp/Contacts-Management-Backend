const { constants } = require("../constants");
const logger = require("../logger");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR: res.json({ title: "Validation Failed", message: err.message, stackTree: err.stack });
        break;
        case constants.NOT_FOUND: res.json({ title: "Not Found", message: err.message, stackTree: err.stack });
        case constants.UNAUTHORIZED: res.json({ title: "Unauthorized", message: err.message, stackTree: err.stack });
        case constants.FORBIDDEN: res.json({ title: "Forbidden", message: err.message, stackTree: err.stack });
        case constants.SERVER_ERROR: res.json({ title: "Server Error", message: err.message, stackTree: err.stack });
        default: 
            logger.info("No Error, All good!");
            break;

    }
};

module.exports = errorHandler;