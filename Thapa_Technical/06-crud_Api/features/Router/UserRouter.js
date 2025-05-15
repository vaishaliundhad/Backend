import {  Router } from "express";
import * as UserController from '../Controller/UserController.js'
import {body} from 'express-validator'
import { TokenMiddleware } from "../../libs/Middleware/TokenMiddleware.js";

const  UserRouter = Router();

//create user router
UserRouter.post("/insert" , UserController.CreateUserController);

//read All user router
UserRouter.get("/" ,TokenMiddleware, UserController.GetAllUserController);

//read user router
UserRouter.get("/:userid" , TokenMiddleware, UserController. GetOneUserController);

//Edit user router
UserRouter.put("/:userid" , TokenMiddleware,  UserController.UpdateUserController);

//Delete user router
UserRouter.delete("/:userid" , TokenMiddleware, UserController.DeleteUserController);

//login user router
UserRouter.post("/login",
UserController.loginUser
)

export default  UserRouter

