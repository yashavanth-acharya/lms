import Book from "@/app/models/Books"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod";
import Upload from "@/app/lib/fileupload"
import handler from "@/app/lib/util";
import db from "@/app/utils/bootstrap"
export const config = {
    api: {
      bodyParser: {
        sizeLimit: '50mb', // Adjust the size limit as needed
      },
    },
  };

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const ACCEPTED_PDF_TYPES = ["application/pdf"];
const schema = z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    category: z.string(),
    pdf: z.string(),
    coverpage: z.string()
    // pdf: z.any().refine((file) => file?.size <= MAX_FILE_SIZE, `Max size is 5MB.`).
    // refine((file) => ACCEPTED_PDF_TYPES.includes(file?.type),"Only .pdf formats are supported."),
    // coverpage: z.any().refine((file) => file?.size <= MAX_FILE_SIZE, `Max size is 5MB.`).
    // refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),"Only .jpg, .jpeg, .png and .webp formats are supported."),
      
  });

  const schemaUpdate = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    author: z.string(),
    category: z.string(),
    pdf: z.string(),
    coverpage: z.string()
    // pdf: z.any().refine((file) => file?.size <= MAX_FILE_SIZE, `Max size is 5MB.`).
    // refine((file) => ACCEPTED_PDF_TYPES.includes(file?.type),"Only .pdf formats are supported."),
    // coverpage: z.any().refine((file) => file?.size <= MAX_FILE_SIZE, `Max size is 5MB.`).
    // refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),"Only .jpg, .jpeg, .png and .webp formats are supported."),
      
  });

  const schemaDelete=z.object({
    id: z.string()
  })



  
module.exports={
    POST:async(req:NextRequest,res:NextResponse)=>{
        try{
            const body=await req.json()
            const response = schema.safeParse(body);
            if (!response.success) {
                const { errors } = response.error;
                return NextResponse.json({message:errors},{status:200})
              }
              // console.log(response.data)
              await db()
              await Book.create(response.data)
            
           
            return NextResponse.json({message:"Book created"},{status:200})
        }catch(error:any){
            return NextResponse.json({message:error.message},{status:400})
        }
    },
    PUT:async(req:NextRequest,res:NextResponse)=>{
      try{
        const body=await req.json()

        const id=body.id
        
        const response = schemaUpdate.safeParse(body);
        if (!response.success) {
            const { errors } = response.error;
            return NextResponse.json({message:errors},{status:200})
          }
          await db()
          await Book.findByIdAndUpdate(id,response.data)
        
       
        return NextResponse.json({message:"Book updated"},{status:200})
    }catch(error:any){
        return NextResponse.json({message:error.message},{status:400})
    }
    },
    DELETE:async(req:NextRequest,res:NextResponse)=>{
        try{
          const body=await req.json()
  
    
          const response = schemaDelete.safeParse(body);
          if (!response.success) {
              const { errors } = response.error;
              return NextResponse.json({message:errors},{status:200})
            }
            await db()
            const checkBook=await Book.findById(response.data.id)
            if(!checkBook){
              return NextResponse.json({message:"Book not found"},{status:200})
            }
            await Book.findByIdAndDelete(response.data.id)
          
         
          return NextResponse.json({message:"Book deleted"},{status:200})
      }catch(error:any){
          return NextResponse.json({message:error.message},{status:400})
      }
    },
  }

