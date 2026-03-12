import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import multer from "multer";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);

export default userRouter;