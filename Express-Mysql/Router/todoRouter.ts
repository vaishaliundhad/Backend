import { Router } from "express";
import {
    createToDo,
    // DeleteToDo,
    getAllToDo,
    // updatedToDo,
    GetTodo,
} from '../controller/todoController'

const todoRouter:Router = Router()

todoRouter.post("/inserttodos" , createToDo  ) 
todoRouter.get("/getalltodos" , getAllToDo  ) 
todoRouter.get("/todos/:id" ,  GetTodo) 
// router.post("/:id" , updateToDo  ) 
// router.post("/:id" , deleteToDo) 


export default todoRouter;