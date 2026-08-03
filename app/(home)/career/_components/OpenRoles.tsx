"use client";

import { openRolesItems } from "@/common/data/openRoles";
import Link from "next/link";
import { motion } from "framer-motion";

function OpenRoles() {
  return (
    <main className="py-10 md:px-26 px-6 text-dark md:my-18">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        OPEN ROLES
      </motion.p>
      <motion.h4
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="my-4 font-bold md:text-3xl text-xl font-space_grotesk"
      >
        JOIN OUR TEAM
      </motion.h4>

      <div>
        {openRolesItems.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 * index,
              stiffness: 120,
              damping: 12,
              mass: 0.8,
              type: "spring",
            }}
            key={item.id}
            className="border border-[#EAE6DA] flex md:flex-row flex-col justify-between md:items-center gap-4 md:gap-0 py-10 px-10 pe-24 my-6 rounded-lg"
          >
            <div>
              <h4 className="font-bold text-xl font-space_grotesk text-[#0F2723]">
                {item.title}
              </h4>
              <p className="text-[#5A6764]">{item.type}</p>
            </div>

            <Link
              href={item.link}
              className="py-3 px-10 bg-primary text-dark rounded-lg font-semibold w-fit"
            >
              Apply
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default OpenRoles;
