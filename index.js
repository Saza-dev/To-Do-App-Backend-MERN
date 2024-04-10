import express from "express";
import env from 'dotenv';
import cors from 'cors';
import dbConnect from "./config/db.js"
import taskRoute from "./routes/taskRoutes.js"
import categoryRoute from "./routes/categoryRoutes.js"


const app = express();
const dotenv = env.config();
dbConnect();
const PORT = process.env.PORT || 4000
app.use(express.json());

app.use(cors())

app.use("/api/v1/TASK",taskRoute)
app.use("/api/v1/CATEGORY",categoryRoute)


app.listen(PORT,()=>{
    console.log(`Server is Running on PORT : ${PORT}`);
})