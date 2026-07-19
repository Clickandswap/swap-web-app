import { findAnswers } from "@/common/data/findAnswers";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function FindAnswers() {
  return (
    <main className="py-10 md:px-26 px-6 text-dark md:my-18">
      <p>BROWSE BY TOPIC</p>
      <h4 className="my-4 font-bold md:text-3xl text-xl font-space_grotesk">
        Find answers fast
      </h4>

      <div className="grid grid-cols-3 gap-3">
        {findAnswers.map((item) => (
          <div
            key={item.id}
            className="py-8 px-6 rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] hover:bg-linear-to-r from-[#EFF6FF] to-[#FFFEF9] hover:border-[#FFEEB0] hover:shadow-lg transition-all duration-150 ease-in-out"
          >
            <div className="flex justify-between">
              <IoCheckmarkCircleOutline className="h-6 w-6" />
              <GoArrowUpRight />
            </div>

            <h4 className="mt-8 mb-4 font-semibold text-lg font-space_grotesk">
              {item.title}
            </h4>
            <p className="text-sm">{item.details}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default FindAnswers;
