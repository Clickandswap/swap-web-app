import Faqs from "@/components/home-constant/faqs";
import HeroSection from "./_components/HeroSection";
import NeedHelp from "@/components/home-constant/NeedHelp";
import HelpDeskFaqs from "./_components/HelpDeskFaqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Desk",
  description: "Answers for account, payment and security issues.",
};

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
