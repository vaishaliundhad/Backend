import { Request, Response } from "express";
import { Iuser } from "../models/IUser";
import userTable from "../db/userSchema";
import mongoose from "mongoose";


export const postUser = async (request: Request, response: Response) => {
    let { username, email, password, imageUrl, isActive } = request.body;
    let theuser: Iuser | undefined | null = await new userTable({
        username: username,
        email: email,
        password: password,
        imageUrl: imageUrl,
        isActive: isActive
    }).save()
    if (theuser) {
        return response.status(200).json({
            msg: "user inserted",
            data: theuser
        })
    }
}


export const getAlluser = async (request: Request, response: Response) => {
    try {
        const theuser = await userTable.find();
        if (theuser) {
            return response.status(200).json({
                data: theuser
            })
        }
    }
    catch (error) {
        return response.status(500).json({

            msg: "not found any user"
        })
    }
}

export const getOneUser = async (request: Request, response: Response) => {
    let { userid } = request.params;
    try {
        const mongouserid = new mongoose.Types.ObjectId(userid);
        let theuser: Iuser | undefined | null = await userTable.findById(mongouserid);
        if (theuser) {
            return response.status(200).json(theuser)
        }
    }
    catch (err) {
        return response.status(500).json({
            msg: "not found userid"
        })
    }
}


export const updateUser = async (request: Request, response: Response) => {
    let { userid } = request.params;
    let { username, email, password, imageUrl, isActive } = request.body;
    try {
        const mongouserid = new mongoose.Types.ObjectId(userid)
        let updateuser = await userTable.findByIdAndUpdate(mongouserid, {
            username: username,
            email: email,
            password: password,
            imageurl: imageUrl,
            isActive: isActive
        })
       
        if (updateuser) {
            return response.status(200).json({
                data:updateuser,
                msg: "update successfull"
            })
        }
    }
    catch (error) {
        return response.status(500).json({
            msg: "something went wrong"
        })
    }
}


export const deleteUser = async (request:Request , response:Response)=>{
    let {userid}=request.params;
    try{
        const mongouserid= new mongoose.Types.ObjectId(userid)
        let deleteId = await userTable.findByIdAndDelete(mongouserid)
        if(deleteId)
        {
            return response.status(200).json({
                data:deleteId,
                msg:"delete successfully"
            })
        }
    }
    catch(error)
    {
        return response.status(500).json({
            msg:"something went wrong"
        })
    }
}