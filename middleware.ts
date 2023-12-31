import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {verifyToken} from "./app/lib/jwt"
import { headers } from 'next/headers'

/**
 * Handles middleware logic for the API endpoint.
 *
 * @param {NextRequest} request - The request object containing information about the incoming request.
 * @return {Promise<void>} A promise that resolves once the middleware logic is completed.
 */
export async function middleware(request: NextRequest) {

    const authorization = request.headers.get("authorization")
    
  //  Separate the token with Bearer 
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
      return Response.json({ success: 'Unauthorized: Token not provided' },{status:401});
    }
    try {
      // Verify the token
      const user=await verifyToken(token);

      // Add the payload to the request
      const requestHeaders = new Headers(request.headers)
      requestHeaders.set('payload', JSON.stringify(user.payload))


      return NextResponse.next({
       request:{
        headers:requestHeaders
       },
      })
      
      
    }catch(error:any){
      console.log(error)
      return Response.json({ success: 'Invalid Token' },{status:401});
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/auth/me','/api/auth/users'],
}