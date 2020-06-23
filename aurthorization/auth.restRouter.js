import express from "express";
import {
    signup,
    signin,
    forgotPassword
} from './auth.controller'
import {requireSignIn} from './auth.middleware'
export const authRouter = express.Router();
authRouter.post('/forgetpassword', forgotPassword)
authRouter.post("/signup", signup);
authRouter.post('/signin',signin)
