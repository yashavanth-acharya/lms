import { NextRequest, NextResponse } from "next/server";
import Books from "@/app/models/Books";
import db from "@/app/utils/bootstrap"
module.exports={
    GET:async(req:NextRequest,  { params }: { params: { id: string } },res:NextResponse)=>{
        try{
            await db()
            let user=await Books.findById(params.id)
            return NextResponse.json(user,{status:200})
        }catch(error:any){
            return NextResponse.json({message:error.message},{status:400})
        }
    }
}



