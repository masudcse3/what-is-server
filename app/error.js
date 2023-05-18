/** @format */

const handleNotFound = (_req, _res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;

  next(error);
};

const handleGlobalError = (error, _req, res, _next) => {
  console.log("Error:", error);
  if (error.status) {
    return res.status(error.status).send(`<h2>${error.message}</h2>`);
  }
  return res.status(500).send("<h2>Something Went Wrong</h2>");
};

module.exports = { handleGlobalError, handleNotFound };
