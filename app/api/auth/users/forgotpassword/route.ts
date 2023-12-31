import { NextRequest, NextResponse } from "next/server"
import { z } from "zod";
import User from "@/app/models/user";
const bcrypt = require('bcrypt');

const schema=z.object({
    id: z.string(),
    newpassword: z.string(),
    conformpassword: z.string(),
  })

module.exports={
    POST:async(req:NextRequest,res:NextResponse)=>{
        const body=await req.json()
        const response = schema.safeParse(body);
        if (!response.success) {
            const { errors } = response.error;
            return NextResponse.json({ message: errors }, { status: 200 });
        }
        if(response.data.newpassword!=response.data.conformpassword){
            return NextResponse.json({ message: "Password is not matching" }, { status: 200 });
        }
        const user=await User.findById(body.id)
        if(!user){
            return NextResponse.json({ message: "User not found" }, { status: 200 });
        }
        const hashedPassword = bcrypt.hashSync(response.data.newpassword, 12);

        User.findByIdAndUpdate(body.id,{password:hashedPassword})

        return NextResponse.json({ message: "Password changed" }, { status: 200 }); 

    }
}