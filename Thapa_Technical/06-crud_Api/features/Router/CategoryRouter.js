import { Router } from "express";
import * as CategoryController from '../Controller/CategoryController.js'
import { TokenMiddleware ,  SellerTokenMiddleware } from "../../libs/Middleware/TokenMiddleware.js";


const CategoryRouter = Router();

//create category router
CategoryRouter.post("/insert" ,SellerTokenMiddleware , CategoryController.CreateCategoryController);

//read All category router
CategoryRouter.get("/" , TokenMiddleware ,CategoryController.GetAllControllerCategory);

//read category router
CategoryRouter.get("/:categoryId" , TokenMiddleware ,CategoryController.GetByIdControllerCategory);

//Edit category router
CategoryRouter.put("/:categoryId" , SellerTokenMiddleware , CategoryController.UpdateControllerCategory);

//Delete category router
CategoryRouter.delete("/:categoryId" , SellerTokenMiddleware , CategoryController.DeleteControllerCategory);

export default CategoryRouter