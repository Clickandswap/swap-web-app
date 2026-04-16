import GettingStarted from "@/components/home-constant/getting-started";
import HeroSection from "./_components/HeroSection";
import Solutions from "./_components/Solutions";
import NeedHelp from "@/components/home-constant/NeedHelp";
import Faqs from "@/components/home-constant/faqs";


function DeveloperPage() {
  return (
    <>
      <HeroSection />
      <Solutions />
      <NeedHelp />
      <GettingStarted />
      <Faqs />
    </>
  )
}

export default DeveloperPage;