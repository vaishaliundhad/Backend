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