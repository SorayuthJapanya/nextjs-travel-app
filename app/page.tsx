import CampSection from "@/components/shared/Camp/CampSection";
import FeaturesSection from "@/components/shared/Feature/FeaturesSection";
import GetAppSection from "@/components/shared/GetAppSection";
import GuideSection from "@/components/shared/GuideSection";
import HeroSection from "@/components/shared/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CampSection />
      <GuideSection />
      <FeaturesSection />
      <GetAppSection />
    </>
  );
}
