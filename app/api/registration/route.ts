// "use server"
import db from "../../utils/bootstrap"
import { NextRequest,NextResponse } from "next/server"
import User from "../../models/user"


module.exports=
{
    POST:async(req:NextRequest)=>{
    try{
        await db()
        const body=await req.json()
        const {username,name,password,email,phone}=body
        await User.create(body)
        return NextResponse.json({message:"User created"},{status:200})
    }catch(e:any){
        return NextResponse.json({message:e.message},{status:400})
    }
  
}   
}