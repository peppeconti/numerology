const couples = require("../utils/results");

const calculateAffinity = async (req, res, next) => {
  let result;
  const { first, second } = req.query;
  couples[first][second]
    ? (result = couples[first][second])
    : (result = couples[second][first]);
  // RESPONSE
  res.status(200).json({
    status: true,
    affinity: result,
  });
};
exports.calculateAffinity = calculateAffinity;
