import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });

const Furniture = () => {
    return(
        <div className="w-full h-[780px] flex flex-col absolute md:mt-[3350px] mt-[6050px] items-center">
            <p className={`${poppins.className} text-[#616161] text-[20px] font-semibold items-center justify-center`}> Share your setup with </p>
            <h3 className={`${poppins.className} text-[#3A3A3A] md:text-[40px] text-[30px] font-bold items-center justify-center`}> #FuniroFurniture </h3>
      
        <div className="flex flex-col">
        <div className="md:w-full w-1/4 flex flex-row items-center justify-center md:gap-3 gap-1 md:ml-0 ml-[120px]">
            <Image src="/images/1.png" width={174} height={182} alt="frame" className="md:flex hidden" />
            <Image src="/images/2.png" width={451} height={312} alt="frame" />
                <Image src="/images/3.png" width={295} height={392} alt="frame" />
                <Image src="/images/4.png" width={270} height={348} alt="frame" />
                <Image src="/images/5.png" width={205} height={300} alt="frame" />
        </div>

        <div className="md:w-full w-1/4 flex flex-row items-center justify-center md:gap-3 gap-1 md:ml-0 ml-[125px]">
            <Image src="/images/6.png" width={181} height={123} alt="frame" />
            <Image src="/images/7.png" width={344} height={242} alt="frame" />
                <Image src="/images/8.png" width={178} height={242} alt="frame" />
                <Image src="/images/9.png" width={258} height={196} alt="frame" />

        </div>
        </div>

        </div>

    )
}

export default Furniture;

