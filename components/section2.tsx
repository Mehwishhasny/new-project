import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });

const SectionTwo = () => {
    return(
        <div className="w-full h-[108px] flex flex-col absolute md:mt-[1550px] mt-[2300px] items-center">


            {/* heading */}
            <h3 className={`${poppins.className} text-[#3A3A3A] md:text-[40px] text-[25px] font-bold items-center justify-center`}>
                Our Products
            </h3>

             {/* images div 1 */}
             <div className="md:w-[1236px] w-full h-[446px] flex md:flex-row flex-col md:space-x-6 space-y-2 justify-center md:mt-6 mt-[700px] md:ml-0 ml-16">

                 {/* image 1 */}
                 <div className="w-[285px] h-[446px] flex flex-col">
                    <div className="relative">
                 <img src="/images/showpiece.png" alt="image-1" className="w-[285px] h-[301px]"/>
                 <div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#E97171] rounded-full">
                    <p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-1`}> -30% </p>
                </div>
                </div>

                 <div className="w-[285px] h-[145px] flex flex-col bg-[#B0B0B0]/20">
                    <p className={`${poppins.className} text-[24px] font-medium mt-2 ml-2`}> Syltherine </p>
                    <p className={`${poppins.className} text-[16px] text-[#898989] font-medium mt-2 ml-2`}>Stylish cafe chair </p>
                <div className="flex flex-row mt-2 gap-4 ml-2">
                    <p className={`${poppins.className} text-[#3A3A3A] text-[20px] font-semibold`}> Rp 2.500.000 </p>
                    <p className={`${poppins.className} text-[#B0B0B0] text-[16px] font-medium mt-1`} style={{ textDecoration: 'line-through', color: 'B0B0B0' }}> Rp 3.500.000 </p>
                </div>
                
                </div>
                </div>
                {/* end */}

                      {/* image 2 */}
                      <div className="w-[285px] h-[446px] flex flex-col">
                 <img src="/images/leviosa.png" alt="image-2" className="w-[285px] h-[301px]"/>
                 

                 <div className="w-[285px] h-[145px] flex flex-col bg-[#B0B0B0]/20">
                    <p className={`${poppins.className} text-[24px] font-medium mt-2 ml-2`}> Leviosa </p>
                    <p className={`${poppins.className} text-[16px] text-[#898989] font-medium mt-2 ml-2`}>Stylish cafe chair </p>
                <div className="flex flex-row mt-2 gap-4 ml-2">
                    <p className={`${poppins.className} text-[#3A3A3A] text-[20px] font-semibold`}> Rp 2.500.000 </p>
                </div>
                
                </div>
                </div>
                  {/* end */}

                        {/* image 3 */}
                        <div className="w-[285px] h-[446px] flex flex-col">
                            <div className="relative">
                 <img src="/images/sofa.png" alt="image-1" className="w-[285px] h-[301px]"/>
                 <div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#E97171] rounded-full">
                    <p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-1`}> -50% </p>
                </div>
                </div>

                 <div className="w-[285px] h-[145px] flex flex-col bg-[#B0B0B0]/20">
                    <p className={`${poppins.className} text-[24px] font-medium mt-2 ml-2`}> Lolito </p>
                    <p className={`${poppins.className} text-[16px] text-[#898989] font-medium mt-2 ml-2`}>Luxury Big Sofa </p>
                <div className="flex flex-row mt-2 gap-4 ml-2">
                    <p className={`${poppins.className} text-[#3A3A3A] text-[20px] font-semibold`}> Rp 7.000.000 </p>
                    <p className={`${poppins.className} text-[#B0B0B0] text-[16px] font-medium mt-1`} style={{ textDecoration: 'line-through', color: 'B0B0B0' }}> Rp 14.000.000 </p>
                </div>
                
                </div>
                </div>
                  {/* end */}

                        {/* image 4 */}
                        <div className="w-[285px] h-[446px] flex flex-col">
                            <div className="relative">
                 <img src="/images/sofaset.png" alt="image-1" className="w-[285px] h-[301px]"/>
                 <div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#2EC1AC] rounded-full">
                    <p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-2`}> New </p>
                </div>
                </div>

                 <div className="w-[285px] h-[145px] flex flex-col bg-[#B0B0B0]/20">
                    <p className={`${poppins.className} text-[24px] font-medium mt-2 ml-2`}> Respira </p>
                    <p className={`${poppins.className} text-[16px] text-[#898989] font-medium mt-2 ml-2`}>Outdoor bar table and stool </p>
                <div className="flex flex-row mt-2 gap-4 ml-2">
                    <p className={`${poppins.className} text-[#3A3A3A] text-[20px] font-semibold`}> Rp 500.000 </p>
                </div>
                
                </div>
                </div>
                  {/* end */}

                 
 
            </div>


            {/* images div 2 */}
            <div className="w-[1236px] h-[446px] flex flex-row space-x-6 justify-center mt-6 md:flex hidden">

{/* image 1 */}
<div className="w-[285px] h-[446px] flex flex-col">
<img src="/images/lamp.png" alt="image-1" className="w-[285px] h-[301px]"/>
<div className="w-[285px] h-[145px] flex flex-col bg-[#B0B0B0]/20">
   <p className={`${poppins.className} text-[24px] font-medium mt-2 ml-2`}> Grifo </p>
   <p className={`${poppins.className} text-[16px] text-[#898989] font-medium mt-2 ml-2`}>Night Lamp </p>
<div className="flex flex-row mt-2 gap-4 ml-2">
   <p className={`${poppins.className} text-[#3A3A3A] text-[20px] font-semibold`}> Rp 1500.000 </p>
</div>

</div>
</div>
{/* end */}

     {/* image 2 */}
     <div className="w-[285px] h-[446px] flex flex-col">
        <div className="relative">
<img src="/images/graysofa.png" alt="image-1" className="w-[285px] h-[301px]"/>
<div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#2EC1AC] rounded-full">
   <p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-2`}> New </p>
</div>
</div>

<div className="w-[285px] h-[145px] flex flex-col bg-[#B0B0B0]/20">
   <p className={`${poppins.className} text-[24px] font-medium mt-2 ml-2`}> Muggo </p>
   <p className={`${poppins.className} text-[16px] text-[#898989] font-medium mt-2 ml-2`}>Small Mug </p>
<div className="flex flex-row mt-2 gap-4 ml-2">
   <p className={`${poppins.className} text-[#3A3A3A] text-[20px] font-semibold`}> Rp 150.000 </p>
</div>

</div>
</div>
 {/* end */}

       {/* image 3 */}
       <div className="w-[285px] h-[446px] flex flex-col">
           <div className="relative">
<img src="/images/set.png" alt="image-1" className="w-[285px] h-[301px]"/>
<div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#E97171] rounded-full">
   <p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-1`}> -50% </p>
</div>
</div>

<div className="w-[285px] h-[145px] flex flex-col bg-[#B0B0B0]/20">
   <p className={`${poppins.className} text-[24px] font-medium mt-2 ml-2`}> Pingky </p>
   <p className={`${poppins.className} text-[16px] text-[#898989] font-medium mt-2 ml-2`}>Cute Bed Set </p>
<div className="flex flex-row mt-2 gap-4 ml-2">
   <p className={`${poppins.className} text-[#3A3A3A] text-[20px] font-semibold`}> Rp 7.000.000 </p>
   <p className={`${poppins.className} text-[#B0B0B0] text-[16px] font-medium mt-1`} style={{ textDecoration: 'line-through', color: 'B0B0B0' }}> Rp 14.000.000 </p>
</div>

</div>
</div>
 {/* end */}

       {/* image 4 */}
       <div className="w-[285px] h-[446px] flex flex-col">
           <div className="relative">
<img src="/images/brownsofa.png" alt="image-1" className="w-[285px] h-[301px]"/>
<div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#2EC1AC] rounded-full">
   <p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-2`}> New </p>
</div>
</div>

<div className="w-[285px] h-[145px] flex flex-col bg-[#B0B0B0]/20">
   <p className={`${poppins.className} text-[24px] font-medium mt-2 ml-2`}> Potty </p>
   <p className={`${poppins.className} text-[16px] text-[#898989] font-medium mt-2 ml-2`}>Minimalist Flower Pot </p>
<div className="flex flex-row mt-2 gap-4 ml-2">
   <p className={`${poppins.className} text-[#3A3A3A] text-[20px] font-semibold`}> Rp 500.000 </p>
</div>

</div>
</div>
 {/* end */}


</div>

 {/* button*/}
<Link href=''>
<button className="w-[245px] h-[48px] flex border border-[#B88E2F] items-center justify-center md:mt-6 mt-[686px] md:mb-4">
    <p className={`${poppins.className} text-[16px] font-semibold text-center text-[#B88E2F]`}>Show More</p> 
    </button>
</Link>

        </div>
    )
}

export default SectionTwo;