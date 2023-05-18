/** @format */

const express = require("express");
const globalMiddlewares = require("./middlewares/global");
const { handleNotFound, handleGlobalError } = require("./app/error");
const routes = require("./app/route");

const app = express();

app.use(globalMiddlewares);
app.use("/api/v1", routes);
app.use(handleNotFound, handleGlobalError);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server starts and listen on port ${PORT}`);
});
