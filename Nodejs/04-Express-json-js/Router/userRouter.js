import  {Router} from 'express';
// import * as userController from "../Controllers/userController.js";
import * as  userController from '../Controller/userController.js'

const userRouter = Router();


//usege: get all user
//url:http://127.0.0.1:9999/users/api/users/home
//method:GET

userRouter.get("/",async(request , response) => {
    console.log("inside Router");
    await userController.getAllUsers(request,response);
    console.log(userController);
    
    
})

//usege: inseted Record
//url:http://127.0.0.1:9999/users/api/users/insertUser
//method:post

//http://127.0.0.1:9999/api/users/insertUser
userRouter.post("/insertUser" , (request, response) => {
    response.json({
        msg : "Record Inserted..."
    })
})

export default userRouter