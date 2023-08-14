const couples = require("../utils/results");
const HttpError = require("../../models/http-error");
const { validationResult } = require("express-validator");

const reduction = (series) => {

  while (series.length > 1) {
      const number = series.split("").map((e) => Number(e));
      const sum = number.reduce((a, b) => a + b, 0).toString();
      return reduction(sum);
  }

  return series;
};

const calculateAffinity = async (req, res, next) => {

  // VALIDATION
  const errors = validationResult(req);
  // console.log(errors);
  if (!errors.isEmpty()) {
    const listedErrors = errors.errors.map((e) => e.msg);
    const error = new HttpError(listedErrors.join(","), 422);
    return next(error);
  }

  let result;
  let language;
  const { her, him, lan} = req.query;
  lan ? language = lan : language = "it";
  const herNumber = reduction(her.replace(/\D/g, ""));
  const himNumber = reduction(him.replace(/\D/g, ""));
  couples[herNumber][himNumber]
    ? (result = couples[herNumber][himNumber][language])
    : (result = couples[himNumber][herNumber][language]);
  // RESPONSE
  res.status(200).json({
    status: true,
    her: herNumber,
    him: himNumber,
    affinity: result,
  });
};
exports.calculateAffinity = calculateAffinity;
