
import NextAuth from "next-auth";
import User from "@/models/users";
import connectDB from "@/libs/mongodb";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";


const Handler = NextAuth({
    session:{
        strategy:'jwt',
    },
        providers: [
            CredentialsProvider({
                name: "Credentials",
                credentials: {
                    email: {},
                    pass: {},
                },
                async authorize(credentials){
                    try{
                        await connectDB();
                        const user = await User.findOne({email: credentials?.email});
                        if (!user){
                            throw new Error("No user found with this email")

                        }
                        const isValidPass = await  bcrypt.compare(
                            credentials?.pass ?? "",user.pass as string
                        );

                        if (!isValidPass){
                            throw new Error ("Incorrect Password");
                        }
                        return user;
                    }
                    catch {
                        return null
                    }
                }
            })
        ],
        callbacks:{

            async jwt({token , user}){
                if (user) {
                    token.id = user.id;
                    token.email =  user.email;
                }
                return token;
            },
            async session({session,token}) {
                if (token) {
                    session.user = {
                        email: token.email,
                        name: token.name,
                        image: token.picture,
                    };
                };
                return session;

            }
        
    },
    pages:{
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET

});


export {Handler as GET, Handler as POST}