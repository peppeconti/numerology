const express = require("express");
const path = require("path");
const favicon = require("express-favicon");
const cors = require("cors");
require("dotenv").config();
const HttpError = require("./models/http-error");

// BODYPARSER
const bodyParser = require("body-parser");

// ROUTES
const affinityRoutes = require("./api/routes/affinity-route");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(__dirname + "/assets/favicon.ico"));

app.use(cors());

// ROUTES



app.use("/api/affinity", affinityRoutes);

app.use("/", (req, res, next) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use("/", (req, res, next) => {
  res.status(400);
  res.sendFile(path.join(__dirname, "views", "404.html"));
});





app.use((req, res, next) => {
  const error = new HttpError(
    "Could not find this route",
    ["Could not find this route"],
    404
  );
  throw error;
});

app.use("/api/*", (error, req, res, next) => {
  res.status(error.code || 500);
  res.json({
    status: false,
    error: {
      message: error.message,
      messages: error.messages,
      code: error.code || 500,
    },
  });
});

module.exports = app;
