import mongoose, { mongo } from "mongoose";


const Mongo_URI= process.env.MONGO

if (!Mongo_URI){

    throw new Error ("Please define mongo environment in env local")
}

async function connectDB() {
    if (mongoose.connection.readyState===1 ) {
        return mongoose;
    }
    const opts =  {
        bufferCommands: false,       
    }
    await mongoose.connect(Mongo_URI!,opts);
    return mongoose;
}

export default connectDB
