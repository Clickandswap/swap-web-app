import { blogDatas, categories } from "@/common/data/blogs-data";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function LatestArticles() {
  return (
    <main className="px-6 py-8 md:px-12 md:py-20 xl:px-32">
      <h4 className="md:text-3xl text-xl font-bold font-space_grotesk">
        Latest articles
      </h4>

      {/* intro + filter links */}
      <div className="my-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm text-[#58646B] leading-6">
          Browse the latest stories on transfers, digital{" "}
          <br className="hidden lg:block" />
          assets, security, and practical money moves.
        </p>

        {/* scrolls sideways on small screens instead of wrapping or overflowing */}
        <div className="flex gap-3 overflow-x-auto whitespace-nowrap pb-1">
          <Link
            href={"#"}
            className="font-bold py-0.5 border-b-2 border-b-primary"
          >
            All articles
          </Link>

          <Link
            href={"#"}
            className="text-[#6B7280] hover:text-dark py-0.5 px-2 transition-all ease-in-out duration-100 border-b-primary hover:border-b-2"
          >
            Transfer guides
          </Link>

          <Link
            href={"#"}
            className="text-[#6B7280] hover:text-dark py-0.5 px-2 transition-all ease-in-out duration-100 border-b-primary hover:border-b-2"
          >
            Security
          </Link>

          <Link
            href={"#"}
            className="text-[#6B7280] hover:text-dark py-0.5 px-2 transition-all ease-in-out duration-100 border-b-primary hover:border-b-2"
          >
            Digital assets
          </Link>
        </div>
      </div>

      {/* blogs lists */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {[...blogDatas, ...blogDatas].map((item, index) => {
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

                <h4 className="text-xl font-semibold font-space_grotesk xl:text-2xl">
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

      {/* browse by topic */}
      <div className="my-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h4 className="font-space_grotesk font-semibold text-xl md:text-2xl">
              Browse by topic
            </h4>
            <p className="mt-4 text-sm text-[#58646B] font-semibold">
              Explore the topics readers come back to meet
            </p>
          </div>

          <Link href={"#"} className="flex items-center gap-1">
            <span>View all topics</span> <FiArrowUpRight />
          </Link>
        </div>

        {/* 1 column on phones, 3 across from md up */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#FAFAFA] rounded-lg flex flex-col p-4 gap-4"
              >
                <div className="bg-light border-2 border-[#E5E7EB] rounded-lg w-fit p-2.5">
                  <Icon />
                </div>

                <h4 className="font-space_grotesk font-semibold text-xl md:text-2xl">
                  {item.title}
                </h4>
                <p className="text-sm text-[#58646B]">{item.description}</p>
                <p className="text-sm font-medium mt-auto">
                  {item.no_of_articles} articles
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* search the blog + subscribe: stacked on phones, side by side from md up */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-3">
        <div className="p-4 rounded-lg flex flex-col gap-4 bg-[#FAFAFA] w-full md:w-[60%]">
          <h4 className="font-space_grotesk font-semibold text-xl md:text-2xl">
            Search the blog
          </h4>

          <div className="flex flex-col gap-2">
            <label htmlFor="search" className="font-medium text-xs">
              Search articles
            </label>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Try “transfer guides”, “security”, or “digital assets”"
              className="w-full py-2 px-4 bg-light border-2 border-[#E5E7EB] rounded-lg outline-0"
            />
          </div>

          <p className="text-[#6B7280] md:mt-8">
            Search by topic, keyword, or article title.
          </p>
        </div>

        <div className="p-4 py-6 rounded-lg flex flex-col gap-4 bg-dark w-full md:w-[40%]">
          <h4 className="font-space_grotesk font-semibold text-xl md:text-2xl text-light">
            Subscribe to updates
          </h4>
          <p className="text-light text-xs">
            Get new guides, security tips, and product stories delivered to your
            inbox.
          </p>

          <div className="flex flex-col gap-6">
            <input
              type="email"
              name="email"
              id="email"
              aria-label="Email address"
              placeholder="Enter your email"
              className="w-full py-2 px-4 bg-light border-2 border-[#E5E7EB] rounded-lg outline-0"
            />

            <Button className="bg-primary w-full rounded-xl md:w-fit md:px-20">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LatestArticles;