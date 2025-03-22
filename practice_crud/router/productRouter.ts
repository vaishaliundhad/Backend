
import * as productController from '../Controller/productController'
import { Request , Response , Router } from 'express'

const productRouter:Router=Router();

productRouter.post("/" , async(request:Request , response:Response)=>{
  await  productController.createProduct(request , response)
})

productRouter.get("/", async(request:Request , response:Response)=>{
    console.log("get");
    
    await productController.getAllproduct(request , response)
})

productRouter.get("/:id" , async(request:Request , response:Response)=>{
  await productController.getOneUser(request , response)
})

export default productRouter