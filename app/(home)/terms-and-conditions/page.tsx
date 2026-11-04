import React from "react";
import HeroSection from "./_components/HeroSection";
import TermsAndConditionsComponent from "./_components/TermsAndConditionsComponent";
import NeedHelp from "@/components/home-constant/NeedHelp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "A clear guide to using Click and Swap, your responsibilities, and where to find help.",
};

function TermsAndConditions() {
  return (
    <div className="text-dark">
      <HeroSection />
      <TermsAndConditionsComponent />
      <NeedHelp />
    </div>
  );
}

export default TermsAndConditions;
