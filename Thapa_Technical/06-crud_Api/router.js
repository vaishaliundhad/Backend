    import CategoryRouter from "./features/Router/CategoryRouter.js"
    import UserRouter from "./features/Router/UserRouter.js"
    import ProductRouter from "./features/Router/ProductRouter.js"
   import SubCategoryRouter from "./features/Router/SubCategoryRouter.js"

    export const AppRoutes = (app) => {
        app.use("/users", UserRouter) //user router
        app.use("/product", ProductRouter) //product router
        app.use("/category" , CategoryRouter) //category router
        app.use("/subcategory" , SubCategoryRouter) //SubCategory router
    }

