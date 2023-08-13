const express = require('express');

const affinityControllers = require('../controllers/affinity-controller');

const router = express.Router();

router.post(
  '/', affinityControllers.calculateAffinity
);

module.exports = router;