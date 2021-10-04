exports.getAppTestInfo = (req, res, next) => {
  return res
    .status(200)
    .json({ "Testing Testing classroom rest API harperdb": "v1.0.0" });
};
