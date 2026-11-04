import Card from "./_components/Card";
import HeroSection from "./_components/HeroSection";
import MadeEasy from "./_components/MadeEasy";
import MadeSimple from "./_components/MadeSimple";
import GettingStarted from "@/components/home-constant/getting-started";
import Transactions from "../_components/Transactions";
import Faqs from "@/components/home-constant/faqs";
import FirstToExperience from "@/components/home-constant/first-to-experience";
import WayToSave from "./_components/WayToSave";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Page",
  description: "Click and Swap Products and functions",
};

function ProductPage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <MadeEasy />
      <Card />
      <WayToSave />
      <Transactions />
      <Faqs />
      <FirstToExperience />

      {/* <MadeSimple /> */}
      {/* <GettingStarted /> */}
    </main>
  );
}

export default ProductPage;
