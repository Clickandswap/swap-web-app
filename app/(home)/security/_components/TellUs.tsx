"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

function TellUs() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-light md:px-30 px-6 py-18 text-center text-dark"
    >
      <div className="bg-[#EEF9FF] px-10 py-16  rounded-xl">
        <h2 className="md:text-5xl text-2xl font-semibold font-space_grotesk">
          See something? Tell us.
        </h2>

        <p className="text-foundation_blue my-6 text-center">
          If you spot anything suspicious on your account, our <br />
          team is here to help quickly.
        </p>

        <Button
          className="inline-flex rounded-full p-px my-4"
          style={{
            background: "linear-gradient(135deg, #FFD964, #99823C)",
          }}
        >
          <div className="rounded-full bg-primary px-8 py-2 text-sm text-dark">
            Contact Security
          </div>
        </Button>
      </div>
    </motion.main>
  );
}

export default TellUs;
