/** @format */

const morgan = require("morgan");
const cors = require("cors");
const express = require("express");

const globalMiddlewares = [morgan("dev"), cors(), express.json()];

module.exports = globalMiddlewares;
