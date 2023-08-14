const express = require("express");

const { query } = require("express-validator");

const affinityControllers = require("../controllers/affinity-controller");

const router = express.Router();

router.get(
  "/",
  query("her").not().isEmpty().withMessage("The field couldn't be empty").isDate({
    format: 'DD-MM-YYYY'
  }).withMessage("Please insert a valid date: DD-MM-YYYY"),
  query("him").not().isEmpty().withMessage("The field couldn't be empty").isDate({
    format: 'DD-MM-YYYY'
  }).withMessage("Please insert a valid date: DD-MM-YYYY"),
  query("lan", "The language value should be either 'it' or 'en'").isIn(["it", "en"]).optional(),
  affinityControllers.calculateAffinity
);

module.exports = router;
