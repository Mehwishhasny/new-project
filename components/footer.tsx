import Link from 'next/link';
import { Poppins } from 'next/font/google';


const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });

const Footer = () => {
    return(
        <div className="w-full h-[505px] md:translate-y-[650vh] translate-y-[1350vh] flex-col absolute items-center justify-end overflow-hidden">

            <div className="flex md:flex-row flex-col md:w-[1000px] w-full h-[419px]">
                {/* div left */}
                <div className="flex flex-col">
                <h3 className={`${poppins.className} md:text-[24px] text-[18px] medium-bold flex`}>
                Funiro.
                </h3>
                <p className={`${poppins.className} md:text-[16px] text-[11px] font-medium text-[#9F9F9F] mt-6`}> 400 University Drive Suite 200 Coral Gables,
                FL 33134 USA </p>
                </div>

                {/* div right */}
                <div className="w-[710px] h-[312px] flex md:flex-row flex-col">
                    <div className="w-[352px] h-[312px] flex flex-col items-center md:space-y-8 space-y-4">
                        <p className={`${poppins.className} font-medium text-[#9F9F9F]`}> Links </p>

                        <Link href='/'>
                        <p className={`${poppins.className} md:text-[16px] text-[12px] font-medium text-black`}> Home </p>
                        </Link>
                        <Link href='/shop'>
                        <p className={`${poppins.className} md:text-[16px] text-[12px] font-medium text-black`}> Shop </p>
                        </Link>
                        <Link href=''>
                        <p className={`${poppins.className} md:text-[16px] text-[12px] font-medium text-black`}> About </p>
                        </Link>
                        <Link href=''>
                        <p className={`${poppins.className} md:text-[16px] text-[12px] font-medium text-black`}> Contact </p>
                        </Link>
                    </div>


                    <div className="w-[352px] h-[312px] flex flex-col items-center md:space-y-8 space-y-4">
                        <p className={`${poppins.className} md:text-[16px] text-[12px] font-medium text-[#9F9F9F]`}> Help </p>

                        <Link href=''>
                        <p className={`${poppins.className} md:text-[16px] text-[12px] font-medium text-black`}> Payment Options </p>
                        </Link>
                        <Link href=''>
                        <p className={`${poppins.className} md:text-[16px] text-[12px] font-medium text-black`}> Returns </p>
                        </Link>
                        <Link href=''>
                        <p className={`${poppins.className} md:text-[16px] text-[12px] font-medium text-black`}> Privacy Policies </p>
                        </Link>
                    </div>

                    <div className="w-[352px] h-[312px] flex flex-col items-center md:space-y-8 space-y-2">
                        <p className={`${poppins.className} md:text-[16px] text-[12px] font-medium text-[#9F9F9F]`}> Newsletter </p>

                        <div className="flex flex-row md:ml-0 ml-[-40px]">
                        <input type="email" className="w-[250px] h-[48px] px-6 md:text-[16px] text-[12px] underline underline-offset-2" placeholder="Enter your email address" />
                        <button className={`${poppins.className} w-[100px] h-[48px] text-[#9F9F9F] font-medium md:text-[14px] text-[11px] underline underline-offset-4`}> Subscribe </button>
                        </div>
                    </div>
                </div>

        


            </div>
           
            <div className="md:mr-[750px]">
                <p className={`${poppins.className} md:text-[16px] text-[12px] font-medium text-black`}>
                2023 furino. All rights reverved
                </p>
            </div>


        </div>
    )
}

export default Footer;