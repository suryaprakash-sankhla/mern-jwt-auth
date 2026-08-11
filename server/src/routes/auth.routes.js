import express, { Router } from "express";
import { getUserData, home, logIn, logOut, signUp } from "../controllers/auth.controller.js";
import { upload } from "../middlewares/multer.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const authRouter = Router();

authRouter.get("/",home);
authRouter.post("/signup",upload.single("profileImage"),signUp);
authRouter.post("/login",logIn);
authRouter.post("/logout",logOut);
authRouter.get("/getuserdata",checkAuth,getUserData);

export default authRouter;