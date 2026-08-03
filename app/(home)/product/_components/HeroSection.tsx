"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <main className="bg-light flex md:flex-row flex-col md:h-dvh h-205 overflow-hidden relative items-center">
      <div className="md:w-[50%] w-full md:px-28 px-6 py-12 text-dark">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-fit py-1.5 px-6 text-dark text-sm inset-shadow-2xs rounded-full my-2"
        >
          Move money beyond borders
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-bold sm:text-5xl text-2xl font-space_grotesk"
        >
          Money for the people who matter.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="my-12 text-base"
        >
          Send, receive, swap, and spend across countries — with funds settled
          in your local currency, clear fees, and full control.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex sm:flex-row flex-col justify-between gap-4"
        >
          <Button className="bg-primary sm:w-1/2 w-full text-dark flex items-center justify-center gap-1.5 font-space_grotesk">
            {" "}
            <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Coming Soon{" "}
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
        transition={{ delay: 1.5, duration: 0.6 }}
        className="bg-[url(/product_page/crypto_card_bg.png)] h-full md:w-1/2 w-full md:px-0 px-6 md:block flex justify-center"
      >
        <Image
          src={"/clicknswap_mockup/clicknswap_mockup_two.png"}
          alt="ClickNSwap Dashboard MockUp"
          width={300}
          height={200}
          className="md:w-auto md:h-auto w-fit h-fit object-contain md:absolute right-30 -bottom-115"
          loading="eager"
        />
      </motion.div>
    </main>
  );
}

export default HeroSection;
