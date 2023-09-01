const names = require("../utils/names");
const HttpError = require("../../models/http-error");
const { validationResult } = require("express-validator");
const { reduction } = require("./affinity-controller");

const calculateName = async (req, res, next) => {

  // VALIDATION
  const errors = validationResult(req);
  // console.log(errors);
  if (!errors.isEmpty()) {
    const listedErrors = errors.errors.map((e) => e.msg);
    const error = new HttpError(listedErrors[0], listedErrors, 422);
    return next(error);
  }

  let result;
  let type;
  let language;
  const { name, lan } = req.query;
  lan ? language = lan : language = "it";
  const charToNumber = name.toLowerCase().replace(' ', '').split("").map(e => e.charCodeAt(0)-96).join('')
  type = reduction(charToNumber);
  // RESPONSE
  res.status(200).json({
    status: "true",
    type,
    result: names[type][language]
  });
};
exports.calculateName = calculateName;