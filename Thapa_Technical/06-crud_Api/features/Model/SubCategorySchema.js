import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema({
    SubCategoryName: { type: String, required: true, unique: true },
    SubCategoryDesciption: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
    isActive: { type: Boolean, required: true }
}, { timestamps: true })

const SubCategoryTable = mongoose.model('subcategory', SubCategorySchema)
export default SubCategoryTable