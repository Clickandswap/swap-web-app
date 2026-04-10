"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/common/data/navigation";
import Link from "next/link";
import Button from "../ui/Button";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-dark">
      {/* first navbar section */}
      <section className="flex items-center justify-between px-10 sm:px-28 py-4">
        <div className="relative w-18 h-4 sm:w-24 sm:h-4 md:w-36 md:h-8">
          <Image
            src="/logos/clicknswap_word_logo.png"
            alt="ClickNSwap Logo"
            fill
            sizes="(max-width: 640px) 10rem, (max-width: 1024px) 12rem, 14rem"
            className="object-contain"
            loading="eager"
          />
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
            // style={{ accentColor: "#748D9D" }}
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
        </div>
      </section>

      {/* second navbar section */}
      <section className="flex items-center justify-between sm:px-28 px-10 py-4 border-y border-y-primary">
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
          <Button className="rounded-full border border-primary px-6 w-1/2 text-primary">Login</Button>
          <Button className="text-dark bg-primary rounded-full border-none px-6 w-1/2">Get Started</Button>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
