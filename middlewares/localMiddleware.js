/** @format */

const checkBody = (req, res, next) => {
  const { phone } = req.body;

  // validation
  if (phone === undefined) {
    return res
      .status(403)
      .json({ msg: "the content body key should be phone" });
  } else {
    next();
  }
};

module.exports = checkBody;
