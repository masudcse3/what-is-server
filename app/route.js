/** @format */

const routes = require("express").Router();

routes.use("/validator", require("../routes/validator"));
module.exports = routes;
