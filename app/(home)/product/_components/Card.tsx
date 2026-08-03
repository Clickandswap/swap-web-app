"use client";

import { productCard } from "@/common/data/card";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import {
  IoCheckmarkCircleOutline,
  IoLogoAppleAppstore,
  IoLogoGooglePlaystore,
} from "react-icons/io5";
import { motion } from "framer-motion";

function Card() {
  return (
    <main className="bg-dark text-light md:h-188 relative sm:px-28 px-6 md:py-18 pt-18 overflow-hidden">
      <div className="md:w-[35%] w-full">
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bold sm:text-4xl text-2xl font-space_grotesk"
        >
          Your Card, Your Way, Virtual or physical ⎯ it’s your choice
        </motion.h3>

        {/* <p className="font-base my-4">
          Turn your digital assets into everyday spending power - Pay online or
          in-store globally, Automatically convert crypto to fiat, Secure and
          easy-to-use virtual card, Track every transaction in-app.
        </p> */}

        {productCard.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              className="flex gap-3 my-4"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 * (index + 1), duration: 0.6 }}
            >
              <IoCheckmarkCircleOutline
                className={`h-6 w-6 ${item.id === 2 && "h-8 w-8"}`}
              />
              <p className="font-medium text-sm">{item.details}</p>
            </motion.div>
          );
        })}

        <div className="flex sm:flex-row flex-col justify-between gap-4 mt-6">
          <Button className="bg-primary sm:w-1/2 w-full text-dark flex items-center justify-center gap-1.5 font-space_grotesk">
            {" "}
            <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Coming Soon{" "}
          </Button>
          <Button className="sm:w-1/2 w-full font-space_grotesk text-light shadow-inner border border-primary">
            Join the waitlist
          </Button>
        </div>
      </div>

      {/* lady holding card Image */}
      <motion.div
        className="md:absolute bottom-0 right-20"
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          // duration: 0.8,
          stiffness: 120,
          damping: 12,
          mass: 0.8,
          type: "spring",
        }}
      >
        <Image
          src={"/product_page/lady_holding_card_two_updated.png"}
          alt="Card"
          width={700}
          height={300}
          className="md:w-auto md:h-auto w-full md:object-cover object-contain"
        />
      </motion.div>

      {/* leafs */}
      <Image
        src={"/landing_page/big_leaf.png"}
        alt="Big leaf"
        width={100}
        height={100}
        className="w-auto h-auto object-contain absolute bottom-0 left-0 hidden md:block"
      />
      <Image
        src={"/landing_page/small_leaf.png"}
        alt="Small leaf"
        width={100}
        height={100}
        className="w-auto h-auto object-contain absolute bottom-0 left-36 hidden md:block"
      />
    </main>
  );
}

export default Card;
