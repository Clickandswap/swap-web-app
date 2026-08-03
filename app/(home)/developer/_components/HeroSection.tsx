"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <main className="text-dark">
      <div className="md:px-28 px-6 py-16">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FEF0BD] py-2 px-5 w-fit mx-auto text-xs font-medium rounded-3xl"
        >
          ClickNSwap For Developers
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-semibold leading-12 text-4xl md:w-[45%] mx-auto font-space_grotesk text-center mt-4"
        >
          Build on Click and Swap
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-base text-center mt-4 md:w-[50%] mx-auto"
        >
          Our payments API is in private beta. Join the developer waitlist for
          early access to accounts, payouts, card issuing, and
          stablecoin-to-local-currency conversion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex sm:flex-row flex-col justify-between gap-4 my-6 md:w-1/2 md:mx-auto"
        >
          <Button className="bg-primary sm:w-1/2 w-full text-dark flex items-center justify-center gap-1.5 font-space_grotesk">
            {" "}
            Request Developer Access
          </Button>
          <Button className="sm:w-1/2 w-full font-space_grotesk text-dark shadow-inner border border-primary">
            Join the waitlist
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 1.5,
          // duration: 0.8,
          stiffness: 120,
          damping: 12,
          mass: 0.8,
          type: "spring",
        }}
        className="w-dvw h-dvh"
      >
        <Image
          src={"/developer_page/developer_img.png"}
          alt="Developer Image"
          width={1000}
          height={400}
          className="object-cover w-full h-full"
          loading="eager"
        />
      </motion.div>
    </main>
  );
}

export default HeroSection;
