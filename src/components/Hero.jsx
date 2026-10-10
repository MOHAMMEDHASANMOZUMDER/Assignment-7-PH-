import { CurrTime } from "@/lib/currTime";
import Link from "next/link";
import Image from "next/image";
import SeeallProd from "./SeeallProd";
const Hero = () => {
    return (
        <div className="flex max-w-7xl mx-auto gap-30 bg-bg px-6 py-[40px] mt-6.5 rounded-2xl">
          <div className="flex flex-col gap-7 max-w-xl">
            <p className="bg-green-100 text-green-700 rounded-full py-2 px-4 max-w-[200px] text-left">{CurrTime}</p>
            <p className="text-[40px] font-bold">আজকের বাজারের দাম এক <br /> নজরে</p>
            <p className="text-[16px] font-[400] text-gray-500">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
            <SeeallProd></SeeallProd>
          </div>
          <div>
            <Image
            height={500}
            width={500}
            src={"/bazar-hero.png"}
            alt="hero.png"
            >

            </Image>
            </div>  
        </div>
    );
};

export default Hero;