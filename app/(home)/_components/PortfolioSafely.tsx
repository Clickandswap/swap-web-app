"use client";

import { portfolioCard } from "@/common/data/card";
import Image from "next/image";
import { motion } from "framer-motion";

function PortfolioSafely() {
  return (
    <main className="md:px-28 px-6 py-24 text-dark overflow-hidden">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-space_grotesk md:text-4xl text-2xl font-bold md:leading-12 md:w-[50%] bg-linear-to-b from-dark to-[#517184] bg-clip-text text-transparent"
      >
        Everything you need to build your portfolio safely
      </motion.h2>

      <div className="flex flex-col lg:flex-row justify-between my-10 gap-6">
        {portfolioCard.map((item, index) => {
          return (
            <motion.div
              className={`card lg:w-[50%] w-full ${item.id === 1 ? "bg-[#FFFCF1]" : "bg-[#FCFFF9]"}`}
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 * (index + 1), duration: 0.6 }}
            >
              <figure className="py-10">
                <Image
                  src={item.img_path}
                  alt={item.title}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full h-30 object-contain my-12"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold md:text-3xl text-2xl font-space_grotesk">
                  {item.title}
                </h2>
                <p className="md:text-lg text-sm">{item.details}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="bg-[#EEF9FF] py-12 rounded-xl lg:h-110 h-150 flex lg:flex-row flex-col items-end relative overflow-hidden"
      >
        <div className="lg:w-[40%] w-full px-5 my-auto lg:ms-10 ">
          <h2 className="font-bold text-3xl font-space_grotesk">
            Send to any Click and Swap user for free
          </h2>
          <p className="font-medium md:text-lg text-sm my-4">
            Zero fees when you send to another Click and Swap user via their ID
            or username — instant and secure
          </p>
        </div>

        <Image
          src={"/clicknswap_mockup/clicknswap_mockup_three.png"}
          alt="ClickNSwap Mockup"
          width={2500}
          height={2000}
          className="lg:w-auto lg:h-auto w-full lg:object-contain lg:absolute lg:-right-70 lg:-bottom-80 bottom-0 right-0"
          loading="lazy"
        />
      </motion.div>
    </main>
  );
}

export default PortfolioSafely;
