import jwt from "jsonwebtoken";

export const authMiddleware = function (roles) {
  return function (req, res, next) {
    try {
      const token = req.headers.authorization;
      console.log(token);
      var decoded = jwt.verify(token, process.env.TOKEN_KEY);
      if (!roles.includes(decoded.role)) {
        return res.status(401).json({ message: "You don't have access" });
      }
      next();
    } catch (error) {
      return res.status(401).json({ error });
    }
  };
};