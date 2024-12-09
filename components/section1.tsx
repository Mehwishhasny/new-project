import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });


const SectionOne = () => {
    return(
        <div className="md:w-[1183px] w-full h-[685px] flex flex-col md:mt-[840px] mt-[740px] absolute md:mx-[76px] mx-[1px] items-center">

            {/* heading */}
            <div className="md:w-[559px] h-[76.71px] flex flex-col items-center justify-center">
                <h2 className={`${poppins.className} text-center text-[#333333] font-bold md:text-[32px] text-[20px]`}> Browse The Range </h2>
                <p className={`${poppins.className} text-center text-[#666666] font-medium md:text-[20px] text-[15px] mt-3`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

              {/* images div */}

              <div className="flex md:flex-row flex-col items-center justify-center gap-4">

                <div className="flex flex-col mt-12 md:w-full w-[300px]">
                <Image src="/images/pic1.png" alt="dining" width={782.12} height={521} className="rounded-md" />
                <p className={`${poppins.className} md:text-[24px] text-[18px] font-semibold text-center mt-3`}> Dining </p>
                </div>

                <div className="flex flex-col mt-12 md:w-full w-[300px]">
                <Image src="/images/pic2.png" alt="living" width={782.12} height={521} className="rounded-md"/>
                <p className={`${poppins.className} md:text-[24px] text-[18px] font-semibold text-center mt-3`}> Living </p>
                </div>

                <div className="flex flex-col mt-12 md:w-full w-[300px]">
                <Image src="/images/pic3.png" alt="bedroom" width={782.12} height={521} className="rounded-md" />
                <p className={`${poppins.className} md:text-[24px] text-[18px] font-semibold text-center mt-3`}> Bedroom </p>
                </div>
            </div>


        </div>
    )
}

export default SectionOne;