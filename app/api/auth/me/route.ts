import { NextRequest,NextResponse } from "next/server";
import { getServerSession, } from "next-auth/next"
import User from "@/app/models/user";

module.exports={
    GET:async(req:NextRequest,res:NextResponse)=>{
        try{
            const payload=JSON.parse(await req.headers.get("payload")|| "")
            
            let user=await User.findById(payload.id).select({password:0})
            return NextResponse.json(user,{status:200})
        }catch(error:any){
            return NextResponse.json({message:error.message},{status:400})
        }
    }
}