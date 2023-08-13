const express = require('express');
var cors = require('cors');

// BODYPARSER
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(cors());

// ROUTE NOT FOUND
app.use((req, res, next) => {
    const error = new Error('Could not find this route');
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
