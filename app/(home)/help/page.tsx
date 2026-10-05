import Faqs from "@/components/home-constant/faqs";
import HeroSection from "./_components/HeroSection";
import NeedHelp from "@/components/home-constant/NeedHelp";
import HelpDeskFaqs from "./_components/HelpDeskFaqs";

function HelpPage() {
  return (
    <main className="overflow-x-clip">
      <HeroSection />
      <HelpDeskFaqs />
      <NeedHelp />
    </main>
  );
}

export default HelpPage;
