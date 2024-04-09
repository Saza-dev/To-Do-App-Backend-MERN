import asyncHandler from "express-async-handler";
import Task from "../models/taskModel.js";

//adding a task 
const addTask = asyncHandler (async(req,res)=>{
    const newTask = await Task.create(req.body)
    res.json(newTask)
})


// getting the task list
const getTasks = asyncHandler (async(req,res)=>{

try {
    const tasks = await Task.find()
    res.json(newTask)
} catch (error) {
    console.log(error)
}
})

// updating tasks


const updateTask = asyncHandler(async(req,res)=>{
    const {_id} = req.params

    try {

        const updatedTask = await Task.findByIdAndUpdate(_id,{
            task : req?.body?.task,
            category: req?.body?.category,
            date : req?.body?.date

        })

        res.json(updatedTask)
        
    } catch (error) {
        console.log(error)
    }
})


// deleting task

const deleteTask = asyncHandler(async(req,res)=>{
    const {_id} = req.params
    try {
        const deletedTask =await Task.findByIdAndDelete(_id)
        res.json(deletedTask)
    } catch (error) {
        console.log(error)
    }
})



export {addTask,getTasks,updateTask,deleteTask}