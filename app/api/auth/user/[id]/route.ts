import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/user";
import db from "@/app/utils/bootstrap"
module.exports={
    GET:async(req:NextRequest,  { params }: { params: { id: string } },res:NextResponse)=>{
        try{
            await db()
            console.log(params)
            let user=await User.findById(params.id).select({password:0})
            return NextResponse.json(user,{status:200})
        }catch(error:any){
            return NextResponse.json({message:error.message},{status:400})
        }
    }
}



