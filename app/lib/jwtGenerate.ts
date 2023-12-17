import {sign} from "./jwt"
import Token from "../models/token"

const jwtGenerate=async(user: { id?: any; username: any; email: any; type: any; _id?: any })=>{

    let payload={
         ...user,
        type:"AccessToken"
    }
    let token=await sign(payload,"5m")

    payload.type="refreshToken"
    let refreshToken=await sign(payload,"1y")
    await new Token({token:refreshToken,payload:payload}).save()
    return{access_token:token,refresh_token:refreshToken};
}

export default jwtGenerate