import * as jwt from 'jose';


// module.exports={
  
// }
const sign=async(payload: { id: any; username: any; email: any; usertype: any; type: string; },time='5m')=>{
    const alg = 'HS256'
    return new jwt.SignJWT(payload).setProtectedHeader({ alg })
    .setIssuedAt()
    // .setIssuer('urn:example:issuer')
    // .setAudience('urn:example:audience')
    .setExpirationTime('2h').sign(new TextEncoder().encode(process.env.JWT_SECRET || "secret"));
    // process.env.JWT_SECRET || "secret", { expiresIn: time }
}

const verifyToken=async(token: any)=>{
    return jwt.jwtVerify(token,new TextEncoder().encode(process.env.JWT_SECRET || "secret"));
}
const decodeToken=async(token: any)=>{
    return jwt.decodeJwt(token);
}

export {sign,verifyToken,decodeToken}