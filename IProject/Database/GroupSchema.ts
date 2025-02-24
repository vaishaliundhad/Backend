import mongoose from "mongoose";
import { IGroup } from "../Model/IGroup";

const GroupSchema = new mongoose.Schema<IGroup>(

    {
        name:{type:String , required:true , unique:true},
    
    },
    {
        timestamps:true
    }
);

const GroupsTable = mongoose.model<IGroup>("group" , GroupSchema);

export default GroupsTable