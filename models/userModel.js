
import mongoose from "mongoose";



const UserSchema = new mongoose.Schema({
    first_name : {
        type: String,
        required: [ true , "Please enter your first name"],
        unique: true
    },
    last_name : {
        type: String,
        required: [ true , "Please enter your last name"],
        unique: true
    },
    Mobile_number : {
        type: Number,
        required: [ true , "Please enter your phone number"],
        unique: true
    },
    password : {
        type: String,
        required: [ true , "Please enter a password"],
        
    },
    isVerified : {
        type: Boolean,
        default: false,
        
    },
    isAdmin :{
        type: Boolean,
        default:false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpirt: Date
})