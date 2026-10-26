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
import { cardwayData } from "@/common/data/business";

function CardWay() {
  return (
    <main className="text-dark bg-light lg:h-187.5 relative overflow-hidden flex flex-col lg:flex-row justify-between">
      <div className="lg:w-[40%] w-full px-6 lg:px-0 lg:ps-28 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-space_grotesk md:text-4xl text-3xl font-bold"
        >
          Your Card, Your Way <br /> Virtual or physical - <br /> it's your
          choice
        </motion.h2>
        {/* <p className="my-8 md:text-base text-sm">
          From software subscriptions to ad spend; from global purchase to local
          payments, our physical, virtuals and Prepaid cards covers you on all
          fronts
        </p> */}

        <div className="my-8">
          {cardwayData.map((item, index) => (
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
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between gap-4"
        >
          <Button className="bg-primary md:w-1/2 text-dark flex items-center justify-center gap-1.5 font-space_grotesk py-3">
            {" "}
            <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Download App{" "}
          </Button>
          <Button className="border border-primary text-dark md:w-1/2 font-space_grotesk">
            Join the waitlist
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.8,
          duration: 0.8,
        }}
        className="lg:h-full h-100 lg:w-[65%] w-full bg-no-repeat bg-right"
      >
        <Image
          src={"/business/business_prepaid_cards.webp"}
          alt="Card way image"
          width={1200}
          height={500}
          className="lg:w-auto lg:h-auto w-full h-full lg:object-contain object-cover -right-40 top-0"
          loading="lazy"
        />
      </motion.div>

      {/* leafs */}
            <Image
              src={"/landing_page/big_leaf.png"}
              alt="Big leaf"
              width={100}
              height={100}
              className="w-auto h-auto object-contain absolute bottom-0 left-0"
            />
    </main>
  );
}

export default CardWay;
