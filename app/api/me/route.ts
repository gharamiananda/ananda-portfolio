import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
    await dbConnect();

    const { token } = await request.json();
    const  decoded:any =await jwt.verify(token, 'JWT_SECRET');

   
    const user = await User.findById(decoded?.userId );


    if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }



    return NextResponse.json({ user});
}
