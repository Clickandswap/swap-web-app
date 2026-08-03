"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";

function WaitlistPage() {
  return (
    <main className="bg-[url(/product_page/crypto_card_bg.png)] min-h-dvh w-dvw bg-cover">
      <div className="bg-dark/90 h-full w-full flex items-center justify-center md:pt-40 md:pb-20">
        <main className="w-[60%]">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:text-5xl text-2xl font-semibold font-space_grotesk text-center"
          >
            Be Among the First to join{" "}
            <span className="text-primary">Click And Swap</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center my-2"
          >
            Send, receive, exchange, and spend money across borders.
          </motion.p>

          <motion.form
            action=""
            className="w-full bg-light rounded-xl py-8 px-6 text-dark my-4"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 1.5,
              // duration: 0.8,
              stiffness: 120,
              damping: 12,
              mass: 0.8,
              type: "spring",
            }}
          >
            <h2 className="text-center font-semibold md:text-5xl text-3xl  font-space_grotesk my-4">
              Join the waitlist
            </h2>
            <div className="flex flex-col gap-2 md:w-[60%] mx-auto">
              <label htmlFor="name" className="font-space_grotesk mb-2">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter your name"
                className="bg-[#F9F9F9] p-4 font-space_grotesk outline-none rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2 md:w-[60%] mx-auto my-2">
              <label htmlFor="email" className="font-space_grotesk mb-2">
                Your Work Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter your work email"
                className="bg-[#F9F9F9] p-4 font-space_grotesk outline-none rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2 md:w-[60%] mx-auto my-2">
              <label htmlFor="category" className="font-space_grotesk mb-2">
                Questions category
              </label>

              <select
                name="category"
                id=""
                className="bg-[#F9F9F9] p-4 font-space_grotesk outline-none rounded-lg text-[#878787]"
              >
                <option value="" defaultValue={"General Question"}>
                  General Question
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:w-[60%] mx-auto my-2">
              <label htmlFor="description" className="font-space_grotesk mb-2">
                Brief Description
              </label>
              <textarea
                name="description"
                id=""
                className="bg-[#F9F9F9] px-4 py-6  font-space_grotesk outline-none rounded-lg"
                placeholder="Briefly describe what your focus is..."
              ></textarea>
            </div>

            <div className="md:w-[60%] mx-auto my-4">
              <Button
                type="submit"
                className="bg-primary font-semibold w-full py-5 rounded-full"
              >
                Submit
              </Button>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <Image
                src={"/whatsapp_logo.png"}
                alt="WhatsApp Logo"
                width={400}
                height={400}
                className="w-12 h-12 object-contain"
              />

              <span className="text-green-700 text-lg font-medium">
                Join our WhatsApp Community
              </span>
            </div>

            {/* icons */}
            <div className="flex gap-6 items-center justify-center my-2">
              <button>
                <FaFacebookF size={22} />
              </button>

              <button>
                <FaTwitter size={22} />
              </button>

              <button>
                <FaInstagram size={22} />
              </button>

              <button>
                <FaLinkedinIn size={22} />
              </button>
            </div>

            <div className="flex gap-1 justify-center items-center my-3">
              <MdCopyright />
              <p className="text-lg font-medium">
                 2025 ClickandSwap. All rights reserved.
              </p>
            </div>
          </motion.form>
        </main>
      </div>
    </main>
  );
}

export default WaitlistPage;
