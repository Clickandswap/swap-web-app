import React from "react";
import HeroSection from "./_components/HeroSection";
import Articles from "./_components/Articles";
import LatestArticles from "./_components/LatestArticles";
import NeedHelp from "@/components/home-constant/NeedHelp";

function BlogsPage() {
  return (
    <main className="text-dark">
      <HeroSection />
      <Articles />
      <LatestArticles />
      <NeedHelp />
    </main>
  );
}

export default BlogsPage;
