import { Router } from "express";
import * as SubCategoryController from '../Controller/SubCategoryController.js'
import { TokenMiddleware , SellerTokenMiddleware } from "../../libs/Middleware/TokenMiddleware.js";

const SubCategoryRouter = Router();

//create category router
SubCategoryRouter.post("/insert" , SellerTokenMiddleware ,SubCategoryController.SubCategoryCreateController);

//read All category router
SubCategoryRouter.get("/" , TokenMiddleware , SubCategoryController.SubCategoryGetAllController);

//read category router
SubCategoryRouter.get("/:SubCategoryId" , TokenMiddleware , SubCategoryController.SubCategoryGetByIdController);

//Edit category router
SubCategoryRouter.put("/:SubCategoryId" , SellerTokenMiddleware , SubCategoryController.SubCategoryUpdateController);

//Delete category router
SubCategoryRouter.delete("/:SubCategoryId" , SellerTokenMiddleware , SubCategoryController.SubCategoryDeleteController);

export default SubCategoryRouter                        