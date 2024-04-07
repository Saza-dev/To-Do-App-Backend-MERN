import mongoose from "mongoose";

//Tasks Schema of the Mongo model
var taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    
},{timestamps:true});

const Task = mongoose.models?.Task || mongoose.model('Task', taskSchema);
export default Task;