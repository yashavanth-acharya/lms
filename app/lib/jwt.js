import jwt from 'jsonwebtoken';


module.exports={
    sign:(payload,time='5m')=>{
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: time });
    },
    verifyToken:(token)=>{
        return jwt.verify(token, process.env.JWT_SECRET);
    },
    decodeToken:(token)=>{
        return jwt.decode(token);
    }
}