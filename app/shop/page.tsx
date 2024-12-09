import Header from "@/components/header";
import Footer from "@/components/footer";
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

const Shop = () => {
    return (
        <div className="flex w-full h-auto">
            <Header />
            <div className="mt-[120px] absolute bg-[url('/images/shop_img.png')] w-full h-[316px] object-cover">

            <div className="flex flex-col items-center justify-center mt-16">
            <h5 className={`${poppins.className} text-[48px] font-medium`}> Shop </h5>

            <div className="flex items-center justify-center flex-row mt-4">
            <p className={`${poppins.className} text-[16px] font-semibold`}> Home </p>
            <Image src="/images/cursor.png" width={20} height={20} alt="Cursor" />
            <p className={`${poppins.className} text-[16px]`}> Shop </p>
            </div>


            </div>

            <div className="w-full h-[100px] bg-[#F9F1E7] flex flex-row mt-32 justify-between">
                {/* div left */}
                <div className="w-[35px] flex items-center justify-center space-x-3 mx-16">
                    <Image src="/images/filter.png" width={25} height={25} alt="filter" />
                    <p className={`${poppins.className} text-[20px] font-medium`}> Filter </p>
                    <Image src="/images/grid.png" width={25} height={25} alt="grid" />
                    <Image src="/images/list.png" width={25} height={25} alt="list" />
                </div>

                <div className="w-[253px] h-[24px] flex m-8 space-x-4 mr-[500px]">
                <Image src="/images/line 5.png" width={2} height={30} alt="line" className="items-center justify-center"/>
                <p className={`${poppins.className} text-[16px] items-center justify-center p-1`}>Showing 1 - 16 of 32 results</p>
                
                </div>


                  {/* div left */}
                  < div className="w-[414px] flex items-center justify-center space-x-3">
                  <p className={`${poppins.className} text-[20px] text-black`}>Show</p>
                  <p className={`${poppins.className} text-[20px] text-[#9F9F9F] bg-white p-4`}>16</p>
                  <p className={`${poppins.className} text-[20px] text-black`}>Sort by</p>
                  <p className={`${poppins.className} text-[20px] text-[#9F9F9F] bg-white p-4`}>Default</p>
                 </div>
            </div>

  
<div className="flex items-center justify-center flex flex-col">          
{/* images div 1 */}
<div className="w-[1236px] h-[446px] flex flex-row space-x-6 justify-center mt-6">


{/* image 1 */}
<div className="w-[285px] h-[2051px] flex flex-col">
   <div className="relative cursor-pointer group">
<Image src="/images/showpiece.png" alt="image-1" className="w-[285px] h-[301px]"/>
<div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#E97171] rounded-full">
   <p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-1`}> -30% </p>
</div>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Link href='/product'>
      <button className={`${poppins.className} px-6 py-2 bg-[#E97171] text-white rounded-lg font-medium text-[16px]`}>
        Add to Cart
      </button>
      </Link>
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
     <div className="relative cursor-pointer group">
<Image src="/images/leviosa.png" alt="image-2" className="w-[285px] h-[301px]"/>

<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className={`${poppins.className} px-6 py-2 bg-[#E97171] text-white rounded-lg font-medium text-[16px]`}>
        Add to Cart
      </button>
    </div>
    </div>
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
           <div className="relative cursor-pointer group">
<Image src="/images/sofa.png" alt="image-1" className="w-[285px] h-[301px]"/>
<div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#E97171] rounded-full">
   <p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-1`}> -50% </p>
</div>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className={`${poppins.className} px-6 py-2 bg-[#E97171] text-white rounded-lg font-medium text-[16px]`}>
        Add to Cart
      </button>
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
           <div className="relative cursor-pointer group">
<Image src="/images/sofaset.png" alt="image-1" className="w-[285px] h-[301px]"/>
<div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#2EC1AC] rounded-full">
   <p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-2`}> New </p>
</div>

<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className={`${poppins.className} px-6 py-2 bg-[#E97171] text-white rounded-lg font-medium text-[16px]`}>
        Add to Cart
      </button>
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
<div className="w-[1236px] flex flex-row space-x-6 justify-center mt-6">

{/* image 1 */}
<div className="w-[285px] h-[446px] flex flex-col">
    <div className="relative cursor-pointer group">
<Image src="/images/lamp.png" alt="image-1" className="w-[285px] h-[301px]"/>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className={`${poppins.className} px-6 py-2 bg-[#E97171] text-white rounded-lg font-medium text-[16px]`}>
        Add to Cart
      </button>
    </div>
    </div>
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
<div className="relative cursor-pointer group">
<Image src="/images/graysofa.png" alt="image-1" className="w-[285px] h-[301px]"/>
<div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#2EC1AC] rounded-full">
<p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-2`}> New </p>
</div>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className={`${poppins.className} px-6 py-2 bg-[#E97171] text-white rounded-lg font-medium text-[16px]`}>
        Add to Cart
      </button>
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
<div className="relative cursor-pointer group">
<Image src="/images/set.png" alt="image-1" className="w-[285px] h-[301px]"/>
<div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#E97171] rounded-full">
<p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-1`}> -50% </p>
</div>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className={`${poppins.className} px-6 py-2 bg-[#E97171] text-white rounded-lg font-medium text-[16px]`}>
        Add to Cart
      </button>
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
<div className="relative cursor-pointer group">
<Image src="/images/brownsofa.png" alt="image-1" className="w-[285px] h-[301px]"/>
<div className="absolute top-2 right-4 w-[48px] h-[48px] bg-[#2EC1AC] rounded-full">
<p className={`${poppins.className} text-[16px] text-white font-medium mt-3 mx-2`}> New </p>
</div>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className={`${poppins.className} px-6 py-2 bg-[#E97171] text-white rounded-lg font-medium text-[16px]`}>
        Add to Cart
      </button>
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

{/* images div 1 */}
<div className="w-[1236px] h-[446px] flex flex-row space-x-6 justify-center mt-6">


{/* image 1 */}
<div className="w-[285px] h-[2051px] flex flex-col">
   <div className="relative">
<Image src="/images/showpiece.png" alt="image-1" className="w-[285px] h-[301px]"/>
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
<Image src="/images/leviosa.png" alt="image-2" className="w-[285px] h-[301px]"/>


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
<Image src="/images/sofa.png" alt="image-1" className="w-[285px] h-[301px]"/>
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
<Image src="/images/sofaset.png" alt="image-1" className="w-[285px] h-[301px]"/>
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
<div className="w-[1236px] h-[446px] flex flex-row space-x-6 justify-center mt-6">

{/* image 1 */}
<div className="w-[285px] h-[446px] flex flex-col">
<Image src="/images/lamp.png" alt="image-1" className="w-[285px] h-[301px]"/>
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
<Image src="/images/graysofa.png" alt="image-1" className="w-[285px] h-[301px]"/>
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
<Image src="/images/set.png" alt="image-1" className="w-[285px] h-[301px]"/>
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
<Image src="/images/brownsofa.png" alt="image-1" className="w-[285px] h-[301px]"/>
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
</div>

<div className="w-[392px] h-[90px] flex flex-row justify-center mt-8 items-center ml-[470px] gap-4">
    <Link href=''>
    <div className="w-[60px] h-[60px] bg-[#B88E2F] rounded-md">
        <p className={`${poppins.className} text-white text-center mt-3 p-3 text-[20px]`}> 1 </p>
    </div>
    </Link>

    <Link href=''>
    <div className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-md">
        <p className={`${poppins.className} text-black text-center mt-3 p-3 text-[20px]`}> 2 </p>
    </div>
    </Link>

    <Link href=''>
    <div className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-md">
        <p className={`${poppins.className} text-black text-center mt-3 p-3 text-[20px]`}> 3 </p>
    </div>
    </Link>

    <Link href=''>
    <div className="w-[90px] h-[60px] bg-[#F9F1E7] rounded-md">
        <p className={`${poppins.className} text-black text-center mt-3 p-3 text-[20px]`}> Next </p>
    </div>
    </Link>

  
</div>

<div className="w-full h-[270px] flex bg-[#FAF3EA] mt-8">
        <div className="w-[1334px] h-[70px] flex flex-row items-center justify-center mt-16 gap-4">

            <div className="flex flex-row space-x-3">
            <Image src="/images/vector1.png" width={52.77} height={60} alt="vector" />
            <div className="flex flex-col">
            <p className={`${poppins.className} text-[25px] font-semibold`}> High Quality </p>
            <p className={`${poppins.className} text-[20px] text-[#898989] font-medium`}>crafted from top materials </p>
            </div>
            </div>

            <div className="flex flex-row space-x-3">
            <Image src="/images/vector2.png" width={52.77} height={60} alt="vector" />
            <div className="flex flex-col">
            <p className={`${poppins.className} text-[25px] font-semibold`}> Warranty Protection </p>
            <p className={`${poppins.className} text-[20px] text-[#898989] font-medium`}>over 2 years </p>
            </div>
            </div>

            <div className="flex flex-row space-x-3">
            <Image src="/images/vector3.png" width={52.77} height={60} alt="vector" />
            <div className="flex flex-col">
            <p className={`${poppins.className} text-[25px] font-semibold`}> Free Shipping </p>
            <p className={`${poppins.className} text-[20px] text-[#898989] font-medium`}>order over 150 $ </p>
            </div>
            </div>

            <div className="flex flex-row space-x-3">
            <Image src="/images/vector4.png" width={52.77} height={60} alt="vector" />
            <div className="flex flex-col">
            <p className={`${poppins.className} text-[25px] font-semibold`}> 24 / 7 support </p>
            <p className={`${poppins.className} text-[20px] text-[#898989] font-medium`}>Dedicated support </p>
            </div>
            </div>


        </div>
</div>

                
            </div>
            
            <Footer />
            
            
        </div>
    )
}

export default Shop;