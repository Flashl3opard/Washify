import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import User from "@/models/users";
import connectDB from "@/libs/mongodb";

export async function POST(request: Request) {
  const { first, last, email, pass } = await request.json();


  if (!first || !last || !email || !pass) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }



  if (pass.length < 6) {
    return NextResponse.json({ message: "Password must be at least 6 characters" }, { status: 400 });
  }

  try {
    await connectDB();
    const existUser = await User.findOne({ email });

    if (existUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashPass = await bcrypt.hash(pass, 10);

    const newUser = new User({
      first,
      last,
      email,
      pass: hashPass,
    });

    await newUser.save();

    return NextResponse.json({ message: "User created" }, { status: 201 });

  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
