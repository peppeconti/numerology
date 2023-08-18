const express = require("express");
const path = require('path');
const cors = require("cors");
require('dotenv').config();
const HttpError = require("./models/http-error");


// BODYPARSER
const bodyParser = require("body-parser");

// ROUTES
const affinityRoutes = require("./api/routes/affinity-route");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// ROUTES
app.use("/api/affinity", affinityRoutes);

// ROUTE NOT FOUND
app.use((req, res, next) => {
    const error = new HttpError("Could not find this route", ["Could not find this route"], 404);
    throw error;
  });
// GENERAL ERROR HANDLING
app.use('/api', (error, req, res, next) => {
    res.status(error.code || 500);
    res.json({
        status: false,
        error: {
            message: error.message,
            messages: error.messages,
            code: error.code || 500
        }
    });
});

app.use('/', (error, req, res, next) => {
    res.status(error.code || 500);
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

module.exports = app;
