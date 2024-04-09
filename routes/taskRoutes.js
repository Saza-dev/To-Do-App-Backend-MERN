import express  from "express";
import { addTask,deleteTask,getTasks, updateTask } from "../controller/taskController.js";
const router = express.Router()


// routes for tasks
router.post("/add-task", addTask)
router.get("/get-tasks", getTasks)
router.put("/update-task/:_id",updateTask)
router.delete("/delete-task/:_id",deleteTask)



export default router;