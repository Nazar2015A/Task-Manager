const jwt = require("jsonwebtoken");

module.exports = function (role) {
  return (req, res, next) => {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const candidate = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      if (candidate.role !== role) {
        return res
          .status(403)
          .json({ message: "You don't have a permissions!" });
      }
      req.user = candidate;
      next();
    } catch (e) {
      return res.status(401).json({ message: "Unauthorized!" });
    }
  };
};
