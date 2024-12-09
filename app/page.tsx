import Header from '@/components/header';
import Hero from '@/components/hero';
import SectionOne from '@/components/section1';
import SectionTwo from '@/components/section2';
import Inspiration from '@/components/inspiration';
import Furniture from '@/components/furniture';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="w-full flex">
      

    <Header />
    <Hero />
    <SectionOne />
    <SectionTwo />
    <Inspiration />
    <Furniture />
    <Footer />
    </div>
    
  );
}
