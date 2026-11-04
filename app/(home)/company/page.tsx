import HeroSection from "./_components/HeroSection";
import About from "./_components/About";
import AtClicknSwap from "./_components/AtClicknSwap";
import NeedHelp from "@/components/home-constant/NeedHelp";
import GettingStarted from "@/components/home-constant/getting-started";
import Faqs from "@/components/home-constant/faqs";
import WorkWithUs from "./_components/WorkWithUs";
import Team from "./_components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description: "Know more About us, the team behind click and swap, and click and swap functions.",
};

function CompanyPage() {
  return (
    <>
      <HeroSection />
      <About />
      <AtClicknSwap />
      <Team />
      {/* <NeedHelp /> */}
      {/* <GettingStarted /> */}
      <WorkWithUs />
      <Faqs />
    </>
  );
}

export default CompanyPage;
