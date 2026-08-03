import React from "react";
import InternationalCard from "../_components/InternationalCard";
import Transactions from "../_components/Transactions";
import Faqs from "@/components/home-constant/faqs";
import FirstToExperience from "@/components/home-constant/first-to-experience";
import HeroSection from "./_components/HeroSection";
import CountOnCards from "./_components/CountOnCards";

function CardsPage() {
  return (
    <>
      <HeroSection />
      <CountOnCards />
      <InternationalCard />
      <Transactions />
      <Faqs />
      <FirstToExperience />
    </>
  );
}

export default CardsPage;
