/** @format */

const emailValidator = require("../controllers/emailValidator");
const phoneValidator = require("../controllers/phoneValidator");
const checkBody = require("../middlewares/localMiddleware");

const router = require("express").Router();

router.get("/email", emailValidator);
router.get("/phone", checkBody, phoneValidator);

module.exports = router;
