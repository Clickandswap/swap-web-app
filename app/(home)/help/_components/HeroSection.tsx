import Button from "@/components/ui/Button";
import React from "react";

function HeroSection() {

  return (
    <main className="md:py-34 md:px-12 px-6 bg-linear-to-r from-[#EFF6FF] to-[#FFFEF9]">
      <p className="bg-[#FEF0BD] py-2 px-5 w-fit text-xs font-medium rounded-3xl mx-auto text-dark">
        ClickNSwap Security
      </p>
      <h3 className="font-space_grotesk font-medium md:text-4xl text-2xl text-dark text-center my-4">
        How can we help?
      </h3>

      <form
        // onSubmit={handleSearch}
        className="flex w-full max-w-xl mx-auto items-center justify-between rounded-full border border-neutral-200/80 bg-white p-1.5 shadow-sm focus-within:border-neutral-400 focus-within:ring-1 focus-within:ring-neutral-400 transition"
      >
        {/* Invisible Input Field */}
        <input
          type="text"
          placeholder="Search help articles..."
        //   value={searchQuery}
        //   onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent pl-4 pr-2 py-2 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none"
        />
        <Button
          type="submit"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black"
        >
          Search
        </Button>
      </form>
    </main>
  );
}

export default HeroSection;
