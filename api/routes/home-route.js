const express = require("express");
const path = require("path");
const router = express.Router();

router.use("/", (req, res, next) => {
  console.log(__dirname);
  res.status(200);
  res.send('<h1>cioa</h1>');
});

module.exports = router;
