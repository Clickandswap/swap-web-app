"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/common/data/navigation";
import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);

  const closeMenu = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setOpenDropdown(false);
  };

  return (
    <nav className="bg-dark text-light relative z-50 ">
      {/* first navbar section */}
      <section className="flex items-center justify-between px-6 sm:px-28 py-4">
        <div>
          <Link href="/">
            <Image
              src="/logos/clicknswap_word_logo.png"
              alt="ClickNSwap Logo"
              className="object-contain w-auto h-auto"
              loading="eager"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="flex items-center">
          <Image src="/globe.svg" alt="language icon" width={15} height={15} />
          <select
            name="select_language"
            id="select_language"
            className="px-2 py-2 cursor-pointer"
          >
            <option
              value="en"
              style={{ backgroundColor: "#000000", color: "#ffffff" }}
            >
              EN
            </option>
            <option
              value="fr"
              style={{ backgroundColor: "#000000", color: "#ffffff" }}
            >
              FR
            </option>
          </select>


          {/* mobile menu icon */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              aria-expanded={openDropdown}
              aria-controls="mobile-menu"
              className="cursor-pointer inline-flex flex-col items-center justify-center p-2"
            >
              <span className="sr-only">Toggle menu</span>
              <div
                className={`w-4 h-px bg-white transition-transform duration-300 origin-center ${openDropdown ? "rotate-45" : ""}`}
              />
              <div
                className={`w-4 h-px bg-white transition-opacity duration-200 ${openDropdown ? "opacity-0" : "opacity-100 my-1"}`}
              />
              <div
                className={`w-4 h-px bg-white transition-transform duration-300 origin-center ${openDropdown ? "-rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* desktop nav */}
      <section className="md:flex items-center justify-between sm:px-28 px-10 py-4 border-y border-y-primary hidden">
        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.id}
                href={link.to}
                className={`inline-block text-lg transition-all ease-in-out duration-200 ${
                  isActive ? "text-primary scale-105" : "text-light"
                } hover:scale-105 hover:text-primary`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="md:w-1/4 flex items-center gap-2 justify-end">
          <Button className="rounded-full border border-primary px-6 w-1/2 text-primary">
            Login
          </Button>
          <Button className="text-dark bg-primary rounded-full border-none px-6 w-1/2">
            Get Started
          </Button>
        </div>
      </section>

      {/* mobile nav */}
      <motion.div
        id="mobile-menu"
        role="menu"
        initial="closed"
        animate={openDropdown ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.08,
              duration: 0.4,
            },
          },
          closed: {
            height: 0,
            opacity: 0,
            transition: { when: "afterChildren", duration: 0.35 },
          },
        }}
        className={`absolute left-0 w-full md:hidden overflow-hidden bg-black/80 backdrop-blur ${
          openDropdown ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center py-4">
          {navLinks.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -10 },
              }}
            >
              <Link
                href={item.to}
                className={`block text-white py-2 text-lg transition-transform ease-in-out duration-300 hover:-translate-y-1`}
                role="menuitem"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          <motion.div
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: -10 },
            }}
          >
            <Button
              className="rounded-full border border-primary px-6 w-full text-primary mb-4"
              onClick={closeMenu}
            >
              Login
            </Button>
            <Button
              className="text-dark bg-primary rounded-full border-none px-6 w-full"
              onClick={closeMenu}
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
