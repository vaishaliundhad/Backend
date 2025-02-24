import mongoose from "mongoose";
import { Request , Response } from "express";
import { IUser } from "../Model/IUser";
import UserTable from "../Database/userSchema";

export const createAlluser = async(request:Request , response:Response)=>{
    try{
        console.log("create All user");
        const userData=await UserTable.find();
        if(userData.length === 0){
            return response.json({msg:"userData not found"})
        }
        else{
            return response.json({
                data:userData
            })
        }
        
    }
    catch(err){
        return response.status(400).json({
            msg:"somoething went wrong"
        })
    }
}

export const postuser = async (request:Request , response:Response)