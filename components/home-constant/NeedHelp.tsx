"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { motion } from "framer-motion";

function NeedHelp() {
  return (
    <main className="px-8 md:py-14 md:px-36 py-0 pt-20 bg-[#F6F6F6] bg-cover text-dark sm:relative md:h-85">
      <div className="md:w-[40%] mb-4 md:mb-0">
        <h3 className="font-bold sm:text-4xl text-2xl font-space_grotesk">
          Need Help? Talk to us
        </h3>
        <p className="font-[300] sm:text-base text-xs mt-4 mb-8">
          Our multi-channel customer success team is always available to support
          you.
        </p>

        <Button className="border border-dark rounded-full px-10 inset-shadow-2xs">
          Speak to us
        </Button>
      </div>

      <motion.div 
      initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
      className="md:absolute right-30 bottom-0 md:h-95 h-105">
        <Image
        src={"/landing_page/lady_thumbs_up.jpg"}
        alt="Need Help? Image"
        width={200}
        height={200}
        className="md:w-auto w-full md:h-auto h-full object-contain shadow-2xl"
        loading="lazy"
      />
      </motion.div>
    </main>
  );
}

export default NeedHelp;
