import React from "react";
import HeroSection from "./_components/HeroSection";
import { Metadata } from "next";
import BlogDetailsComponent from "./_components/BlogDetailsComponent";
import MoreClarity from "./_components/MoreClarity";
import NeedHelp from "@/components/home-constant/NeedHelp";

export const metadata: Metadata = {
  title: "Blog Details",
  description: "Blog Descriptions and Blog Details",
};

function BlogDetailsPage() {
  return (
    <div className="text-dark">
      <HeroSection />
      <BlogDetailsComponent />
      <MoreClarity />
      <NeedHelp />
    </div>
  );
}

export default BlogDetailsPage;
