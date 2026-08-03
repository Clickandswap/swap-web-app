"use client";

import { internationalDetails } from "@/common/data/card";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {
  IoCheckmarkCircleOutline,
  IoLogoAppleAppstore,
  IoLogoGooglePlaystore,
} from "react-icons/io5";
import { motion } from "framer-motion";

function InternationalCard() {
  return (
    <main className="text-dark bg-[#FEE89D] md:h-187.5 relative overflow-hidden flex flex-col md:flex-row justify-between">
      <div className="md:w-[40%] w-full px-6 md:px-0 md:ps-28 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-space_grotesk md:text-4xl text-3xl font-bold"
        >
          One international <br /> card for all your <br /> global spending
        </motion.h2>
        {/* <p className="my-8 md:text-base text-sm">
          From software subscriptions to ad spend; from global purchase to local
          payments, our physical, virtuals and Prepaid cards covers you on all
          fronts
        </p> */}

        <div className="my-8">
          {internationalDetails.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 * index, duration: 0.6 }}
              key={item.id}
              className="flex gap-3 my-4"
            >
              <IoCheckmarkCircleOutline
                className={`h-6 w-6 ${item.id === 2 && "h-8 w-8"}`}
              />
              <p className="font-medium">{item.details}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between gap-4"
        >
          <Button className="bg-dark md:w-1/2 text-light flex items-center justify-center gap-1.5 font-space_grotesk">
            {" "}
            <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Download App{" "}
          </Button>
          <Button className="border border-dark text-dark md:w-1/2 font-space_grotesk">
            Use Prepaid
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1,}}
        viewport={{ once: true }}
        transition={{
          delay: 0.8,
          duration: 0.8,
        }}
        className="bg-[url(/logos/logo_big.png)] bg-contain md:h-full h-100 md:w-[65%] w-full bg-no-repeat bg-right"
      >
        <Image
          src={"/landing_page/lady_holding_card_updated.png"}
          alt="International card"
          width={1200}
          height={500}
          className="md:w-auto md:h-auto w-full h-full md:object-contain object-cover md:absolute -right-60 top-0"
          loading="lazy"
        />
      </motion.div>
    </main>
  );
}

export default InternationalCard;
