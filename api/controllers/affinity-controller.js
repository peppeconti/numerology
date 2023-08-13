const couples = require("../utils/results");
const HttpError = require('../../models/http-error');
const { validationResult } = require("express-validator");

const calculateAffinity = async (req, res, next) => {

  // VALIDATION
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    const listedErrors = errors.errors.map((e) => e.msg);
    const error = new HttpError(listedErrors.join(","), 422);
    return next(error);
  }

  let result;
  let language;
  const { her, him, lan} = req.query;
  lan ? language = lan : language = "it"; 
  couples[her][him]
    ? (result = couples[her][him][language])
    : (result = couples[him][her][language]);
  // RESPONSE
  res.status(200).json({
    status: true,
    affinity: result,
  });
};
exports.calculateAffinity = calculateAffinity;
