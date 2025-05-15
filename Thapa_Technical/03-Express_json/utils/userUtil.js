// import path from 'path';
// const jsonfile = require('jsonfile')


// export class UserUtil{

    
//      static userjsonpath = path.join(__dirname, "..","db", "user.json");
//      static getAllUserFromDB(){
//         return new Promise( (resolve , reject)=>{
//         jsonfile.readFile(this.userjsonpath , ( err , data)=>{
//          if(err){
//             reject(err);

//          }
//          else{
//             resolve(data);
//          }
//         })
//         })
//     }
// }

import  path from 'path'
const jsonfile= require('jsonfile')

export class userUtil{
    static userpathjson = path.join(__dirname , "..", "db" , "user,json")
    static getAlluserFromDb(){
        return new Promise((resolve , reject)=>{
            jsonfile.readFile(this.userpathjson , (err, data)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(data)
                }
            })
        })
    }
}