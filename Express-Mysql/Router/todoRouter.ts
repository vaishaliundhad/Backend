import { Router } from "express";
import {
    createToDo,
    getAllToDo,
    GetTodo,
    todoDelete,
    updateTodo,
} from '../controller/todoController'


const todoRouter: Router = Router()

todoRouter.post("/inserttodos", createToDo)
todoRouter.get("/getalltodos", getAllToDo)
todoRouter.get("/todos/:id", GetTodo)
todoRouter.put("/updatetodo/:id", updateTodo);
todoRouter.delete("/deletetodo/:id", todoDelete)




export default todoRouter;


