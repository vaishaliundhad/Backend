import { Request , Response } from 'express'
import { IGroup } from '../Model/IGroup';
import GroupsTable from '../Database/GroupSchema';
import mongoose from 'mongoose';

//post => insert
export const insertGroup = async(request:Request, response:Response)=>{
  let {name}= request.body;
  console.log("name", name);
  let theGroup: IGroup|null|undefined=await new GroupsTable({name:name}).save();
  if(theGroup){
    return response.status(200).json({
        data:theGroup,
        msg:"group is created"
    })
  }

}
//All

export const createAllGroup = async(request:Request , response:Response)=>{
    console.log("hello ");
    const groupdata = await GroupsTable.find();
    if(groupdata)
    {
        return response.json({data:groupdata})
    }

}

//

export const createGroup = async(request:Request , response:Response)=>{
    let {groupId} = request.params;
    const mongoGroupId = new mongoose.Types.ObjectId(groupId);
    let theGroup :IGroup |undefined |null = await GroupsTable.findById(mongoGroupId)
    return response.status(200).json(theGroup);
}
//put
export const putuser =  async(request:Request , response:Response)=>{
   const {groupId}=request.params;
   const groupData= request.body;
    const mongooseGroupId = new mongoose.Types.ObjectId(groupId);
    const updatedgroup= await GroupsTable.findByIdAndUpdate(groupData , mongooseGroupId) 
      if(updatedgroup){
        return response.status(200).json({data:groupData});
      }
}


export const Delete = async(request:Request , response:Response)=>{
    const {groupId}=request.params;
    const DeleteId = await GroupsTable.findByIdAndDelete(groupId)
    if(DeleteId){
        response.status(200).json({
            data:DeleteId
        })
    }
}