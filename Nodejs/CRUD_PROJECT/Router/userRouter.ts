import { Response  , Request , Router } from "express";
import * as userController from '../Controller/userController'

const userRouter:Router=Router();


userRouter.get("/" , async(request:Request , response:Response)=>{
    await userController.createAlluser(request , response)
})


export default userRouter