import { Request, Response, Router } from 'express';
const userRouter: Router = Router();
const jsonfile = require('jsonfile')

// const file = '/tmp/data.json'
const file = "../05-Express-json-Without-mvc/db/users.json"

// http://127.0.0.1:8899/api/users/home

userRouter.get("/", (request: Request, response: Response) => {
    // response.json({ msg: "Hello , Welcome Home" });
    jsonfile.readFile(file, function (err: any, obj: any) {
        if (err) console.error(err)
        // console.dir(obj)
        response.json(obj)
    })
})



export default userRouter