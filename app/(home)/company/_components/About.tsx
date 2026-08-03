"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  return (
    <main className="bg-dark text-light sm:px-28 px-6 py-16 flex flex-col md:flex-row gap-12 justify-center items-center min-h-dvh">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
        className="px-6 pt-1 bg-[#202020] h-dvh md:w-[35%]"
      >
        <Image
          src={"/company_page/about_us_img.png"}
          alt="Company's Personels"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
      className="md:w-[35%] w-full">
        <h3 className="font-bold text-4xl ">About Us</h3>
        <p className="my-6 text-base">
          We are building a financial system that works for everyone,
          everywhere. In a world where money should move as freely as
          information, we believe access to fast, secure, and borderless finance
          should not be a privilege, but a standard.
        </p>

        <p className="sm:text-base text-sm">
          Our platform was created to remove the complexity and limitations of
          traditional financial systems, replacing them with a simpler, more
          transparent way to manage and move money. By combining the power of
          cryptocurrency with an intuitive user experience, we are making it
          easier for individuals and businesses to participate in a truly global
          economy.
        </p>
      </motion.div>
    </main>
  );
}

export default About;
