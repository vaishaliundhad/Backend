// import { Request, Response, Router } from 'express';
// const userRouter: Router = Router();
// const jsonfile = require('jsonfile')

// // const file = '/tmp/data.json'
// const file = "../05-Express-json-Without-mvc/db/users.json"



// // http://127.0.0.1:9977/api/users

// userRouter.get("/", (request: Request, response: Response) => {
//     // response.json({ msg: "Hello , Welcome Home" });
//     jsonfile.readFile(file, function (err: any, obj: any) {
//         if (err) console.error(err)
//         // console.dir(obj)
//         response.json(obj)
//     })
// })



// export default userRouter



import { Request, Response, Router } from "express";


const userRouter: Router = Router()
const jsonfile = require('jsonfile')

const file = "../05-Express-json-Without-mvc/db/users.json"
userRouter.get("/", (request: Request, response: Response) => {
    jsonfile.readFile(file, function (err: any, obj: any) {
        if (err) console.log(err);
        response.json(obj)

    })
})

export default userRouter