import express from 'express';
import jsonfile from 'jsonfile'
const userRouter= express.Router();
// const jsonfile = require('jsonfile')

// const file = '/tmp/data.json'
const file = "D:/Full Stack/Backend/Nodejs/5-Express-json-Without-Mvc-js/db/user.json"

// http://127.0.0.1:8899/api/users/home

userRouter.get("/", (request, response) => {
    // response.json({ msg: "Hello , Welcome Home" });
    jsonfile.readFile(file, function (err, obj) {
        if (err) console.error(err)
        // console.dir(obj)
        response.json(obj)
    })
})
    


export default userRouter