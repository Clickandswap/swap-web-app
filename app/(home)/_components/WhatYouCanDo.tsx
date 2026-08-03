"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function WhatYouCanDo() {
  return (
    <main className="md:px-28 px-6 pt-16 pb-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-fit py-1.5 px-6 text-dark text-sm inset-shadow-2xs rounded-full my-2"
      >
        What you can do
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="font-bold font-space_grotesk md:text-4xl text-2xl text-dark"
      >
        One app for every kind of transfer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-base text-dark my-3"
      >
        Move money the way the moment needs — across borders, into local
        currency, or onto a card.
      </motion.p>

      <div className="flex md:flex-row flex-col gap-6">
        <div className="md:w-[70%]">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="md:bg-[url(/landing_page/bg_gradient_dark_to_light.png)] bg-dark/80 h-60 overflow-hidden bg-cover relative flex rounded-xl p-6 w-full"
          >
            <div className="w-1/2">
              <h4 className="font-semibold text-2xl mb-4 font-space_grotesk">
                Send and Receive
              </h4>
              <p className="text-sm font-light">
                Transfer money internationally in a few taps. Get paid in your
                local currency, straight to your account.
              </p>
            </div>

            <div className="absolute md:-right-10 -right-30 -top-16 h-150 w-105">
              <Image
                width={1000}
                height={1000}
                src={"/clicknswap_mockup/clicknswap_mockup_three.png"}
                alt="ClickNSwap Mobile Mockup"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <div className="flex md:flex-row flex-col gap-4 mt-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2, duration: 0.6 }}
              className="text-dark p-4 bg-radial from-[#FAFAFA] to-[#EEF9FF] rounded-xl md:w-1/2"
            >
              <h4 className="font-medium font-space_grotesk text-2xl">
                Buy & Sell
              </h4>
              <p className="text-sm font-light mt-2 mb-14">
                Convert between local currency and supported digital assets.
              </p>

              {/* <div className="w-full h-25"> */}
              <Image
                width={500}
                height={500}
                src={"/landing_page/swap_btc_usd.png"}
                alt="BTC swap to USD"
                className="h-fit w-full object-cover"
              />
              {/* </div> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="text-dark p-4 bg-radial from-[#FAFAFA] to-[#FFFCF1] rounded-xl md:w-1/2"
            >
              <h4 className="font-medium font-space_grotesk text-2xl">
                And More
              </h4>
              <p className="text-sm font-light mt-2 mb-14">
                Savings, bills & airtime, and a developer API — rolling out as
                we grow.
              </p>

              <div className="w-full bg-light py-2.5">
                <Image
                  width={500}
                  height={500}
                  src={"/landing_page/bills_payment.png"}
                  alt="BTC swap to USD"
                  className="h-fit w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 3, duration: 0.6 }}
          className="md:w-[30%] md:mt-0 mt-10  md:h-auto h-87.5"
        >
          <div className="relative w-full rounded-2xl h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover rounded-xl"
            >
              <source src="/landing_page/customer_woman.mp4" type="video/mp4" />
            </video>

            {/* overlay */}
            <div className="absolute inset-0 h-full w-full rounded-xl bg-dark/60 p-5">
              <h4 className="font-medium text-xl font-space_grotesk mb-4">
                Business
              </h4>
              <p className="font-light text-sm">
                Accept payments and send payouts across corridors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default WhatYouCanDo;
