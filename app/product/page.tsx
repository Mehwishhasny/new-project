import Header from "@/components/header";
import Footer from "@/components/footer";
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import StarIcon from '@/components/starIcon';


const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

const Product = () => {
    return (
        <div className="flex w-full h-auto">
            <Header />
            <div className="w-full h-[100px] bg-[#F9F1E7] flex flex-row mt-32 absolute items-center justify-center gap-6">
            <p className={`${poppins.className} text-[16px] text-[#9F9F9F] items-center justify-center p-1`}>Home</p>
            <Image src="/images/cursor.png" width={20} height={20} alt="Cursor" />
            <p className={`${poppins.className} text-[16px] text-[#9F9F9F] items-center justify-center`}> Shop </p>
            <Image src="/images/cursor.png" width={20} height={20} alt="Cursor" />
            <Image src="/images/line 5.png" width={2} height={30} alt="line" className="items-center justify-center"/>
            <p className={`${poppins.className} text-[16px] items-center justify-center`}> Asgaard Sofa </p>

                </div>

                <div className="w-full h-[820px] flex flex-row mt-[100px] items-center justify-evenly absolute">
                    <div className="w-[76px] h-[416px] flex flex-col items-center mt-24 space-y-4">
                        <Image src="/images/sofa1.png" width={99} height={66} alt="sofa" className="bg-[#F9F1E7]"/>
                        <Image src="/images/sofa2.png" width={99} height={66} alt="sofa" className="bg-[#F9F1E7]"/>
                        <Image src="/images/sofa3.png" width={99} height={66} alt="sofa" className="bg-[#F9F1E7]"/>
                        <Image src="/images/sofa4.png" width={99} height={66} alt="sofa" className="bg-[#F9F1E7]"/>
                    </div>

                    <div className="flex">
                    <Image src="/images/asgaard.png" alt="sofa" width={481} height={500} className="bg-[#F9F1E7]"/>
                    </div>


                    <div className="flex w-[606.01px] h-[703px] items-start mt-[260px] ml-[40px] flex-col">
                       <h3 className={`${poppins.className} text-[42px] mr-[170px]`}> Asgaard Sofa</h3>
                       <p className={`${poppins.className} text-[24px] text-[#9F9F9F] mr-[280px]`}>Rs. 250,000.00</p>
                       <div className="flex flex-row space-x-3 mr-[140px]">
                        <StarIcon />
                       <StarIcon />
                       <StarIcon />
                       <StarIcon />
                       <StarIcon />
                       <Image src="/images/line 5.png" width={2} height={5} alt="line" className="items-center justify-center"/>
                       <p className={`${poppins.className} text-[13px] text-[#9F9F9F]`}> 5 Customer Reviews </p>
                       </div>

                       <p className={`${poppins.className} text-[13px] text-[#9F9F9F] text-center w-[424px] h-[80px]`}> Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                        </p>
                        <p className={`${poppins.className} text-[14px] text-[#9F9F9F]`}> Size </p>

                        <div className="w-[392px] h-[90px] flex flex-row items-start mt-2 gap-4">
    <Link href=''>
    <div className="w-[30px] h-[30px] bg-[#B88E2F] rounded-md">
        <p className={`${poppins.className} text-white text-center p-1 text-[13px]`}> L </p>
    </div>
    </Link>

    <Link href=''>
    <div className="w-[30px] h-[30px] bg-[#F9F1E7] rounded-md">
        <p className={`${poppins.className} text-black text-center p-1 text-[13px]`}> S </p>
    </div>
    </Link>

    <Link href=''>
    <div className="w-[30px] h-[30px] bg-[#F9F1E7] rounded-md">
        <p className={`${poppins.className} text-black text-center p-1 text-[13px]`}> XS </p>
    </div>
    </Link>
    </div>
    <p className={`${poppins.className} text-[14px] text-[#9F9F9F]`}> Color </p>
    <div className="flex flex-row gap-3">
        <div className="w-[30px] h-[30px] bg-[#816DFA] rounded-full"></div>
        <div className="w-[30px] h-[30px] bg-black rounded-full"></div>
        <div className="w-[30px] h-[30px] bg-[#B88E2F] rounded-full"></div>
    </div>

    <div className="flex flex-row mt-3 gap-3">
        <button className="w-[100px] h-[50px] border border-[#9F9F9F] rounded-md p-3"> + 1 - </button>
        <button className="w-[130px] h-[50px] border border-[#9F9F9F] rounded-md p-3"> Add to Cart </button>
        <button className="w-[130px] h-[50px] border border-[#9F9F9F] rounded-md p-3"> + Compare </button>
    </div>
    

    <div className="flex flex-row mt-8 gap-4">
    <div className="flex flex-col">
        <p className={`${poppins.className} text-[#9F9F9F] text-[16px]`}> SKU  </p>
        <p className={`${poppins.className} text-[#9F9F9F] text-[16px]`}> Category  </p>
        <p className={`${poppins.className} text-[#9F9F9F] text-[16px]`}> Tags  </p>
        <p className={`${poppins.className} text-[#9F9F9F] text-[16px]`}> Share  </p>
     </div>

     <div className="flex flex-col ">
        <p className={`${poppins.className} text-[#9F9F9F] text-[16px]`}> :  </p>
        <p className={`${poppins.className} text-[#9F9F9F] text-[16px]`}> :  </p>
        <p className={`${poppins.className} text-[#9F9F9F] text-[16px]`}> :  </p>
        <p className={`${poppins.className} text-[#9F9F9F] text-[16px]`}> :  </p>
     </div>

     <div className="flex flex-col">
        <p className={`${poppins.className} text-[#9F9F9F] text-[16px]`}> S5001  </p>
        <p className={`${poppins.className} text-[#9F9F9F] text-[16px]`}> Sofas  </p>
        <p className={`${poppins.className} text-[#9F9F9F] text-[16px]`}> Sofa, Chair, Home, Shop  </p>
        <div className="flex flex-row gap-4">
            <Link href=''>
            <Image src="/images/facebook.png" width={18.33} height={18.33} alt="facebook" />
            </Link>
            <Link href=''>
            <Image src="/images/twitter.png" width={18.33} height={18.33} alt="twitter" />
            </Link>
            <Link href=''>
            <Image src="/images/linkedin.png" width={18.33} height={18.33} alt="linkedin" />
            </Link>
        </div>
     </div>
     </div>

     <div className="w-full h-[744px] flex flex-col mt-[440px] items-center justify-center">
        {/* div 1 */}
        <div className="flex flex-col mr-[650px] gap-6 mt-[50px]">
        <div className="w-[649px] h-[36px] flex flex-row justify-evenly">
            <p className={`${poppins.className} text-[24px]`}> Description </p>
            <p className={`${poppins.className} text-[24px] text-[#9F9F9F]`}> Additional Information </p>
            <p className={`${poppins.className} text-[24px] text-[#9F9F9F]`}> Reviews - 5 </p>
        </div>

        <p className={`${poppins.className} text-[16px] text-[#9F9F9F]`}> Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall unplugs the chords and takes the show on the road.</p>
        <p className={`${poppins.className} text-[16px] text-[#9F9F9F]`}>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
    </div>

    {/*div 2*/}
    <div className="w-[1239px] h-[348px] flex flex-row gap-4 mt-[50px] mr-[650px]">
        <Image src="/images/pinksofa.png" width={808} height={551} alt="Pinksofa" className="bg-[#F9F1E7] rounded-md" />
        <Image src="/images/pinksofa.png" width={808} height={551} alt="Pinksofa" className="bg-[#F9F1E7] rounded-md"/>
    </div>

     {/*div 3*/}
     <div className="w-full h-[777px] flex flex-col items-center justify-center mr-[650px] mt-12">
     <h3 className={`${poppins.className} text-[36px] flex`}> Related Products </h3>
        {/* images div 1 */}
<div className="w-[1236px] h-[446px] flex flex-row space-x-6 justify-center mt-6">


{/* image 1 */}
<div className="w-[285px] h-[2051px] flex flex-col">
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
  {/* button*/}
<Link href=''>
<button className="w-[245px] h-[48px] border border-[#B88E2F] items-center justify-center mt-[68px] mr-[50px] mb-4">
    <p className={`${poppins.className} text-[16px] font-semibold text-center text-[#B88E2F]`}>Show More</p> 
    </button>
</Link>
    </div>

    </div>
                    </div>
                </div>
            {/*Footer*/}
            <Footer />
       


        </div>
    )
}

export default Product;