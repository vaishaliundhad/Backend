import express , {Application , Request , Response , Router} from "express"
import * as userController from '../Controllers/userController';


const userRouter:Router=Router()

userRouter.get("/" , async (request:Request , response:Response)=>{
     // response.json({msg:"welcome home"})
     await userController.getAlluser(request, response);
})


userRouter.post("/insert" , (request:Request , response:Response)=>{
 response.json({msg:"inserted"})
})

export default userRouter;