import { IUser } from "../Models/IUser";
import { userUtil } from "../Utils/userUtil";
import {Request , Response} from 'express'



export const getAlluser=async(request:Request , response:Response)=>{
try{
    let userdata:IUser[]= await userUtil.getAllUserFromDB();
    response.json(userdata)
}
catch{
    response.json({msg:"error"})
}
}