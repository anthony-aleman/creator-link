import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import Testimonials from "@/components/Testimonials";
import ValueProps from "@/components/ValueProps";
import FeaturedCreators from "@/components/FeaturedCreators";
import CTASection from "@/components/CTASection";
import HeroSectionProto from "@/components/HeroSectionProto";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSectionProto/>
      <ValueProps/>
      <FeaturedCreators/>
      <Testimonials/>
      <CTASection/>
    </div>
  );
}
