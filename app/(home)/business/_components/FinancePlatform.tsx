"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

function FinancePlatform() {
  return (
    <main className="md:px-28 px-6 py-16">
      <div className="flex justify-between items-center">
        <h2 className="bg-linear-to-r from-dark to-[#517184] bg-clip-text text-transparent font-bold text-3xl font-space_grotesk">
          The all in one finance platform <br /> you've been looking for
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="w-fit"
        >
          <Button className="bg-primary w-full text-dark font-space_grotesk ">
            {" "}
            Open Business Account
          </Button>
        </motion.div>
      </div>

      {/* grid content */}
      <div className="grid auto-rows-[minmax(260px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] mt-10">
        {/* box 1 */}
        <div className="rounded-2xl bg-[#161920] sm:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between">
          <div className="p-6 md:w-[80%]">
            <Image
              src="/logos/ClickAndSwap_word_logo.png"
              alt="ClickNSwap Logo"
              className="object-contain w-auto h-auto"
              loading="eager"
              width={100}
              height={100}
            />

            <h2 className="text-2xl font-semibold font-space_grotesk text-light my-6">
              Built for the way you{" "}
              <span className="text-primary">move money</span>
            </h2>
            <p className="text-sm font-medium font-space_grotesk text-light">
              Transfer funds to over 30 countries instantly with the best market
              rates. Secure, reliable, and completely seamless transaction flows
              built for global operations.
            </p>
          </div>

          <div>
            <Image
              src="/business/business_globe_pic.webp"
              alt="Globe Pic"
              className="object-contain h-auto w-full"
              loading="eager"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* box 2 */}
        <div className='bg-[url("/business/business_operation.webp")] bg-center bg-cover rounded-2xl text-light'>
          <div className="p-4 bg-dark/50 h-full w-full flex justify-end flex-col rounded-2xl">
            <h4 className="text-lg font-space_grotesk font-medium">
              Operations
            </h4>
            <p className="text-sm my-4">
              Manage your business ops with bulk transfers, bill payments,
              expense tracking, and more.
            </p>
          </div>
        </div>

        {/* box 3 */}
        <div className='bg-[url("/business/business_payment.webp")] bg-center bg-cover rounded-2xl text-light'>
          <div className="p-4 bg-dark/50 h-full w-full flex justify-end flex-col rounded-2xl">
            <h4 className="text-lg font-space_grotesk font-medium">
              Business Payment
            </h4>
            <p className="text-sm my-4">
              Get paid and collect money through invoicing, NQR codes, and smart
              payment reminders.
            </p>
          </div>
        </div>

        {/* box 4 */}
        <div className='bg-[url("/business/business_banking.webp")] bg-center bg-cover rounded-2xl text-light sm:col-span-2'>
          <div className="p-4 bg-dark/50 h-full w-full flex justify-end flex-col rounded-2xl">
            <h4 className="text-lg font-space_grotesk font-medium">
              Start Business Banking
            </h4>
            <p className="text-sm my-4">
              Automated Banking with multi- currencies current accounts for
              start-ups
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FinancePlatform;
