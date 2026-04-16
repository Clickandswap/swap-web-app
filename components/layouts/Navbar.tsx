"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/common/data/navigation";
import Link from "next/link";
import Button from "../ui/Button";
import { BiMenu } from "react-icons/bi";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-dark">
      {/* first navbar section */}
      <section className="flex items-center justify-between px-6 sm:px-28 py-4">
        <div className="relative w-18 h-4 sm:w-24 sm:h-4 md:w-36 md:h-8">
          <Link href="/">
            {" "}
            <Image
              src="/logos/clicknswap_word_logo.png"
              alt="ClickNSwap Logo"
              className="object-contain w-auto h-auto"
              loading="eager"
              width={100}
              height={100}
            />{" "}
          </Link>
        </div>

        <div className="flex items-center">
          <Image
            src={"/globe.svg"}
            alt="language icon"
            width={15}
            height={15}
            className=""
          />
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

          <div className="sm:hidden block">
            <BiMenu size={24} />
          </div>
        </div>
      </section>

      {/* second navbar section */}
      <section className="sm:flex items-center justify-between sm:px-28 px-10 py-4 border-y border-y-primary hidden">
        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;

            return (
              <Link
                key={link.id}
                href={link.to}
                className={`inline-block text-lg transition-all ease-in-out duration-200 ${isActive ? "text-primary scale-105" : "text-light"} hover:scale-105 hover:text-primary`}
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
    </nav>
  );
}

export default Navbar;
