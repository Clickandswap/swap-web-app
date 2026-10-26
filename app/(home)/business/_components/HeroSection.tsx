"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import { motion } from "framer-motion";
import { supports } from "@/common/data/business";

function HeroSection() {
  return (
    <main className="text-dark py-4">
      <div className="px-6 py-10 md:px-12 md:py-16 xl:px-28">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-light inset-shadow-sm py-2 px-5 w-fit mx-auto text-xs font-medium rounded-3xl text-center"
        >
          Brilliant business banking for SMEs
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-semibold leading-tight md:leading-12 text-2xl md:text-4xl max-w-xl mx-auto font-space_grotesk text-center mt-4"
        >
          Move Money at internet speed
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-sm md:text-base text-center mt-4 max-w-2xl mx-auto"
        >
          Send invoices, receive payments, pay business bills, make bulk
          transfers, and free up time for the rest of your life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="my-6 w-fit mx-auto"
        >
          <Button className="bg-primary w-full text-dark font-space_grotesk">
            {" "}
            Open Business Account
          </Button>
        </motion.div>
      </div>

      {/* bg video section */}
      <div className="px-6">
        <div className="relative mt-6 w-full overflow-hidden rounded-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/landing_page/customer_woman.mp4" type="video/mp4" />
          </video>

          {/* content at the bottom: the box grows with the cards, so nothing overflows on phones */}
          {/* wrapper: centers the cards at the bottom of the video */}
          <div className="relative z-10 flex min-h-130 flex-col items-center justify-end gap-3 p-4 md:min-h-160 md:flex-row md:flex-wrap md:items-end md:justify-center lg:min-h-200">
            {supports.map((item) => {
              return (
                <div
                  className="flex w-full max-w-xs flex-col items-center gap-3 rounded-xl border border-[#343333]/70 p-4 text-center backdrop-blur-[2px] md:w-64 lg:w-72"
                  key={item.id}
                >
                  <Image
                    src={item.icon}
                    width={400}
                    height={400}
                    alt="Icon Representation"
                    className="h-8 w-auto object-contain"
                  />

                  <h6 className="text-light font-space_grotesk font-medium text-sm md:text-base">
                    {item.title}
                  </h6>
                  <p className="text-xs text-light">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
