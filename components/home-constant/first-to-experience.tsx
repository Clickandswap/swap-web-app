"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { motion } from "framer-motion";

function FirstToExperience() {
  return (
    // <main className="bg-light md:h-72 pt-14 md:pt-0 h-max flex md:flex-row flex-col justify-between items-center overflow-hidden">
    //   <div className="md:w-[40%] w-full md:ps-28 ps-6 pe-6 md:pe-0">
    //     <h4 className="text-dark text-space_grotesk font-semibold md:text-3xl text-xl">
    //       Be First to Experience the Future of Crypto
    //     </h4>

    //     <div className="w-full flex flex-col lg:flex-row gap-6 my-6">
    //       <Button className="bg-primary lg:w-1/2 text-dark flex items-center justify-center gap-1.5">
    //         {" "}
    //         <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Download App{" "}
    //       </Button>
    //       <Button className="border border-dark text-dark lg:w-1/2">
    //         Get Started
    //       </Button>
    //     </div>
    //   </div>

    //   <div className="bg-[url(/first_to_experience/bitcoin_bg.png)] bg-cover bg-center md:w-[55%] w-full h-full flex justify-center">
    //     <Image
    //       src={"/first_to_experience/bitcoin.png"}
    //       alt="Bitcoins Image"
    //       width={300}
    //       height={200}
    //       className="md:w-auto md:h-auto w-46 h-46 object-contain"
    //     />
    //   </div>
    // </main>

    <motion.main
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="bg-light md:px-30 px-6 py-18 text-center text-dark"
    >
      <div className="bg-[#EEF9FF] px-10 py-16  rounded-xl">
        <h2 className="md:text-5xl text-2xl font-semibold font-space_grotesk">
          Be among the first
        </h2>

        <p className="text-foundation_blue my-6 text-center">
          Join the early-access list and move money <br /> beyond borders.
        </p>
        <Button
          className="inline-flex rounded-full p-px my-4"
          style={{
            background: "linear-gradient(135deg, #FFD964, #99823C)",
          }}
        >
          <div className="rounded-full bg-light px-8 py-2 text-sm text-dark">
            Join the Waitlist
          </div>
        </Button>
      </div>
    </motion.main>
  );
}

export default FirstToExperience;
