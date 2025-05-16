import mongoose from "mongoose";
import { DEFAULT_CIPHERS } from "tls";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}
 
async function dbConnect() : Promise<void> {
    if (connection.isConnected){
        console.log("Already Connect to DataBase");
        return
    }
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {})

        connection.isConnected = db.connections[0].readyState
        console.log("DataBase Connected Successfully!")
    }   catch(error) {
        console.log("DataBase connection Failed ", error)
        process.exit(1)
    }
}

export default dbConnect;


