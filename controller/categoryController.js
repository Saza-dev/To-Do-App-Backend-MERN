import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js"


// adding a category 

const addCategory = asyncHandler(async(req,res)=>{
    const newCategory = await Category.create(req.body)
    res.json(newCategory)
})

// get all category list 

const getCategories = asyncHandler(async(req,res)=>{
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (error) {
        console.log(error)
    }
})

// deleting a category 

const deleteCategory = asyncHandler(async(req,res)=>{
    const {_id} = req.params

    try {
        const deletedCategory = await Category.findByIdAndDelete(_id)
        res.json(deletedCategory)
    } catch (error) {
        console.log(error)
    }
})





export {addCategory,getCategories,deleteCategory}