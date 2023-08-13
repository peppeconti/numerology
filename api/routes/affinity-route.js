const express = require("express");

const { query } = require("express-validator");

const affinityControllers = require("../controllers/affinity-controller");

const router = express.Router();

router.post(
  "/",
  query("her").not().isEmpty().withMessage("The field couldn't be empty").isDate({
    format: 'DD-MM-YYYY'
  }).withMessage("Please insert a valid date"),
  query("him").not().isEmpty().withMessage("The field couldn't be empty").isDate({
    format: 'DD-MM-YYYY'
  }).withMessage("Please insert a valid date"),
  affinityControllers.calculateAffinity
);

module.exports = router;
