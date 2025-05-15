// syntax :- fs.writeFileSync(filepath , data , options);
const fs= require("fs");
const path = require("path");
const filename ="text.txt"
const filepath= path.join(__dirname , filename);

fs.writeFileSync(filepath , "This is a inital data" , 'utf-8' , (err)=>{
    if(err) console.error(err);
    else console.error("file has been saved")
})

//  const read =fs.readFileSync(filepath , 'utf-8')
//  console.log(read);
 

const appendFile = fs.appendFileSync( filepath , "\n this is  updated data" , "utf-8");
console.log(appendFile);

const filedata = fs.unlinkSync(filepath);
console.log(filedata);
