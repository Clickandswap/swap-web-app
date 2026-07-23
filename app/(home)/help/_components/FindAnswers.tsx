"use client";

import { findAnswers } from "@/common/data/findAnswers";
import { GoArrowUpRight } from "react-icons/go";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function FindAnswers() {
  return (
    <main className="py-10 md:px-26 px-6 text-dark md:my-18">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        BROWSE BY TOPIC
      </motion.p>
      <motion.h4
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="my-4 font-bold md:text-3xl text-xl font-space_grotesk"
      >
        Find answers fast
      </motion.h4>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        {findAnswers.map((item, index) => (
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
            className="py-8 px-6 rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] hover:bg-linear-to-r from-[#EFF6FF] to-[#FFFEF9] hover:border-[#FFEEB0] hover:shadow-lg transition-all duration-150 ease-in-out"
          >
            <div className="flex justify-between">
              <IoCheckmarkCircleOutline className="h-6 w-6" />
              <GoArrowUpRight />
            </div>

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

export default FindAnswers;
