import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const checkAdmin = async (req, res, next) => {
  try {
    const token = req.cookies?.token ||
                  req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        message: "Access Denied. No token provided.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or Expired Token",
    });
  }
};

const checkSuperAdmin = async (req, res, next) => {
  try {
    const token = req.cookies?.token ||
                  req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        message: "Access Denied",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "super-admin") {
      return res.status(403).json({
        message: "Only Super Admin can access this route",
      });
    }

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

export { checkAdmin,checkSuperAdmin};