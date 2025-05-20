
import User from "@/models/userModel";
import nodemailer from "nodemailer"
import bcryptjs from "bcryptjs";
import { browser } from "process";

export const sendEmail = async({email ,emailType, userID}:any) => {
    try{
        const hashedToken = await bcryptjs.hash(userID.toString(),10)
        if (emailType ==="VERIFY"  ) {
            await User.findByIdAndUpdate(userID,
                {verifyToken: hashedToken,
                    verifyTokenExpiry:Date.now() + 36000000
                 }
            )

        }
        else if(emailType==="RESET"){
            await User.findByIdAndUpdate(userID,
                {forgotToken: hashedToken,
                    forgotTokenExpiry:Date.now() + 36000000
                 }
            )

        }


        const nodemailer = require("nodemailer");
        // Create a test account or replace with real credentials.


        var transport = nodemailer.createTransport({
        host: "live.smtp.mailtrap.io",
        port: 587,
        auth: {
            user: "dd38bbc9f62d467a9b757ac78db061c7",
            pass: "<YOUR_API_TOKEN>"
        }
        });

    const MailOptions = {
    from: 'sheoreyyash@gmail.com',
    to: email,
    subject: emailType=="VERIFY" ? "Verify your Email" :  "Reset your Password",
    text: "Hello world?", // plain‑text body
    html: `<p>Click <a href="${process.env.DOMAIN}/verifyEmail?token=${hashedToken}">Here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"} or 
    copy and paste the link below in your browser. <br>${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`,
    }
    const mailResponse  = await transport.sendMail(MailOptions)
    return mailResponse 

    }
    catch (error) {
        
    }
}