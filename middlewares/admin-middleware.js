const createError = require("../utils/create-error");

const adminMiddleware = (req, res, next) => {
  try {
    if (req.user.role !== "ADMIN") {
      return createError(403, "Forbidden");
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = adminMiddleware;
