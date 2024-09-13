import express from "express";
import { login, logout, register } from "../controllers/auth-Controller.js";

const router = express.Router();

router.post("/sign-up", register);
router.post("/sign-in", login);
router.post("/sign-out", logout);

export default router;
