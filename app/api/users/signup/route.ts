import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel'
import { NextRequest,NextResponse }  from 'next/server'
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helper/mailer";


connect()

export async function POST(request:NextRequest){
    try{
        const reqBody =await request.json()
        const {firstname,lastname,phonenumber,password} =reqBody
        // Validation:\  
        console.log(reqBody);

        const user = await User.findOne({phonenumber})
        if (user){
            return NextResponse.json({error:"User already Exists!"},{status:400})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPass = await bcryptjs.hash(password,salt)

        const newuser = new User({
            firstname,
            lastname,
            phonenumber,
            password: hashedPass
        })

        const SavedUser = await newuser.save()
        console.log(SavedUser)


        //send Verification Email   
        await sendEmail({phonenumber,emailType: "VERIFY",userID: SavedUser._id})

        return NextResponse.json({
            message:"User registered Succesfully",
            success: true,
            phonenumber})

    }
    catch (error:any){
        return NextResponse.json({error: error.message},{status: 500})
    }
}