import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SecondPage from "@/components/SecondPage";
import Tracker from "@/components/Tracker";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SecondPage />
      <Tracker />
    </div>
  );
}
