import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

const requireSignIn = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({ message: "No token provided" });
    }
    // Expecting format: "Bearer <token>"
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).send({ message: "Invalid token format" });
    }

    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.error("requireSignIn error:", error);
    return res.status(401).send({ message: "Invalid token" });
  }
};

// admin access
const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user || user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.error("isAdmin error:", error);
    return res.status(500).send({ message: "Server error" });
  }
};

export { requireSignIn, isAdmin };
