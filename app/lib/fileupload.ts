import { v2 as cloudinary } from "cloudinary";
import DatauriParser from 'datauri/parser';
import fs from 'fs'
const Upload = async(file: any) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARYNAME,
    api_key: process.env.CLOUDINARYKEY,
    api_secret: process.env.CLOUDINARYSECRETE,
  });
//   const base64Data = Buffer.from(await file.arrayBuffer()).toString('base64');
  return cloudinary.uploader.upload(
   file,
    { public_id: "lms" },
    function (error: any, result: any) {
      console.log(result);
      console.log(error)
      return result;
    }
  );
};

export default Upload;
