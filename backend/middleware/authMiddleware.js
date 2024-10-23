const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return res.status(409).json({ error: "Please Login" });
  } else {
    try {
      const decodeToken = jwt.verify(accessToken, process.env.SECRET);
      req.id = decodeToken.id;
      req.role = decodeToken.role;
      next();
    } catch (error) {
      res.status(409).json({ error: "Please Login" });
    }
  }
};
