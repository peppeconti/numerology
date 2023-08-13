const calculateAffinity = async (req, res, next) => {
  res.status(200).json({
    status: true,
    affinity: '50%',
  });
};

exports.calculateAffinity = calculateAffinity;
