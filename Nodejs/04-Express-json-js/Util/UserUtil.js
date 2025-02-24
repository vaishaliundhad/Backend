import jsonfile from 'jsonfile'
// import path from 'path'
// const jsonfile = require('jsonfile')


export class UserUtil{

    static userjsonpath="D:/Full Stack/Backend/Nodejs/04-Express-json-js/db.users.json"
    // static userjsonpath = path.join(__dirname, '..', 'db', 'user.json')

    static getAllUserFromDB(){
        return new Promise( (resolve , reject)=>{
        jsonfile.readFile(this.userjsonpath , ( err , data)=>{
         if(err){
            console.error("Error reading JSON file:", err); 
            reject(err);

         }
         else{
            resolve(data);
         }
        })
        })
    }
}