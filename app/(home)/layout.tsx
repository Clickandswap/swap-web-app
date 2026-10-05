import React from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import FirstToExperience from "@/components/home-constant/first-to-experience";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1 bg-background overflow-x-clip">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
