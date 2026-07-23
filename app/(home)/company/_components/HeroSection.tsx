"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <main className="md:px-28 px-6 pt-12 text-dark">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#FEF0BD] py-2 px-5 w-fit mx-auto text-xs font-medium rounded-3xl"
      >
        About Us
      </motion.p>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-semibold md:leading-12 md:text-4xl text-2xl md:w-[40%] mx-auto font-space_grotesk text-center mt-4"
      >
        ClickNSwap is building the future of trust in digital transactions.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.8,
          // duration: 0.8,
          stiffness: 120,
          damping: 12,
          mass: 0.8,
          type: "spring",
        }}
        className="w-fit mx-auto mt-6"
      >
        <Image
          src={"/company_page/business_plan.png"}
          alt="Business Plan"
          width={500}
          height={200}
          className="w-auto h-auto object-contain"
          loading="eager"
        />
      </motion.div>
    </main>
  );
}

export default HeroSection;
