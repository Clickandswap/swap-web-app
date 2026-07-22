"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function CountOnCards() {
  return (
    <main className="py-16 md:px-26 px-6 text-dark">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:text-4xl text-2xl font-semibold font-space_grotesk"
      >
        Cards you can count on
      </motion.h2>
      <p className="font-medium mt-4 md:w-[50%]">
        Move money the way the moment needs — across borders, into local
        currency, or onto a card.
      </p>

      <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
        {/* card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-[#F5F5F5] rounded-lg"
        >
          <h4 className="font-medium mb-4 mt-8 text-lg font-space_grotesk">
            Card insurance included
          </h4>
          <p className="text-base md:w-[80%]">
            Travel, business purchases, fraud. Your card is covered wherever you
            pay.
          </p>
        </motion.div>

        {/* card 2 */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="p-6 bg-[#F5F5F5] rounded-lg"
        >
          <h4 className="font-medium mb-4 mt-5 text-lg font-space_grotesk">
            Your Cards, protected
          </h4>
          <p className="text-base md:w-[80%]">
            we protect you with proactive, purpose-built defences and offer
            award-winning support.
          </p>
          <Image
            width={200}
            height={200}
            className="w-auto h-auto object-contain mt-4"
            alt="Single Card"
            src={"/cards/single_card.png"}
          />
        </motion.div>

        {/* card 3 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="md:row-span-2 rounded-lg flex flex-col justify-between overflow-hidden relative min-h-125"
        >
          <div className="relative w-full rounded-2xl h-full">
            <Image
              src={"/product_page/lady_holding_card_two.png"}
              alt="Card"
              width={700}
              height={300}
              className="inset-0 h-full w-full object-cover rounded-xl"
            />

            {/* overlay */}
            <div className="absolute inset-0 h-full w-full rounded-xl bg-linear-to-b from-[#050505AB] to-dark/10 text-light p-6">
              <h4 className="font-medium text-xl font-space_grotesk mb-4">
                You are in full control
              </h4>
              <p className="font-light text-sm">
                if in doubt, freeze , block and unfreeze cards in seconds.
                Customise card control for safer spending
              </p>
            </div>
          </div>
        </motion.div>

        {/* card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-between bg-radial from-[#FAFAFA] to-[#FFFCF1] rounded-lg p-6 md:col-span-2 flex-col md:flex-row items-start md:items-center overflow-hidden gap-6"
        >
          <div>
            <h4 className="font-medium mb-4 mt-5 text-lg font-space_grotesk">
              Card Customization
            </h4>
            <p className="text-base md:w-[80%]">
              With our customization options, you can express your personality
              and style every time you swipe
            </p>
          </div>
          <Image
            width={200}
            height={200}
            className="w-auto h-auto object-contain"
            alt="Single Card"
            src={"/cards/triple_card.png"}
          />
        </motion.div>
      </div>
    </main>
  );
}

export default CountOnCards;
