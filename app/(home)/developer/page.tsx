import GettingStarted from "@/components/home-constant/getting-started";
import HeroSection from "./_components/HeroSection";
import Solutions from "./_components/Solutions";
import NeedHelp from "@/components/home-constant/NeedHelp";
import Faqs from "@/components/home-constant/faqs";
import ApiUsage from "./_components/ApiUsage";
import FirstToExperience from "@/components/home-constant/first-to-experience";


function DeveloperPage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <Solutions />
      <ApiUsage />
      <Faqs />
      <FirstToExperience />
      </main>

  )
}

export default DeveloperPage;