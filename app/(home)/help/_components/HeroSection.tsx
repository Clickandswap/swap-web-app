"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <main className="md:pt-34 pt-8 md:pb-34 pb-40 md:px-12 px-6 bg-linear-to-r from-[#EFF6FF] to-[#FFFEF9]">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#FEF0BD] py-2 px-5 w-fit text-xs font-medium rounded-3xl mx-auto text-dark"
      >
        Help Center
      </motion.p>
      <motion.h3
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-space_grotesk font-medium md:text-4xl text-2xl text-dark text-center my-4"
      >
        How can we help?
      </motion.h3>

      <motion.form
        // onSubmit={handleSearch}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
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
        <motion.button
          type="submit"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black md:block hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          Search
        </motion.button>
      </motion.form>

      <motion.button
        type="submit"
        className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black mt-4 w-full md:hidden block"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        Search
      </motion.button>
    </main>
  );
}

export default HeroSection;
