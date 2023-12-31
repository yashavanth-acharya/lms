/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        MONGODB_URI: process.env.MONGODB_URI,
        JWT_SECRET: process.env.JWT_SECRET,
        CLOUDINARY_URL:process.env.CLOUDINARY_URL
    }
}

module.exports = nextConfig
