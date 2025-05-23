import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGODB_URI!)
        const connection=mongoose.connection  
        connection.on('connected',() => {
            console.log("MongoDB connected");
        })
        connection.on('error',(err)=>{
            console.log("MongoDB connection Error "+ err);
            process.exit()
        })
    }   
    catch (error) {
        console.log("Something went wrong in Connection")
        console.log(error)
    }
}