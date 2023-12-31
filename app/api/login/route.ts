// "use server"
import db from "../../utils/bootstrap"
import { NextRequest,NextResponse } from "next/server"
import User from "../../models/user"
import jwtGenerate from "../../lib/jwtGenerate"
import bcrypt from "bcrypt"
module.exports=
{
    POST:async(req:NextRequest)=>{
    try{
        await db()
        const body=await req.json()
      
        const {username,password,email,type}=body
        let user;
        if(username)
            user=await User.findOne({username,type})
        else
            user=await User.findOne({email,type})
        const pass=await bcrypt.compare(password,user?.password|| "")
       
        if(!user || !pass){
            return NextResponse.json({message:"Invalid credentials"},{status:400})
        }
        let payload={id:user._id,username:user.username,email:user.email,type:user.type}
        const token=await jwtGenerate(payload)
    

        return NextResponse.json(token,{status:200})
    }catch(e:any){
        console.log(e)
        return NextResponse.json({message:e.message},{status:400})
    }
  
}   
}