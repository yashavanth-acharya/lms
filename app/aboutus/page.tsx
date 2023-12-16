import images from "../assets/image/1.png"
import Image from 'next/image'

export default function Aboutus(){
    return (
        <div className="flex lg:justify-between justify-center items-center p-10" >
           <div className="mt-[10em] lg:mt-[0.1em] lg:flex-1">
            <div className="lg:w-[80%] ">
            <h1 className="text-8xl font-extrabold aboutus">About us</h1>
            <p className="text-justify p-1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sed, ipsam quia iusto, eius consequuntur veniam natus ex non inventore architecto, ratione adipisci cupiditate maxime voluptate. Maiores corporis nihil provident! 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sed, ipsam quia iusto, eius consequuntur veniam natus ex non inventore architecto, ratione adipisci cupiditate maxime voluptate. Maiores corporis nihil provident! 
            </p>
            <button className="bg-[#46e7d4] hover:bg-[#61efe1] p-3  rounded text-white" >Read more</button>
           </div>
           </div>
           <div className="hidden lg:block">
           <div className=" mt-[1.6em]  bg-[#46e7d4]" style={{borderRadius:"30% 70% 70% 30% / 30% 30% 70% 70%"}}>
            <Image src={images}
                className="h-[80vh] w-[101vh]"
            alt="image" 
            // style={{ clipPath: "polygon(13% 22%, 26% 12%, 48% 5%, 67% 5%, 75% 10%, 83% 18%, 85% 23%, 88% 32%, 91% 44%, 94% 51%, 94% 60%, 93% 70%, 88% 75%, 82% 78%, 69% 82%, 59% 86%, 48% 87%, 29% 86%, 22% 73%, 26% 66%, 30% 60%)"}}
            />
           </div>
           </div>
        </div>
    )
}