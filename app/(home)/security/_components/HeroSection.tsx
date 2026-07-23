"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <main className="md:py-20 py-10 md:px-52 px-6 text-dark bg-linear-to-r from-[#EFF6FF] to-[#FFFEF9]">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#FEF0BD] py-2 px-5 w-fit text-xs font-medium rounded-3xl"
      >
        ClickNSwap Security
      </motion.p>

      <motion.h4
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-medium md:text-4xl text-2xl font-space_grotesk md:leading-12 my-4"
      >
        Your money and data, <br /> protected at every layer.
      </motion.h4>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="md:w-1/2 my-4"
      >
        Click and Swap uses bank-grade encryption, identity verification, and
        continuous monitoring to help keep your account secure.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1}}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
        className="w-full border mt-8"
      >
        <Image
          src={"/logos/clickNswap_gradient.png"}
          width={600}
          height={600}
          alt="ClickNSwap Gradient Logo"
          className="object-cover h-full w-full"
          loading="eager"
        />
      </motion.div>
    </main>
  );
}

export default HeroSection;
