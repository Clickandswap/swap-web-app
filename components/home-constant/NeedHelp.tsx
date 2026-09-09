"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { motion } from "framer-motion";

function NeedHelp() {
  return (
    <main className="px-8 md:py-14 md:px-36 py-0 pt-20 bg-[#F6F6F6] bg-cover text-dark sm:relative lg:h-85">
      <div className="lg:w-[40%] mb-4 lg:mb-0">
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
      className="lg:absolute right-30 bottom-0 lg:h-95 h-105">
        <Image
        src={"/landing_page/lady_thumbs_up.jpg"}
        alt="Need Help? Image"
        width={200}
        height={200}
        className="lg:w-auto w-full lg:h-auto h-full object-contain shadow-2xl"
        loading="lazy"
      />
      </motion.div>
    </main>
  );
}

export default NeedHelp;
