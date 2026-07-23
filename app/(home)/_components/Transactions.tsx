"use client";

import { gettingStartedSteps } from "@/common/data/card";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa6";
import { motion } from "framer-motion";

function Transactions() {
  return (
    <main className="bg-linear-to-b from-[#FDF4C2] to-light pt-12 min-h-dvh relative md:pt-26">
      <section className="flex md:flex-row flex-col-reverse h-full">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="h-full md:w-[60%]"
        >
          <Image
            width={500}
            height={1200}
            alt="phone and debit card"
            src={"/landing_page/phone_and_wood.png"}
            className="object-cover h-full w-full"
          />
        </motion.div>

        <div className="text-[#222F37] md:w-[40%] md:me-30 md:px-0 px-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="md:text-5xl text-2xl font-bold font-space_grotesk mb-6"
          >
            Getting Started in <br /> Just a Few Steps
          </motion.h3>
          <h4 className="">Up and running in a few steps</h4>

          <div className="mt-8">
            {gettingStartedSteps.map((item, index) => {
              const isLast = index === gettingStartedSteps.length - 1;
              return (
                <div key={item.id} className="relative pb-10 last:pb-0">
                  {/* Vertical Dashed Line connecting the dots */}
                  {!isLast && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: "auto" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="absolute top-7 left-2.25 bottom-0 w-[1.5px] border-l-2 border-secondary"
                    />
                  )}

                  {/* Circular Dot Indicator */}
                  <div className="absolute top-1.5 left-0 h-5 w-5 rounded-full bg-secondary" />

                  <div className="pl-10">
                    {item.id === 1 ? (
                      <h2 className="font-space_grotesk md:text-3xl text-xl font-bold md:w-[90%] bg-linear-to-b from-dark to-[#517184] bg-clip-text text-transparent">
                        {item.title}
                      </h2>
                    ) : (
                      <h2 className="font-space_grotesk md:text-3xl text-xl font-bold">
                        {item.title}
                      </h2>
                    )}
                    <p className="my-2">{item.details}</p>

                    {item.buttonPresent && (
                      <div className="flex md:flex-row flex-col gap-6 items-center mt-5">
                        <Button className="bg-dark text-light flex gap-2 items-center py-2 px-6 justify-center md:w-auto w-full">
                          <Image
                            width={200}
                            height={200}
                            src={"/store_badges/playstore_icon.png"}
                            alt="Play Store Icon"
                            className="w-5 h-5 object-contain"
                          />

                          <h4 className="font-space_grotesk font-medium text-lg">
                            Play Store
                          </h4>
                        </Button>

                        <Button className="bg-dark text-light flex gap-2 items-center py-2 px-6 justify-center md:w-auto w-full">
                          <FaApple color="white" size={20} />

                          <h4 className="font-space_grotesk font-medium text-lg">
                            App Store
                          </h4>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* leafs */}
      <Image
        src={"/landing_page/big_leaf.png"}
        alt="Big leaf"
        width={100}
        height={100}
        className="w-auto h-auto object-contain absolute bottom-0 left-0"
      />
      <Image
        src={"/landing_page/small_leaf.png"}
        alt="Small leaf"
        width={100}
        height={100}
        className="w-auto h-auto object-contain absolute bottom-0 left-36"
      />
    </main>
  );
}

export default Transactions;
