const express = require("express");

const { query } = require("express-validator");

const affinityControllers = require("../controllers/affinity-controller");

const router = express.Router();

router.get(
  "/",
  query("her").trim().not().isEmpty().withMessage("The 'her' field couldn't be empty").isDate({
    format: 'DD-MM-YYYY'
  }).withMessage("Please insert a valid date: DD-MM-YYYY"),
  query("him").trim().not().isEmpty().withMessage("The 'him' field couldn't be empty").isDate({
    format: 'DD-MM-YYYY'
  }).withMessage("Please insert a valid date: DD-MM-YYYY"),
  query("lan", "The language value should be either 'it' or 'en'").trim().isIn(["it", "en"]).optional(),
  affinityControllers.calculateAffinity
);

module.exports = router;
