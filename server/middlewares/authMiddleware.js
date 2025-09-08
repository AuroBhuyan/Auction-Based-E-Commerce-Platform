import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

const requireSignIn = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.log("❌ No Authorization header");
      return res.status(401).send({ message: "No token provided" });
    }

    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      console.log("❌ Invalid Authorization format:", authHeader);
      return res.status(401).send({ message: "Invalid token format" });
    }

    const token = parts[1];
    const decode = JWT.verify(token, process.env.JWT_SECRET);

    console.log("✅ Decoded JWT:", decode);

    req.user = decode;
    next();
  } catch (error) {
    console.error("❌ requireSignIn error:", error.message);
    return res.status(401).send({ message: "Invalid token" });
  }
};

// admin access
const isAdmin = async (req, res, next) => {
  try {
    console.log("Checking isAdmin for user id:", req.user?._id);

    const user = await userModel.findById(req.user?._id);
    console.log("Fetched user:", user);

    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    if (user.role != 1) { // ✅ loose check (handles string "1" also)
      console.log("❌ User not admin. role =", user.role);
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    }

    console.log("✅ User is admin");
    next();
  } catch (error) {
    console.error("❌ isAdmin error:", error.message);
    return res.status(500).send({ message: "Server error" });
  }
};

export { requireSignIn, isAdmin };
