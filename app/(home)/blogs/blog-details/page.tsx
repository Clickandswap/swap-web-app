import React from "react";
import HeroSection from "./_components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details",
  description: "Blog Descriptions and Blog Details",
};

function BlogDetailsPage() {
  return (
    <div className="text-dark">
      <HeroSection />
    </div>
  );
}

export default BlogDetailsPage;
