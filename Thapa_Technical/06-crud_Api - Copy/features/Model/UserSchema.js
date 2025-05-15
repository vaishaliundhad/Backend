import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: false },
    role:{
        type:String,
        enum :['buyer' , 'seller' , 'admin'],
        default :'buyer'
    }
}, { timestamps: true });


const UserTable = new mongoose.model('user', UserSchema);
export default UserTable