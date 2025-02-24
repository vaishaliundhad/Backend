import { Request , Response } from "express";
import { IBook } from "../Models/IBook";
import { UserUtil } from "../Util/UserUtil";
/*
  * usage : get All user
  *url:  http://127.0.0.1:9999/users
   *method:GET
*/


    export const getAllUsers = async (request:Request , response:Response)=>{
        try{
            console.log("inside Controller:");
            let userData:IBook[]= await UserUtil.getAllUserFromDB();
            
            return response.status(200).json(userData);

        }
        catch(error){
            return response.status(500).json({msg:"server Error"});
        }
    }