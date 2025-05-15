import { Router } from "express";
import * as CategoryController from '../Controller/CategoryController.js'
import { TokenMiddleware } from "../../libs/Middleware/TokenMiddleware.js";
import { OnlyCategoryEdit } from "../../libs/Middleware/OnlyCategoryEdit.js";

const CategoryRouter = Router();

//create category router
CategoryRouter.post("/insert" ,TokenMiddleware , CategoryController.CreateCategoryController);

//read All category router
CategoryRouter.get("/" , TokenMiddleware ,CategoryController.GetAllControllerCategory);

//read category router
CategoryRouter.get("/:categoryId" , TokenMiddleware ,CategoryController.GetByIdControllerCategory);

//Edit category router
CategoryRouter.put("/:categoryId" ,TokenMiddleware , OnlyCategoryEdit ,  CategoryController.UpdateControllerCategory);

//Delete category router
CategoryRouter.delete("/:categoryId" , TokenMiddleware , OnlyCategoryEdit ,CategoryController.DeleteControllerCategory);

export default CategoryRouter