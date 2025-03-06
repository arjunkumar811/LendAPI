import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ScrollingPage from "@/components/TestimonialSection";
import SecondPage from "@/components/SecondPage";
import Tracker from "@/components/Tracker";
import ImageComponent from "@/components/TestimonialSection";
import TestimonialSlider from "@/components/TestimonialSection";
import TestimonialSection from "@/components/TestimonialSection";
import TextSection from "@/components/TextSection";
import TextWithImages from "@/components/TextSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SecondPage />
      <Tracker />
      <TestimonialSection />
      <TextWithImages />
      <Footer />
    </div>
  );
}
