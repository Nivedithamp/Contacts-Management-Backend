const express = require("express");
const fs = require('fs');
const https = require('https');
const dotenv = require("dotenv").config(); 
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const logger = require('./logger');

connectDb();
const app = express();

const port = process.env.PORT || 5000;

const httpsOptions = {
    key:fs.readFileSync('./key.pem'),
    cert:fs.readFileSync('./cert.pem')
}

const server = https.createServer(httpsOptions,app);

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

server.listen(port, () => {
    logger.info(`HTTPS is running in port ${port}`)
});