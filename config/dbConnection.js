const mongoose = require("mongoose");
const logger = require("../logger");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected: ", connect.connection.host, connect.connection.name);
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
};

module.exports = connectDb;