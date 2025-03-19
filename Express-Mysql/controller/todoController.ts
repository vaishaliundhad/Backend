import { Request , Response } from "express";
import { Todos } from "../models/todoModel";
import { request } from "http";




export const createToDo:any = async (request:Request , response:Response)=>{
    var todos = await Todos.create({...request.body});
    return response.status(200).json({
        message:"Todo created successfully" ,
        data:todos
    })
}

export const getAllToDo:any = async(request:Request , response:Response)=>{
    const todos = await Todos.findAll();
    return response.status(200).json({
         message:"Todo getAll successfully",
         data:todos
    })
}


// export const  getToDoById:any = async(request:Request , response:Response)=>{
//     const {id}= request.params;
//     const todoId = parseInt(id, 10);
//     const todos = await Todos.findOne({ where :{todoId: todoId }});


//     return response.status(200).json({
//          message:"Todo getAll successfully",
//          data:todos
//     })
// }

export const  GetTodo:any = async(request:Request , response:Response)=>{
    let {id}=request.params
    let todo = await Todos.findByPk(id)
     if(!todo)
     {
        return response.status(200).json({
            data:todo,
            msg:"Get todo"
        })
     }
}