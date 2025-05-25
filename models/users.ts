import { Mode } from "fs";
import mongoose , {Document,Model,Schema} from "mongoose";

interface IUser extends Document{
    first: string;
    last: string;
    email: string;
    pass?: string;
    id: string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
    first: {
        type: String,
        require : true
    },
        last: {
        type: String,
        require : true
    },
        email: {
        type: String,
        require : true,
        unique: true
    },
        pass: {
        type: String,
        require : true
    },


})


const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User",UserSchema)
export default User