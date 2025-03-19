import express , {Application , Request , Response , Router} from 'express';


const userRouter:Router = Router();

userRouter.get("/home",(request:Request , response:Response) => {
    response.json({msg : "Hello , Welcome Home"});
})

//http://127.0.0.1:9977/users/insertUser
userRouter.post("/insertUser" , (request:Request , response:Response) => {
    response.json({
        msg : "Record Inserted..."
    })
})

export default userRouter