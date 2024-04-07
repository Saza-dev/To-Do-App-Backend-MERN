import express  from "express";
import { addTask } from "../controller/taskController.js";
const router = express.Router()


// routes for tasks
router.post("/add-task", addTask)




export default router;