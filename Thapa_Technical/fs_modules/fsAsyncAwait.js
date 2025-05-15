const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "example.txt");

// fs.promises.readdir(filepath).then((data)=> console.log(data)).catch((err)=> console.log(err));

// const readFolder = async () => {
//     try {
//         const res = await fs.promises.readdir(filepath);
//         console.log(res);
//     }
//     catch(err){
//         console.error(err)
//     }
// }

// readFolder()


const writeFolder = async () => {
    try {
        await fs.promises.writeFile(filepath, "this is the inital data2", "utf-8");
        console.log("file created successfully");
    }
    catch (err) {
        console.error(err);
    }
}

writeFolder()

const appendfileFolder = async () => {
    try {
        await fs.promises.appendFile(filepath, "\n this is a updated data", "utf-8")
        console.log("file creted successfully");
    }
    catch(err){
      console.error(err);
      
    }
}

appendfileFolder()

// const unlikeFolder = async()=>{
//  try{
//   await fs.promises.unlink(filepath)
//  }

//  catch(err){
//     console.error(err);
    
//  }
// }

// unlikeFolder()