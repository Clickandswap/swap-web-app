"use client";

import { madeEasyCard } from "@/common/data/card";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

function MadeEasy() {
  return (
    <main className="sm:px-28 py-12">
      <h2 className="font-bold md:text-5xl text-3xl bg-linear-to-r from-dark to-gradient-dark-secondary bg-clip-text text-transparent text-center py-10 sm:px-28 px-6">
        Everything in one app
      </h2>

      <div className="text-dark">
        {madeEasyCard.map((item, index) => {
          return (
            <div key={item.id} className="flex md:flex-row flex-col my-5">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${item.id === 1 && "bg-[#EEF9FF]"} ${item.id === 2 && "bg-[#FAFAFA]"} ${item.id === 3 && "bg-[#FFFCF1]"} md:w-1/2 w-full p-20 md:pt-32 flex items-center`}
              >
                <div>
                  <h3 className="font-bold font-space_grotesk text-2xl">
                    {item.name}
                  </h3>
                  <p className="text-base my-5 md:w-[65%]">{item.details}</p>

                  <Button className="sm:w-1/2 w-full font-space_grotesk text-dark shadow-inner border border-primary">
                    Join the waitlist
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1}}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  // duration: 0.8,
                  stiffness: 120,
                  damping: 12,
                  mass: 0.8,
                  type: "spring",
                }}
                className="md:w-1/2 w-full p-12 relative bg-no-repeat bg-cover bg-center flex items-center justify-center md:h-auto h-100"
                style={{ backgroundImage: `url(${item.img_bg})` }}
              >
                {item.id === 1 && (
                  <Image
                    src={item.img_path}
                    width={400}
                    height={400}
                    className="w-fit h-fit object-contain md:absolute bottom-10"
                    alt={`${item.name} Sample Image`}
                  />
                )}

                {item.id === 2 && (
                  <Image
                    src={item.img_path}
                    width={200}
                    height={200}
                    className="w-fit h-fit object-contain md:absolute -left-28 bottom-10"
                    alt={`${item.name} Sample Image`}
                  />
                )}

                {item.id === 3 && (
                  <Image
                    src={item.img_path}
                    width={200}
                    height={200}
                    className="w-fit h-fit object-contain"
                    alt={`${item.name} Sample Image`}
                  />
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default MadeEasy;
