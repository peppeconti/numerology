const calculateAffinity = async (req, res, next) => {
  console.log(req.query);
  res.status(200).json({
    status: true,
    affinity: "50%",
  });
};
exports.calculateAffinity = calculateAffinity;
