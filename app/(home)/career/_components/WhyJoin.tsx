"use client";

import { whyJoin } from "@/common/data/card";
import { motion } from "framer-motion";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function WhyJoin() {
  return (
    <main className="py-10 md:px-26 px-6 text-dark bg-linear-to-r from-[#EFF6FF] to-[#FFFEF9]">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        WHY JOIN
      </motion.p>
      <motion.h4
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="my-4 font-bold md:text-3xl text-xl font-space_grotesk"
      >
        Security built into every step
      </motion.h4>

      <div className="flex md:flex-row flex-col gap-4 my-4">
        {whyJoin.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 * index,
              stiffness: 120,
              damping: 12,
              mass: 0.8,
              type: "spring",
            }}
            key={item.id}
            className="bg-[#FAFAFA] py-8 px-6 rounded-lg"
          >
            <IoCheckmarkCircleOutline className="h-6 w-6 mx-6" />
            <h4 className="mt-8 mb-4 font-semibold text-lg font-space_grotesk">
              {item.title}
            </h4>
            <p className="text-sm">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default WhyJoin;
