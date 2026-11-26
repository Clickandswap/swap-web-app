import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

function WorkWithUs() {
  return (
    <main className="bg-light md:px-30 px-6 py-18 text-center text-dark">
      <div className="bg-[#EEF9FF] px-10 py-16  rounded-xl">
        <h2 className="md:text-5xl text-2xl font-semibold font-space_grotesk">
          Work with us
        </h2>

        <p className="text-foundation_blue my-6 text-center">
          Partnerships, press, or careers — we’d love to <br /> hear from you.
        </p>
        <Link
          href="/career"
          className="rounded-full py-3 px-6 my-4 bg-primary text-dark font-medium"
        >
          Get in touch
        </Link>
      </div>
    </main>
  );
}

export default WorkWithUs;
