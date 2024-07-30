import express from "express";
import {
  forgotPassword,
  logout,
  resetPassword,
  signIn,
  signUp,
} from "../controllers/authController";

const router = express.Router();

// jo peechey a rha ha
// base/auth/login
router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/logout", logout);

export { router };
