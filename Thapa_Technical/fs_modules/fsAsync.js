const fs= require("fs");
const path = require("path");


const filename = "fsAsync.txt";
const filepath= path.join(__dirname , filename);

// syntax :- fs.writeFile(path , data , options , callback);


fs.writeFile(filepath , "This is a inital data" , 'utf-8' , (err)=>{
    if(err) console.error(err);
    else console.error("file has been saved")
})

// syntax :- readFile(path ,  options , callback);
fs.readFile(filepath , "utf-8" , (err , data)=>{
    if(err) console.err(err);
    else console.log(data.toString());
    })


// fs.appendFile() : Appends data to a file. if the file doesn't exit. it is a created.

// syntax : fs.appendFile(path , data , Option , callback);

fs.appendFile(filepath , "\n this is a updated data" , "utf-8" , (err)=>{
    if(err) console.err(err);
    else console.log("file has been updated");
    
})

fs.unlink(filepath , (err)=>{
if(err) console.err(err)
else console.log("file has been deleted");

})
