import { NextRequest, NextResponse } from "next/server";
import Books from "@/app/models/Books";
import db from "@/app/utils/bootstrap"
import { z } from "zod";
const schema=z.object({
    title: z.string(),
    author: z.string(),
    category: z.string(),
    disabled: z.boolean()
  })

module.exports={
    POST:async(req:NextRequest,res:NextResponse)=>{
        try{
            await db()
            // { params }: { params: { title: string,author:string,category:string,disabled:Boolean } }
            const params=await req.json()
            const response = schema.safeParse(params);
            if (!response.success) {
                const { errors } = response.error;
                return NextResponse.json({message:errors},{status:200})
              }
            params.title=new RegExp(params.title,"i")
            params.author=new RegExp(params.author,"i")
            params.category=new RegExp(params.category,"i")

            let books=await Books.find(params)
            return NextResponse.json(books,{status:200})
        }catch(error:any){
            return NextResponse.json({message:error.message},{status:400})
        }
    }
}



