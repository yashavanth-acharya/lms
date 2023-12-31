import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/user";
// import db from "@/app/utils/bootstrap"
module.exports={
    POST:async(req:NextRequest,res:NextResponse)=>{
        try{
            const input=await req.json()
            input.name=new RegExp(input.name,"i")
            input.username=new RegExp(input.username,"i")
            let user=await User.find(input).select({password:0})
            return NextResponse.json(user,{status:200})
        }catch(error:any){
            return NextResponse.json({message:error.message},{status:400})
        }
    }
}



