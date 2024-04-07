import mongoose  from "mongoose";



// Database connectivity created here


const dbConnect = ()=>{

try {
    mongoose.connect(process.env.MONGODB_URL)
    console.log("Connected to Database Sucessfully")
} catch (error) {
    console.log("Not connected to Database")
}

}

export default dbConnect;