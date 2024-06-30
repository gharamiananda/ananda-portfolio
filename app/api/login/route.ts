// app/api/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export async function POST(request: Request) {
    await dbConnect();

    const { email, password } = await request.json();

   
    const user = await User.findOne({ email }).select({ password:true });

    if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ userId: user._id }, 'JWT_SECRET', {
        expiresIn: '1d',
    });


    return NextResponse.json({ token });
}
