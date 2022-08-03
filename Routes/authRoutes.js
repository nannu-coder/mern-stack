import express from "express";
const router = express.Router();

import { register, login, upDateUser } from "../Controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

router.post("/register", register);
router.post("/login", login);
router.patch("/upDateUser", authenticateUser, upDateUser);

export default router;
