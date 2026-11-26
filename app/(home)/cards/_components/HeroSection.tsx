"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <main className="md:py-20 text-dark bg-linear-to-r from-[#FFFFFF00] to-[#FDF4C2] md:px-0 px-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-fit py-1.5 px-6 text-dark text-sm inset-shadow-2xs rounded-full my-2 mx-auto"
      >
        <span className="font-semibold">CARDS</span> . <span>Coming Soon</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="font-semibold md:leading-12 md:text-4xl text-2xl md:w-[45%] mx-auto font-space_grotesk text-center mt-4"
      >
        One card for all your global <br /> spending.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-base text-center mt-4 md:w-[50%] mx-auto"
      >
        Spend online and in-store anywhere, with automatic conversion to <br />
        local currency at checkout.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="flex sm:flex-row flex-col justify-center gap-4 my-6 md:w-[50%] md:mx-auto"
      >
        <Button className="px-10 bg-primary sm:w-fit w-full text-dark flex items-center justify-center gap-1.5 font-space_grotesk">
          {" "}
          <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Coming Soon{" "}
        </Button>
        <Button className="sm:w-fit w-full font-space_grotesk text-dark shadow-inner border border-primary px-10">
          Join the waitlist
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30, scale: 0.6 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex items-center justify-center w-full"
      >
        <Image
          width={1000}
          height={1000}
          src={"/cards/cards_updated.webp"}
          alt="Cards"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </motion.div>
    </main>
  );
}

export default HeroSection;
