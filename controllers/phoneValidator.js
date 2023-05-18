/** @format */

/** @format */

const phoneValidator = (req, res) => {
  const { phone } = req.body;
  // Error Handle
  if (!phone) {
    return res.status(403).json({
      msg: `enter a phone number, please`,
    });
  }
  // Business logic
  const phoneRegex = /^\+\d{1,3}\s?\(\d{1,4}\)\s?\d{1,3}-?\d{1,3}$/;
  // Error handle
  if (!phoneRegex.test(phone)) {
    return res.status(403).json({
      msg: `${phone} is invalid phone number`,
    });
  }
  // genarate response
  return res.status(200).json({ msg: `${phone} is valid phone number` });
};

module.exports = phoneValidator;
