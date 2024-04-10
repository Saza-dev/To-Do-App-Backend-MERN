import mongoose  from "mongoose";

// categorySchema of the Mongo model
var categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true,
    },
    categoryDescription:{
        type:String,
        required:true,
    },
},{timestamps:true});

const Category = mongoose.models?.Category || mongoose.model('Category', categorySchema);
export default Category;