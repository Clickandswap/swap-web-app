import { Metadata } from "next";
import HeroSection from "./_components/HeroSection";
import OpenRoles from "./_components/OpenRoles";
import WhyJoin from "./_components/WhyJoin";

export const metadata: Metadata = {
  title: "Careers",
  description: "Help Build the future cross-border money",
};

function CareerPage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <WhyJoin />
      <OpenRoles />
    </main>
  );
}

export default CareerPage;
