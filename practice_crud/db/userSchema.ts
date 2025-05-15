import mongoose from "mongoose";
import { Iuser } from "../models/IUser";

const userSchema = new mongoose.Schema<Iuser>({
    username:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
    imageUrl:{type:String , required:true},
    isAdmin:{type:Boolean , default:false}
}, {timestamps:true})

const userTable = mongoose.model<Iuser>('user' , userSchema)

export default userTable;