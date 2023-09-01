const express = require("express");

const { query } = require("express-validator");

const nameControllers = require("../controllers/name-controller");

const router = express.Router();

router.get(
  "/",
  query("name").trim().not().isEmpty().withMessage("The 'name' field couldn't be empty").isAlpha('it-IT', {ignore: ' '}).withMessage("The name can contain only alphabetic characters"),
  query("lan", "The language value should be either 'it' or 'en'").trim().isIn(["it", "en"]).optional(),
  nameControllers.calculateName
);

module.exports = router;