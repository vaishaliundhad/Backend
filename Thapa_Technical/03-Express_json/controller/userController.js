import { Request , Response } from "express";
import { UserUtil } from "../Util/UserUtil";
/*
  * usage : get All user
  *url:  http://127.0.0.1:9999/users
   *method:GET
*/



    export const getAllUsers = async (request, response) => {
        try {
            console.log("inside Controller:");
            let userData = await UserUtil.getAllUserFromDB();
            
            return response.status(200).json(userData);
        }
        catch (error) {
            console.error("Error in getAllUsers:", error);
            return response.status(500).json({ msg: "Server Error"});
        }
    };
    