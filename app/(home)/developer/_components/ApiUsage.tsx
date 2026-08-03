"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function ApiUsage() {
  return (
    <main className="bg-[#FFFBEF] py-10 md:px-16 px-6 text-dark md:my-20">
      {/* first section */}
      <div className="flex md:flex-row flex-col gap-6 md:h-70">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-light p-6 rounded-xl md:w-[45%] flex flex-col justify-between md:h-full h-70"
        >
          <div className="">
            <h4 className="text-2xl font-semibold font-space_grotesk">
              Account & Payouts
            </h4>
            <p className="text-sm my-2 md:w-1/2">
              Create accounts, collect funds, send payouts across supported
              corridors.
            </p>
          </div>

          <Link href={"#"} className="flex gap-6 items-center">
            <p className="text-[#517184] font-semibold md:text-xl text-sm">
              Read More{" "}
            </p>
            <FaArrowRightLong size={22} className="text-dark" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-light p-6 rounded-xl relative md:w-[55%] flex flex-col justify-between md:h-full h-90"
        >
          <div className="">
            <h4 className="text-2xl font-semibold font-space_grotesk">
              Card Issuing SDK
            </h4>
            <p className="text-sm my-2 md:w-1/2">
              Issue virtual and physical cards programmatically. 
            </p>
          </div>

          <Link href={"#"} className="flex gap-6 items-center">
            <p className="text-[#517184] font-semibold md:text-xl text-sm">
              Read More{" "}
            </p>
            <FaArrowRightLong size={22} className="text-dark" />
          </Link>

          <Image
            width={400}
            height={400}
            src={"/developer_page/card_issueing_sdk.png"}
            alt="Card Issuing Image"
            className="absolute right-0 bottom-0 object-contain md:h-auto md:w-auto h-50 w-50"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* second section */}
      <div className="flex md:flex-row flex-col gap-6 md:h-70 my-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="bg-light p-6 rounded-xl relative md:w-[60%] flex flex-col justify-between md:h-full h-90"
        >
          <div className="">
            <h4 className="text-2xl font-semibold font-space_grotesk">
              Transaction and Settlement API
            </h4>
            <p className="text-sm my-2 md:w-1/2">
              Fetch all payments made to your third-party merchants and Access
              detailed breakdown of settlements paid to your third party
              merchants.
            </p>
          </div>

          <Link href={"#"} className="flex gap-6 items-center">
            <p className="text-[#517184] font-semibold md:text-xl text-sm">
              Read More{" "}
            </p>
            <FaArrowRightLong size={22} className="text-dark" />
          </Link>

          <Image
            width={400}
            height={400}
            src={"/developer_page/api_settlement.png"}
            alt="Card Issuing Image"
            className="absolute right-0 bottom-0 object-contain md:h-auto md:w-auto h-50 w-50"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-light p-6 rounded-xl md:w-[40%] flex flex-col justify-between md:h-full h-70"
        >
          <div className="">
            <h4 className="text-2xl font-semibold font-space_grotesk">
              Payment Checkout
            </h4>
            <p className="text-sm my-2 md:w-1/2">
              Give customers confidence in your business with a modern, gorgeous
              checkout form that elevates your brand
            </p>
          </div>

          <Link href={"#"} className="flex gap-6 items-center">
            <p className="text-[#517184] font-semibold md:text-xl text-sm">
              Read More{" "}
            </p>
            <FaArrowRightLong size={22} className="text-dark" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

export default ApiUsage;
