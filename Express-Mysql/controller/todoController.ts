import { Request, Response } from "express";
import { Todos } from "../models/todoModel";
import { request } from "http";





export const createToDo: any = async (request: Request, response: Response) => {
    var todos = await Todos.create({ ...request.body });
    return response.status(200).json({
        message: "Todo created successfully",
        data: todos
    })
}

export const getAllToDo: any = async (request: Request, response: Response) => {
    const todos = await Todos.findAll();
    return response.status(200).json({
        message: "Todo getAll successfully",
        data: todos
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

// export const  GetTodo:any = async(request:Request , response:Response)=>{
//     let {id}=request.params
//     let todo = await Todos.findByPk(id)
//      if(!todo)
//      {
//         return response.status(200).json({
//             data:todo,
//             msg:"Get todo"
//         })
//      }
// }

// http://127.0.0.1:9977/todos/todos/1

export const GetTodo: any = async (request: Request, response: Response) => {
    try {
        let { id } = request.params;

        let todo = await Todos.findByPk(id);

        if (!todo) {
            return response.status(404).json({
                success: false,
                msg: " Todo Not Found!"
            });
        }

        return response.status(200).json({
            success: true,
            data: todo,
            msg: " Todo Fetched Successfully!"
        });

    } catch (error) {
        console.error("Error Fetching Todo:", error);
        return response.status(500).json({
            success: false,
            msg: " Internal Server Error"
        });
    }
};

//update todo

// export const updateTodo:any = async(request:Request , response:Response)=>{
//     let {id}= request.params;
//     let {name , description}= request.body;

//     let todoId= await Todos.findByPk(id)
//     if(!todoId){
//         return response.status(400).json({

//                 data:null,
//                  msg:"Id is not found"
//             })
//     }
//     let updatetodo = await Todos.update({name , description} , {where :{ id }})

//     return  response.status(200).json({
//         data:updatetodo,
//         msg:"Todo is updated"
//     })
// }

export const updateTodo: any = async (request: Request, response: Response) => {
    try {
        let { id } = request.params;
        let { name, description } = request.body;

        let todo = await Todos.findByPk(id);
        if (!todo) {
            return response.status(404).json({
                success: false,
                msg: "Todo Not Found!"
            });
        }
        await Todos.update({ name, description }, { where: { id } });
        let updatedTodo = await Todos.findByPk(id);
        return response.status(200).json({
            success: true,
            data: updatedTodo,
            msg: "Todo Updated Successfully!"
        });

    } catch (error) {
        console.error("Error Updating Todo:", error);
        return response.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
};


//delete todo

export const todoDelete: any = async (request: Request, response: Response) => {
    let { id } = request.params
    let todoDelete = await Todos.destroy({ where: { id } })
    if (!todoDelete) {
        return response.status(500).json({
            data: null,
            msg: "Id is not found"
        })
    }
    return response.status(200).json({
        data: todoDelete,
        msg: "delete this todo"
    })
}
