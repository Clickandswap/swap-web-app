"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

function HeroSection() {
  return (
    <main className="text-light bg-dark md:pt-28 pt-10 md:pb-24 pb-8  h-max flex flex-col md:flex-row justify-between">
      <div className="md:px-28 px-6 md:w-[60%] md:mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex rounded-full p-px my-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.08))",
          }}
        >
          <div className="rounded-full bg-black px-8 py-2 text-sm text-white">
            Move money beyond borders
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-bold md:text-5xl text-3xl md:text-start text-center font-space_grotesk"
        >
          Send, receive, exchange, and spend money across borders.
        </motion.h2>
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-medium text-lg my-6 md:text-start text-center"
        >
          Fast settlement. Transparent pricing. Local currency payouts.
        </motion.h4>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between gap-4"
        >
          <Button className="bg-primary md:w-1/2 text-dark flex items-center justify-center gap-1.5 font-space_grotesk py-3">
            {" "}
            <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Download App{" "}
          </Button>
          <Button className="border border-primary text-light md:w-1/2 font-space_grotesk">
            Join the waitlist
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="w-[40%] md:mt-0 mt-10 md:px-12 px-4 md:self-auto self-center"
      >
        {/* <Image
          src={"/landing_page/big_slope_home.png"}
          alt="Home Page Hero Slope"
          width={500}
          height={300}
          className="md:h-auto h-full w-full object-cover"
          loading="eager"
        /> */}
        <div className="relative aspect-square w-full max-w-140 overflow-hidden rounded-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/landing_page/earth_globe_rotating.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </motion.div>
    </main>
  );
}

export default HeroSection;
