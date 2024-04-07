import asyncHandler from "express-async-handler";
import Task from "../models/taskModel.js";

//adding a task 
const addTask = asyncHandler (async(req,res)=>{
    const newTask = await Task.create(req.body)
    res.json(newTask)
})

export {addTask}