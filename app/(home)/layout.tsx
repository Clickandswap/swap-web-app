import React from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import FirstToExperience from "@/components/home-constant/first-to-experience";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-background">
        {children}
      </main>
      <FirstToExperience />
      <Footer />
    </main>
  );
}

export default HomeLayout;
