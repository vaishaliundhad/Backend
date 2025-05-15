const fs= require("fs");
const path= require("path");
const { log } = require("util");

const filename="fspromise.txt";
const filepath= path.join(__dirname , filename);

const file = __dirname;

fs.promises.readdir(file).then((data)=> console.log(data)).catch((err)=> console.log(err));

const filename1=__dirname;

// fs.promises.readdir(filename1).then((data)=> console.log(data).catch((err)=> console.log(err)));

// fs.promises.writeFile(filepath , "this is a  inital data" ,'utf-8').then(console.log("file created successfully")).catch((err)=> console.log(err))

// fs.promises.readFile(filepath , "utf-8").then((data)=> console.log(data)).catch((err)=>console.log(err))


// syntax :- fs.promises.appendFile(path , data , option).then().catch();

// fs.promises.appendFile(filepath , "this is as updated data" , "utf-8").then(console.log("file updated successfully")).catch((err)=> console.log(err))


//synatx :- fs.promises.unlike(path).then().catch()

fs.promises.unlink(filename).then(console.log("file deleted successfully")).catch((err)=> console.error("error deleted successfully",err))