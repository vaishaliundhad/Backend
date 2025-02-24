import {Request , Response , Router} from 'express'
import * as GroupController from '../Controller/GroupController'
import { request } from 'http';
const groupRouter:Router=Router();

groupRouter.post("/", async(request:Request , response:Response)=>{
       console.log("post");
       await GroupController.insertGroup(request , response);
       
})

groupRouter.get("/", async(request:Request , response:Response)=>{
        console.log("get");
        await GroupController.createAllGroup(request, response)
        
})

groupRouter.get("/:groupId", async(request:Request , response:Response)=>{
        console.log("groupid");
        await GroupController.createGroup(request, response)
})

groupRouter.put("/:groupId" ,async (request:Request , response:Response)=>{
  await GroupController.putuser(request , response)
})

groupRouter.delete("/:groupId", async(request:Request , response:Response)=>{
    await GroupController.Delete(request, response)
}) 
export default groupRouter