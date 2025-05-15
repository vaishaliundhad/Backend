import {Router , Request , Response} from 'express'
import * as userController from '../Controller/userController'
import {body} from 'express-validator'

import { TokenMiddleware } from '../middleware/TokenMiddleware';




const userRouter:Router=Router();

// userRouter.post("/" , async(request:Request , response:Response)=>{
//      console.log("post");
//      await userController.register(request , response); 
// })

userRouter.post("/register" , TokenMiddleware,
     [
         body('username').not().isEmpty().withMessage("username is required"),
         body('email').isEmail().withMessage("proper email is required"),
         body('password').isStrongPassword().withMessage("strong password is required")
     ],
     async (request:Request , response:Response)=>{
          console.log("post");
          await userController.register(request , response)
          
     }
)

userRouter.get("/" , async(request:Request , response:Response)=>{
     console.log("get");
     await userController.getAlluser(request , response)
     
})

userRouter.get("/:userid", async(request:Request , response:Response)=>{
     console.log("getOne");
     await userController.getOneUser(request, response)
})

userRouter.put("/:userid" , async(request:Request , response:Response)=>{
     console.log("put");
     await userController.updateUser(request, response)
     
})

userRouter.delete("/:userid" , async(request:Request , response:Response)=>{
     console.log("delete");
     
 await userController.deleteUser(request , response)
})
export default userRouter