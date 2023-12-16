import Image from "next/image";
import HomeSideImage from "../public/home.svg";
import Img1 from "../public/image/image1.png";
export default function Home() {
  return (
    <main className="">
      <div className="p-0 flex justify-between items-center m-0 ">
        <div className="p-5 justify-center flex  flex-col  mt-28 xl:w-[50%] ">
        <div className="z-10 relative xl:hidden">
            <Image src={Img1} alt="" width={500} height={500} />
          </div>
          <h1 className="fontstyle  text-['Pacifico',cursive]  text-7xl xl:text-8xl lg:text-5xl">
            Library management{" "}
          </h1>
          <p className="text-justify relative  block mt-5" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sed,
            ipsam quia usto, eius consequuntur veniam natus ex non inventore
            architecto, ratione adipisci cupiditate maxime voluptate. Maiores
            corporis nihil provident!
          </p>

          <button className="bg-[#46e7d4] hover:bg-[#61efe1] p-3  rounded text-white w-40 mt-6" >Read more</button>
        </div>
        <div className="hidden xl:block ">
          <div className="z-10 relative top-40">
            <Image src={Img1} alt="" width={500} height={500} />
          </div>

          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="1081"
            height="720"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0 top-2 "
            version="1.1"
          >
            {/* <rect x="0" y="0" width="900" height="600" fill="#fbfffe"></rect> */}
            <path
              d="M528 600L532.3 550C536.7 500 545.3 400 547.5 300C549.7 200 545.3 100 543.2 50L541 0L900 0L900 50C900 100 900 200 900 300C900 400 900 500 900 550L900 600Z"
              fill="#79e4d4"
            ></path>
            <path
              d="M508 600L480.3 550C452.7 500 397.3 400 377 300C356.7 200 371.3 100 378.7 50L386 0L900 0L900 50C900 100 900 200 900 300C900 400 900 500 900 550L900 600Z"
              fill="#79e4d4"
            ></path>
            <path
              d="M644 600L618.2 550C592.3 500 540.7 400 533.3 300C526 200 563 100 581.5 50L600 0L900 0L900 50C900 100 900 200 900 300C900 400 900 500 900 550L900 600Z"
              fill="#79e4d4"
            ></path>
            <path
              d="M791 600L800.5 550C810 500 829 400 776.8 300C724.7 200 601.3 100 539.7 50L478 0L900 0L900 50C900 100 900 200 900 300C900 400 900 500 900 550L900 600Z"
              fill="#79e4d4"
            ></path>
            <path
              d="M752 600L751 550C750 500 748 400 755.2 300C762.3 200 778.7 100 786.8 50L795 0L900 0L900 50C900 100 900 200 900 300C900 400 900 500 900 550L900 600Z"
              fill="#79e4d4"
            ></path>
            <path
              d="M672 600L708.5 550C745 500 818 400 812.2 300C806.3 200 721.7 100 679.3 50L637 0L900 0L900 50C900 100 900 200 900 300C900 400 900 500 900 550L900 600Z"
              fill="#79e4d4"
            ></path>
            <path
              d="M853 600L833.8 550C814.7 500 776.3 400 779.2 300C782 200 826 100 848 50L870 0L900 0L900 50C900 100 900 200 900 300C900 400 900 500 900 550L900 600Z"
              fill="#79e4d4"
            ></path>
            <path
              d="M757 600L751 550C745 500 733 400 742.5 300C752 200 783 100 798.5 50L814 0L900 0L900 50C900 100 900 200 900 300C900 400 900 500 900 550L900 600Z"
              fill="#79e4d4"
            ></path>
            <path
              d="M785 600L800.7 550C816.3 500 847.7 400 851.5 300C855.3 200 831.7 100 819.8 50L808 0L900 0L900 50C900 100 900 200 900 300C900 400 900 500 900 550L900 600Z"
              fill="#79e4d4"
            ></path>
          </svg>
          {/* <div className="bg-[#46E7D4] absolute m-0  right-0  w-[40em] h-[44.2em]" 
        style={{borderTopLeftRadius:500,borderBottomLeftRadius:500}}>
        </div> */}
        </div>
      </div>
    </main>
  );
}
