import GettingStarted from "@/components/home-constant/getting-started";
import HeroSection from "./_components/HeroSection";
import Faqs from "@/components/home-constant/faqs";
import TellUs from "./_components/TellUs";
import PortfolioSafely from "../_components/PortfolioSafely";
import WhatYouCanDo from "../_components/WhatYouCanDo";
import Transactions from "../_components/Transactions";
import HowWeProtect from "./_components/HowWeProtect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
  description: "Your money and data, protected at every layer",
};

function SecurityPage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <HowWeProtect />
      <TellUs />
      <Transactions />
      <Faqs />
    </main>
  );
}

export default SecurityPage;
