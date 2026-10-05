"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function HeroSection() {
  return (
    <main className="md:pt-34 pt-8 md:pb-34 pb-40 md:px-32 px-6 bg-linear-to-r from-[#EFF6FF] to-[#FFFEF9] text-dark">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#FEF0BD] py-2 px-5 w-fit text-xs font-medium rounded-3xl text-dark"
      >
        Click and Swap FAQs
      </motion.p>

      <div className="flex flex-col items-stretch justify-between gap-6 md:flex-row">
        {/* text column */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="md:text-4xl text-2xl font-bold font-space_grotesk my-4">
            Frequently asked <br /> questions.
          </h2>
          <p className="my-6 text-sm text-[#58646B] md:w-[70%]">
            From your first swap to everyday account questions, find the answers
            you need in one place.
          </p>

          <Link
            href={"/help"}
            className="bg-primary text-dark flex items-center rounded-full justify-center gap-1.5 font-space_grotesk py-3 px-10 font-semibold w-fit"
          >
            Contact Support
          </Link>
        </motion.div>

        {/* image column: as wide as the image, same height as the text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            stiffness: 120,
            damping: 12,
            mass: 0.8,
            type: "spring",
          }}
          className="flex shrink-0 justify-center"
        >
          <Image
            src={"/questions_illustration.webp"}
            width={200}
            height={200}
            alt="Questions Illustration"
            className="h-full w-auto object-contain"
            loading="eager"
          />
        </motion.div>
      </div>
    </main>
  );
}

export default HeroSection;
