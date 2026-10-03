"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/common/data/navigation";
import Link from "next/link";
import Button from "../ui/Button";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false); // mobile menu
  const [desktopSub, setDesktopSub] = useState<number | null>(null); // desktop dropdown
  const [mobileSub, setMobileSub] = useState<number | null>(null); // mobile accordion
  const desktopRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setOpenDropdown(false);
    setMobileSub(null);
    setDesktopSub(null);
  };

  // close desktop dropdown on outside click or Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        desktopRef.current &&
        !desktopRef.current.contains(e.target as Node)
      ) {
        setDesktopSub(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDesktopSub(null);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // close dropdowns when the route changes
  useEffect(() => {
    setDesktopSub(null);
  }, [pathname]);

  return (
    <nav className="bg-dark text-light relative z-50 ">
      {/* first navbar section */}
      <section className="flex items-center justify-between px-6 sm:px-28 py-4">
        <div>
          <Link href="/">
            <Image
              src="/logos/ClickAndSwap_word_logo.png"
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
          <div className="flex items-center lg:hidden">
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
      <section className="lg:flex items-center justify-between sm:px-28 px-10 py-4 border-y border-y-primary hidden">
        <div ref={desktopRef} className="flex items-center gap-8">
          {navLinks.map((link) => {
            const hasSub = !!link.sublink?.length;
            const isActive =
              pathname === link.to ||
              (hasSub && link.sublink!.some((s) => pathname === s.to));
            // links with a dropdown only turn primary when one of their pages is active
            const itemClass = `inline-flex items-center gap-1 text-lg transition-all ease-in-out duration-200 ${
              isActive ? "text-primary scale-105" : "text-light"
            } ${hasSub ? "" : "hover:text-primary"} hover:scale-105`;
            if (!hasSub) {
              return (
                <Link key={link.id} href={link.to} className={itemClass}>
                  {link.name}
                </Link>
              );
            }

            const isOpen = desktopSub === link.id;

            return (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => setDesktopSub(link.id)}
                onMouseLeave={() => setDesktopSub(null)}
              >
                <button
                  type="button"
                  className={`${itemClass} cursor-pointer`}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() => setDesktopSub(isOpen ? null : link.id)}
                >
                  {link.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute left-0 top-full pt-4 z-50">
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15 }}
                      role="menu"
                      className="w-72 rounded-xl bg-white p-2 shadow-xl"
                    >
                      {link.sublink!.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.to}
                          role="menuitem"
                          onClick={() => setDesktopSub(null)}
                          className={`block rounded-lg px-4 py-3 transition-colors hover:bg-[#FFF8E6] focus-visible:bg-[#FFF8E6] focus-visible:outline-none ${
                            pathname === sub.to ? "bg-[#FFF8E6]" : ""
                          }`}
                        >
                          <p className="font-semibold text-black">{sub.name}</p>
                          {sub.description && (
                            <p className="mt-0.5 text-xs leading-snug text-gray-500">
                              {sub.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
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
        className={`absolute left-0 w-full lg:hidden overflow-hidden bg-black/80 backdrop-blur ${
          openDropdown ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center py-4">
          {navLinks.map((item) => {
            const hasSub = !!item.sublink?.length;
            const isOpen = mobileSub === item.id;

            return (
              <motion.div
                key={item.id}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 },
                }}
                className="flex flex-col items-center"
              >
                {hasSub ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setMobileSub(isOpen ? null : item.id)}
                      className="flex items-center gap-1 text-white py-2 text-lg"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="mb-2 w-64 rounded-xl bg-white p-2">
                        {item.sublink!.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.to}
                            role="menuitem"
                            onClick={closeMenu}
                            className="block rounded-lg px-3 py-2 active:bg-[#FFF8E6] hover:bg-[#FFF8E6]"
                          >
                            <p className="text-sm font-semibold text-black">
                              {sub.name}
                            </p>
                            {sub.description && (
                              <p className="text-xs text-gray-500">
                                {sub.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.to}
                    className="block text-white py-2 text-lg transition-transform ease-in-out duration-300 hover:-translate-y-1"
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            );
          })}

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
