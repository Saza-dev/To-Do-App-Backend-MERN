import express  from "express";
import { addCategory, deleteCategory, getCategories } from "../controller/categoryController.js";
const router = express.Router()


// routes for category 

router.post("/add-category",addCategory)
router.get("/get-categories",getCategories)
router.delete("/delete-category/:_id",deleteCategory)







export default router;