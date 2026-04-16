import HeroSection from "./_components/HeroSection";
import About from "./_components/About";
import AtClicknSwap from "./_components/AtClicknSwap";
import NeedHelp from "@/components/home-constant/NeedHelp";
import GettingStarted from "@/components/home-constant/getting-started";

function CompanyPage() {
  return (
    <>
      <HeroSection />
      <About />
      <AtClicknSwap />
      <NeedHelp />
      <GettingStarted />
    </>
  );
}

export default CompanyPage;
