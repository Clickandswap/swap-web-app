"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Articles() {
  return (
    <main className="md:px-32 px-6 md:py-20 py-8 flex flex-col items-stretch justify-between gap-6 md:flex-row">
      {/* first */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FEF0BD] py-2 px-5 w-fit text-xs font-medium rounded-3xl text-dark"
          >
            Featured
          </motion.p>

          <h5 className="text-[#6B7280] text-sm">
            12 October 2026 . 5 min read
          </h5>
        </div>

        <h3 className="md:text-5xl text-2xl font-space_grotesk font-bold">
          Before you send: a smarter guide to safer transfers
        </h3>
        <p className="text-[#4B5563] text-base leading-6">
          A few simple checks can help you send with more confidence. Review the
          recipient, confirm the amount and delivery details, and keep the right
          information handy if you need support.
        </p>

        <Link
          href={"#"}
          className="bg-primary text-dark flex items-center rounded-md justify-center gap-1.5 font-space_grotesk py-3 px-10 font-semibold w-fit"
        >
          Read Article
        </Link>
      </div>

      {/* second */}

      <div className="flex shrink-0 justify-center w-[30%]">
        <Image
          src={"/blog/blog_hero_pic.webp"}
          alt="Hero Section Blog Image Represenation"
          loading="eager"
          width={500}
          height={500}
          className="object-cover rounded-2xl w-full h-full"
        />
      </div>
    </main>
  );
}

export default Articles;
