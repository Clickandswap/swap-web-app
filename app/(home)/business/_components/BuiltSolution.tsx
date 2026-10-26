import { solutions } from "@/common/data/business";
import React from "react";

function BuiltSolution() {
  return (
    <main className="px-6 py-10 md:px-12 md:py-16 xl:px-28">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <h2 className="font-medium text-xl md:text-2xl font-space_grotesk w-full md:w-[40%]">
          Solutions Built Specifically To Help Your Business Succeed
        </h2>

        <p className="w-full text-sm md:w-[40%] md:text-base">
          Working with click and swap means gaining a real partner. We do not
          believe in a “one-size fits all” approach, because every business and
          business owner is different.
        </p>
      </div>

      {/* 1 column on phones, 2 on small tablets, 3 across on larger screens */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item) => {
          const Icon = item.icon;
          return (
            <div
              className="bg-[#F9F9F9] py-6 px-4 flex flex-col gap-4 rounded-lg"
              key={item.id}
            >
              <div className="bg-primary w-fit p-1.5 rounded-full flex items-center justify-center">
                <Icon className="text-light" size={30} />
              </div>

              <div className="mt-6 md:mt-10">
                <h2 className="font-medium font-space_grotesk text-lg">
                  {item.title}
                </h2>
                <p className="text-sm mt-4">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default BuiltSolution;