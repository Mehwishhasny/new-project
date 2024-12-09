import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

const Header = () => {
    return (
        <div className="w-full h-[100px] flex bg-white flex-row items-center justify-between px-4 md:px-10">
            {/* Logo */}
            <div className="flex items-center">
                <Image src="/images/logo.png" width={50} height={32} alt="logo" className="mr-2" />
                <h3 className={`${montserrat.className} text-[24px] md:text-[34px] font-bold`}>Furniro</h3>
            </div>

            {/* Navigation Menu */}
            <div className={`${poppins.className} hidden md:flex text-[14px] md:text-[16px] font-medium gap-4 md:gap-10`}>
                <Link href="/"><span>Home</span></Link>
                <Link href="/shop"><span>Shop</span></Link>
                <Link href="/blog"><span>Blog</span></Link>
                <Link href="/contact"><span>Contact</span></Link>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 md:gap-6">
                <Image src="/images/account.png" alt="account" width={24} height={24} className="w-6 h-6" />
                <Image src="/images/search.png" alt="search" width={24} height={24} className="w-6 h-6" />
                <Image src="/images/wishlist.png" alt="wishlist" width={24} height={24} className="w-6 h-6" />
                <Image src="/images/cart.png" alt="cart" width={24} height={24} className="w-6 h-6" />
            </div>
        </div>
    );
};

export default Header;
