"use client";

import { teamMembers } from "@/common/data/team";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Team() {
  return (
    <main className="bg-[#FFFAE9] py-14 md:px-18 px-6">
      <h2 className="text-[#0F2723] md:text-5xl text-2xl font-semibold">
        The Team building it
      </h2>

      <div className="my-8 flex md:flex-row flex-col gap-3">
        {/* apply */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-light p-4 md:w-[30%] flex items-center"
        >
          <div className="">
            <div className="flex items-center gap-2">
              <div className="bg-[#517184] h-0.5 w-10" />
              <h4 className="text-[#517184] font-medium text-sm">
                BUILD YOUR CAREER
              </h4>
            </div>

            <h3 className="text-[#0D1412] md:text-3xl text-xl font-semibold my-4 leading-10 font-space_grotesk">
              Want to join our team for better Future?
            </h3>
            <p className="text-[#0D1412] text-sm my-5">
              Open roles and room for people we haven't imagined yet.
            </p>

            <Button className="border border-[#959595] text-[#0D1412] rounded-sm px-8">
              APPLY NOW
            </Button>
          </div>
        </motion.div>

        {/* team members */}
        <div className="flex md:flex-row flex-col gap-4 w-full">
          {teamMembers.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative w-full h-120 flex items-end overflow-hidden"
              initial={{ opacity: 0, height: "20px" }} // Changed 10 to a valid string unit for width scales
              whileInView={{ opacity: 1, height: "480px" }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.6,
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              {/* Next.js Optimized Image handling fill & fit */}
              <Image
                src={item.img}
                alt={item.name}
                fill
                sizes="(max-w-7xl) 33vw, 100vw"
                priority={item.id <= 3} // Gives priority loading to the visible team members
                className="object-cover object-top transition-transform duration-300 hover:scale-105"
              />

              {/* Text overlay box positioned cleanly over the image */}
              <div className="relative z-10 bg-[#FFEEB0] w-[90%] text-neutral-900 py-4 px-4 shadow-lg">
                <h4 className="text-neutral-700 text-sm ">{item.title}</h4>
                <p className="  mt-0.5 text-lg leading-tight font-semibold">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Team;
