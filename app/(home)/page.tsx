import Faqs from "@/components/home-constant/faqs";
import GettingStarted from "@/components/home-constant/getting-started";
import HeroSection from "./_components/HeroSection";
import WhyClickNSwap from "./_components/WhyClickNSwap";
import Transactions from "./_components/Transactions";
import PortfolioSafely from "./_components/PortfolioSafely";
import InternationalCard from "./_components/InternationalCard";
import Experience from "./_components/Experience";
import NeedHelp from "@/components/home-constant/NeedHelp";
import WhatYouCanDo from "./_components/WhatYouCanDo";
import RateCalculator from "./_components/RateCalculator";
import FirstToExperience from "@/components/home-constant/first-to-experience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyClickNSwap />
      <WhatYouCanDo />
      <InternationalCard />
      <Transactions />
      <PortfolioSafely />
      {/* <Experience /> */}
      {/* <RateCalculator /> */}
      {/* <GettingStarted /> */}
      <Faqs />
      <FirstToExperience />
      <NeedHelp />
    </>
  );
}
