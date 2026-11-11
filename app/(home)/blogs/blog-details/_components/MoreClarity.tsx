import { blogDatas } from "@/common/data/blogs-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function MoreClarity() {
  return (
    <main className="py-8 px-6 md:px-12 xl:px-26 md:py-10 md:my-18">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <h2 className="md:text-3xl text-xl font-space_grotesk font-bold leading-tight">
          More Clarity for your money
        </h2>

        <Link
          href={"/blogs"}
          className="flex shrink-0 items-center gap-1 text-sm md:text-base"
        >
          <span>View all topics</span> <FiArrowUpRight />
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 xl:gap-6">
        {blogDatas.slice(0, 3).map((item, index) => {
          return (
            <div
              key={`${item.id}-${index}`}
              className="flex h-full flex-col gap-4"
            >
              <Image
                src={item.img}
                width={300}
                height={300}
                alt={item.title}
                className="h-auto w-full rounded-lg object-contain"
              />
              {/* contents */}
              <div className="py-3">
                <h6 className="text-[#58646B] font-semibold text-sm">
                  {item.type === "digital-assets" && "DIGITAL ASSETS"}
                  {item.type === "security" && "SECURITY"}
                  {item.type === "transfer-guides" && "TRANSFER GUIDES"}
                </h6>

                <h4 className="mt-1 text-xl font-semibold font-space_grotesk md:text-lg lg:text-xl xl:text-2xl">
                  {item.title}
                </h4>
              </div>

              {/* mt-auto keeps this line at the bottom so cards in a row line up */}
              <div className="mt-auto flex flex-wrap items-center gap-2 text-[#4B5563] text-sm">
                <p>{item.duration} min read</p> .
                <Link href={"#"} className="flex items-center gap-1">
                  <span>Read article</span> <FiArrowUpRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default MoreClarity;