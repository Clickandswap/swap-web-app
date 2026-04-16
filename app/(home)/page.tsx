import Faqs from "@/components/home-constant/faqs";
import GettingStarted from "@/components/home-constant/getting-started";
import HeroSection from "./_components/HeroSection";
import WhyClickNSwap from "./_components/WhyClickNSwap";
import Transactions from "./_components/Transactions";
import PortfolioSafely from "./_components/PortfolioSafely";
import InternationalCard from "./_components/InternationalCard";
import Experience from "./_components/Experience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyClickNSwap />
      <Transactions />
      <PortfolioSafely />
      <InternationalCard />
      <Experience />
      <GettingStarted />
      <Faqs />
    </>
  );
}
