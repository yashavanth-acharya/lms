import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {verifyToken} from "./app/lib/jwt"
import { headers } from 'next/headers'
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const authorization = request.headers.get("authorization")
    
  //  Get the token from the request headers or cookies or wherever it's stored
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
      return Response.json({ success: 'Unauthorized: Token not provided' },{status:401});
    }

    try {
      // Verify the token
      const user=await verifyToken(token);
      const requestHeaders = new Headers(request.headers)
      requestHeaders.set('payload', JSON.stringify(user.payload))
      return NextResponse.next({
       request:{
        headers:requestHeaders
       }
      })
      
      
    }catch(error:any){
      console.log(error)
      return Response.json({ success: 'Invalid Token' },{status:401});
      // return NextResponse.json({ message: 'Invalid Token' },{status:401});
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/auth/me',
}