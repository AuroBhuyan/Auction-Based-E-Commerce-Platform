import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authControllers.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Dummy
router.get("/test", requireSignIn, isAdmin, testController);

// admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  console.log("✅ /admin-auth route reached for user:", req.user);
  res.status(200).send({ ok: true });
});


export default router;
