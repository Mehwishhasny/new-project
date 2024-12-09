import Image from 'next/image';
import { Poppins } from 'next/font/google';


const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });

const Hero = () => {
    return(
        <div className="flex w-full h-[716.83px] mt-[100px] absolute">
            <Image src="/images/hero.png" width={1340} height={1007.93} alt="hero" className="object-cover absolute items-center justify-center"/>
        
        {/*hero content*/}
        <div className="flex flex-col md:flex-row md:w-[643px] w-[300px] h-[443px] md:absolute md:right-8 md:bottom-20 md:mt-0 mt-[180px] ml-8 top-24 bg-[#FFF3E3]">

            {/*content*/}
            <div className="md:w-[561px] h-[344px]">
                <h3 className={`${poppins.className} text-[16px] font-semibold mx-10 mt-12`}> New Arrival </h3>
                <h1 className={`${poppins.className} md:text-[52px] text-[32px] text-[#B88E2F] font-bold mx-10 mt-4`}> Discover Our<br  /> New Collection </h1>
                <p className={`${poppins.className} md:text-[18px] text-[14px] font-medium text-[#333333] mx-10 mt-2`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
                <button className="bg-[#B88E2F] md:py-4 py-2 px-8 mx-10 mt-4">
                    <p className={`${poppins.className} md:text-[16px] text-[12px] font-bold text-white`}> BUY NOW </p>
                </button>
            
            </div>
        </div>
        
        
        </div>
    )
}
export default Hero;