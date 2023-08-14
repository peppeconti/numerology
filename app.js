const express = require("express");
const cors = require("cors");
const HttpError = require("./models/http-error");


// BODYPARSER
const bodyParser = require("body-parser");

// ROUTES
const affinityRoutes = require("./api/routes/affinity-route");

const app = express();

app.use(bodyParser.json());

app.use(cors());

// ROUTES
app.use("/api/affinity", affinityRoutes);

// ROUTE NOT FOUND
app.use((req, res, next) => {
    const error = new HttpError("Could not find this route", 404);
    throw error;
  });
// GENERAL ERROR HANDLING
app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json({
        status: false,
        error: {
            message: error.message,
            code: error.code || 500
        }
    });
});

module.exports = app;
