/** @format */

const emailValidator = (req, res) => {
  const { email } = req.body;
  // validation
  if (email === undefined) {
    return res
      .status(403)
      .json({ msg: "the content body key should be email" });
  }
  // Business logic
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Error handle
  if (!email) {
    return res.status(403).json({
      msg: "Enter an email, please.",
    });
  }
  if (!emailRegex.test(email)) {
    return res.status(403).json({
      msg: `${email} is invalid email address`,
      cause: "no special char is valid for email except (-) (.) and (_)",
    });
  }
  // genarate response
  return res.status(200).json({ msg: `${email} is valid email address` });
};

module.exports = emailValidator;
