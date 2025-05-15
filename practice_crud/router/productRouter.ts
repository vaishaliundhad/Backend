
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

productRouter.get("/:productid" , async(request:Request , response:Response)=>{
  console.log("getone");
  
  await productController.getOneUser(request , response)
})

productRouter.put("/:productid" , async(request:Request , response:Response)=>{
 console.log("update product");
 await productController.productUpdate(request, response)
})

productRouter.delete("/:productid" , async(request:Request , response:Response)=>{
  await productController.deleteproduct(request, response)
})

export default productRouter