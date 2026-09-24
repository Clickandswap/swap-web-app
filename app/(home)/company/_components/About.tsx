"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  return (
    <main className="bg-dark text-light sm:px-28 px-6 py-16 flex flex-col lg:flex-row gap-12 justify-center items-center min-h-dvh">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
        className="px-6 pt-1 bg-[#202020] h-dvh lg:w-[35%]"
      >
        <Image
          src={"/company_page/about_us_img.png"}
          alt="Company's Personels"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
        className="lg:w-[35%] w-full"
      >
        <h3 className="font-bold text-4xl ">About Us</h3>
        <p className="my-6 text-base">
          Click and Swap is building stable-coin payment infrastructure for
          faster, lower-cost cross-border payments and local currency
          settlement, starting with Africa and the global diaspora. For
          millions, sending money home or accessing dollars still means high
          fees and slow transfers.
        </p>

        <p className="sm:text-base text-sm">
          We use stable coin rails to make cross-border payments faster, more
          affordable, and more transparent so money moves as freely as a
          message.
        </p>
      </motion.div>
    </main>
  );
}

export default About;
