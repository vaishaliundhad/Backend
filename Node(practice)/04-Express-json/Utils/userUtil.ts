import { IUser } from "../Models/IUser";
import path from "path";
const jsonfile = require("jsonfile")

export class userUtil{
    
    private static userjsonpath = path.join(__dirname, "..","db", "user.json")
    public static getAllUserFromDB():Promise<IUser[]>{
        return new Promise((resolve, reject)=>{
            jsonfile.readFile(this.userjsonpath , ( err: any , data:any)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(data)
                }
            })
        })
    }
}