"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <main className="text-dark p-6 bg-linear-to-r from-[#EFF6FF] to-[#FFFEF9]">
      <motion.h6
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}  
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#6B7280] text-sm"
      >
        Click and Swap / Legal /{" "}
        <span className="font-semibold">Terms and Conditions</span>
      </motion.h6>
      <div className="md:px-28 px-6 py-16">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FEF0BD] py-2 px-5 w-fit mx-auto text-xs font-medium rounded-3xl"
        >
          Legal
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-semibold leading-12 md:text-4xl text-2xl md:w-[45%] mx-auto font-space_grotesk text-center mt-4"
        >
          Terms and Conditions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-base text-center mt-4 md:w-[50%] mx-auto text-[#58646B]"
        >
          A clear guide to using Click and Swap, your responsibilities, and
          where to find help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="my-6 mx-auto w-fit"
        >
          <p className="text-sm text-[#58646B]">
            Draft sample for review · No effective date assigned
          </p>
        </motion.div>
      </div>
    </main>
  );
}

export default HeroSection;
