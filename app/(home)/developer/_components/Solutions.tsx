"use client";

import { developerCard } from "@/common/data/card";
import Image from "next/image";
import { motion } from "framer-motion";

function Solutions() {
  return (
    <main className="md:px-28 px-6 py-24 text-dark">
      <motion.h3
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bold sm:text-4xl text-2xl font-space_grotesk md:w-[65%] w-full"
      >
        Unlock the future of finance for your business. All-round solutions
        powered by ClickNSwap
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="sm:text-base text-xs my-6 md:w-[65%]"
      >
        We believe that powerful technology should feel simple to use. That’s
        why every part of our platform is designed with clarity, speed, and
        usability at its core. We prioritize intuitive design, transparent
        processes, and consistent performance to deliver an experience that
        users can trust.
      </motion.p>

      <div className="flex md:flex-row flex-col gap-6 my-10">
        {developerCard.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              className="p-6 rounded-xl bg-[#FFFBEF] md:w-[40%] w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 * index }}
            >
              <Image
                src={"/developer_page/yes.png"}
                alt="Yes Image"
                width={100}
                height={100}
                className="w-auto h-auto object-contain my-6"
              />

              <div>
                <h6 className="font-medium text-xl">{item.name}</h6>
                <p className="text-xs mt-4">{item.details}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}

export default Solutions;
