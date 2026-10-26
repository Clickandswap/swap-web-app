"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function HeroSection() {
  return (
    <main className="md:pt-32 pt-8 md:pb-34 pb-40 md:px-32 px-6 bg-linear-to-r from-[#EFF6FF] to-[#FFFEF9] flex flex-col gap-6">
      <h6 className="text-[#6B7280] text-sm">
        Click and Swap / Blog /{" "}
        <span className="font-semibold">Transfer guide</span>
      </h6>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#FEF0BD] py-2 px-5 w-fit text-xs font-medium rounded-3xl text-dark"
      >
        Money made simple
      </motion.p>

      <h2 className="font-semibold md:text-5xl text-2xl font-space_grotesk">
        Before you send: a smarter guide to safer transfers
      </h2>
      <p className="text-[#58646B] text-sm">
        From checking recipient details to tracking a payment, a few simple
        habits can help you send with more confidence.
      </p>

      <div className="w-full h-64">
        <Image
          src={"/blog/blog_hero_pic.webp"}
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-2xl"
          alt="Hero Section Blog Image Represenation"
          loading="eager"
        />
      </div>
    </main>
  );
}

export default HeroSection;
