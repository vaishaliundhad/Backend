import { Router } from "express";
import * as ProductController from '../Controller/ProductController.js'
import { SellerTokenMiddleware,  TokenMiddleware } from "../../libs/Middleware/TokenMiddleware.js";


const ProductRouter = Router();

//create product router
ProductRouter.post("/insert", SellerTokenMiddleware, ProductController.CreateProductController);

//read All product router
ProductRouter.get("/", TokenMiddleware, ProductController.GetAllControllerProduct);

//read product router 
ProductRouter.get("/:productid", TokenMiddleware, ProductController.GetByIdProductController);

//Edit product router
ProductRouter.put("/:productid", SellerTokenMiddleware, ProductController.UpdateProductController);

//Delete product router
ProductRouter.delete("/:productid", SellerTokenMiddleware, ProductController.DeleteProductController);

export default ProductRouter
