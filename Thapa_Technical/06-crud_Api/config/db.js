import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({ path: "./.env" });

const dbUrl = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_NAME;

async function connectDatabase() {
    try {
        await mongoose.connect(dbUrl, { dbName: dbName });
        console.log("database connection is ready....");
            
        //chanage stream

        // const product = mongoose.connection.collection('products');

        // const changeStream = product.watch()

        // changeStream.on("change", (change) => {
        //     console.log("Real time change detected:");
        //     console.log("opration type :", change.operationType);
        //     console.log("document id", change.documentKey?._id);

        //     if (change.operationType === 'insert') {
        //         console.log("new document", change.fullDocument);
        //     }
        //     if (change.operationType === 'update') {
        //         console.log("update field:", change.updateDescription.updatedFields);
        //     }
        //     if (change.operationType === 'delete') {
        //         console.log("delete field:", change.operationType._id);
        //     }

        // })
    } catch (err) {
        console.error(" MongoDB connection failed:", err.message);
    }
}

connectDatabase();
