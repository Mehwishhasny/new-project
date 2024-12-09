import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });

const Inspiration = () => {
    return(
        <div className="bg-[#FCF8F3] w-full h-[670px] flex flex-row absolute md:mt-[2650px] mt-[4250px]">


{/*div left*/}
<div className="w-[422px] h-[151px] flex flex-col m-20">
    <h2 className={`${poppins.className} md:text-[40px] text-[30px] font-bold items-center justify-center`}> 50+ Beautiful rooms 
    inspiration </h2>
    <p className="text-[16px] font-medium text-[#616161]">Our designer already made a lot of beautiful prototipe of rooms that inspire you
        </p>
         {/* button*/}
<Link href=''>
<button className="md:w-[245px] w-[110px] h-[48px] flex bg-[#B88E2F] items-center justify-center mt-6 mb-4">
    <p className={`${poppins.className} md:text-[16px] text-[12px] font-semibold text-center text-white`}>Explore More</p> 
    </button>
</Link>
            </div>



                {/*div right*/}
                <div className="w-[1196px] h-[582px] flex md:flex-row flex-col justify-end mr-4 gap-4 md:mt-8 mt-[1130px] md:ml-0 -ml-[325px]">

                <div className="flex flex-col">
                <Image src="/images/insp1.png" width={400} height={582} alt="frames" />
                <div className="w-[217px] h-[160px] bg-white/60 absolute mt-[400px] mx-6">
                    <div className="flex flex-col">
                        <p className={`${poppins.className} text-[16px] font-medium text-[#616161] mt-6 mx-2`}>01 -- Bed Room</p>
                        <p className={`${poppins.className} text-[28px] font-semibold text-[#3A3A3A] mt-6 mx-2`}>Inner Peace </p>
                    </div>

                    <div className="w-[48px] h-[40px] flex bg-[#B88E2F] ml-40 items-center justify-center">
                    <Image src="/images/arrow.png" alt="arrow" width={24} height={24} />
                </div>
                </div>
                
                </div>

                <div className="flex w-[372px] h-[486px] flex-col">
                <Image src="/images/insp2.png" width={372} height={486} alt="frames" />
                <div className="flex flex-row md:w-[120px] w-[50px] md:h-[27px] h-[20px] mt-6 md:ml-0 ml-2 gap-3">
                    <div className="bg-[#B88E2F] w-[27px] h-[27px] rounded-full p-4"></div>
                    <div className="bg-[#D8D8D8] w-[27px] h-[27px] rounded-full p-4"></div>
                    <div className="bg-[#D8D8D8] w-[27px] h-[27px] rounded-full p-4"></div>
                    <div className="bg-[#D8D8D8] w-[27px] h-[27px] rounded-full p-4"></div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Inspiration;