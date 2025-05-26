
import mongoose , {Document,Model,Schema} from "mongoose";

export interface IUser extends Document{
    first: string;
    last: string;
    email: string;
    pass?: string;
    id: string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
    first: {
        type: String,
        required : true
    },
        last: {
        type: String,
        required : true
    },
        email: {
        type: String,
        required : true,
        unique: true
    },
        pass: {
        type: String,
        required : true
    },


})


const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User",UserSchema)
export default User