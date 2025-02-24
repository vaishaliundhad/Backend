import path from 'path';
import {IBook} from '../Models/IBook';

const jsonfile = require('jsonfile')


export class UserUtil{

    private static userjsonpath = path.join(__dirname, '..', 'db', 'book.json')

    public static getAllUserFromDB():Promise<IBook[]>{
        return new Promise( (resolve , reject)=>{
        jsonfile.readFile(this.userjsonpath , ( err: any , data:any)=>{
         if(err){
            reject(err);

         }
         else{
            resolve(data);
         }
        })
        })
    }
}