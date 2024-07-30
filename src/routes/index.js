import express from "express";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";

const router = express.Router();

router.route("/auth", authRoutes);
router.route("/users", userRoutes);

export { router };
