"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function WayToSave() {
  return (
    <main className="py-20 bg-light flex md:flex-row flex-col-reverse gap-6 justify-center text-dark md:items-stretch items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#FAFAFA] w-full max-w-100 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between"
      >
        {/* Text Container */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold font-space_grotesk tracking-tight text-gray-900">
            A Smarter Way to Save
          </h2>
          <p className="mt-3 text-sm md:text-base leading-relaxed">
            Experience the ease of saving right from your smartphone, ensuring
            financial flexibility whenever you need it.
          </p>
        </div>

        {/* Image Container */}
        <div className="w-full mt-auto pt-4">
          <Image
            src="/product_page/hold_coins_clippath.png"
            width={400}
            height={300}
            alt="Coin"
            className="w-full h-auto object-contain block"
            loading="eager"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-[#FAFAFA] w-full max-w-100 rounded-2xl overflow-hidden shadow-sm border py-6 md:py-8 px-4 border-gray-100 flex flex-col justify-between h-100 md:h-auto"
      >
        {/* Text Container */}
        <div className="">
          <h2 className="text-2xl md:text-3xl font-bold font-space_grotesk tracking-tight text-gray-900">
            Pay Your Bills Without Stress
          </h2>
          <p className="mt-3 text-sm md:text-base leading-relaxed">
            From airtime to data purchases, electricity bills and more, pay your
            bills easily, all on one dashboard
          </p>
        </div>

        {/* Image Container */}
        <div className="w-full mt-auto pt-4 relative">
          <Image
            src="/product_page/bills_payment.png"
            width={400}
            height={300}
            alt="Coin"
            className="w-full h-auto object-contain block"
            loading="eager"
          />

          <div className="h-3 w-[95%] rounded-b-2xl bg-[#EAEAEA] mx-auto"></div>
        </div>
      </motion.div>
    </main>
  );
}

export default WayToSave;
