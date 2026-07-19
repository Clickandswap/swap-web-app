import { teamMembers } from "@/common/data/team";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

function Team() {
  return (
    <main className="bg-[#FFFAE9] py-14 md:px-18 px-6">
      <h2 className="text-[#0F2723] md:text-5xl text-2xl font-semibold">
        The Team building it
      </h2>

      <div className="my-8 flex gap-3">
        {/* apply */}
        <div className="bg-light p-4 w-[30%] flex items-center">
          <div className="">
            <div className="flex items-center gap-2">
              <div className="bg-[#517184] h-0.5 w-10" />
              <h4 className="text-[#517184] font-medium text-sm">
                BUILD YOUR CAREER
              </h4>
            </div>

            <h3 className="text-[#0D1412] md:text-3xl text-xl font-semibold my-4 leading-10 font-space_grotesk">
              Want to join our team for better Future?
            </h3>
            <p className="text-[#0D1412] text-sm my-5">
              Open roles and room for people we haven't imagined yet.
            </p>

            <Button className="border border-[#959595] text-[#0D1412] rounded-sm px-8">
              APPLY NOW
            </Button>
          </div>
        </div>

        
        {/* team members */}
        <div className="flex gap-4 w-full">
          {teamMembers.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-120 flex items-end overflow-hidden"
            >
              {/* Next.js Optimized Image handling fill & fit */}
              <Image
                src={item.img}
                alt={item.name}
                fill
                sizes="(max-w-7xl) 33vw, 100vw"
                priority={item.id <= 3} // Gives priority loading to the visible team members
                className="object-cover object-top transition-transform duration-300 hover:scale-105"
              />

              {/* Text overlay box positioned cleanly over the image */}
              <div className="relative z-10 bg-[#FFEEB0] w-[90%] text-neutral-900 py-4 px-4 shadow-lg">
                <h4 className="font-semibold text-lg leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-700 mt-0.5">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Team;
