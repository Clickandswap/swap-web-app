import { blogDetails } from "@/common/data/blogs-data";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { GoArrowUp, GoArrowUpRight } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";

function BlogDetailsComponent() {
  return (
    <main className="py-8 px-6 md:px-12 xl:px-26 md:py-10 md:my-18 text-dark flex lg:flex-row flex-col gap-6">
      {/* side bar */}
      <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:flex lg:flex-col">
        <p className="text-xs text-[#58646B]">IN THIS ARTICLE</p>

        {/* topics list: scrolls on its own when there are too many */}
        <div className="mt-4 lg:min-h-0 lg:overflow-y-auto lg:pr-2">
          {blogDetails.map((item) => {
            return (
              <Link
                href={`#topic-${item.id}`}
                key={item.id}
                className="my-2 flex gap-2 py-2 px-4 items-center font-space_grotesk"
              >
                <p className="text-xs font-bold shrink-0">
                  {item.id < 10 && "0"}
                  {item.id}
                </p>
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>

        <div className="bg-[#FAFAFA] p-3 rounded-lg mt-6 shrink-0">
          <IoChatbubbleOutline />
          <h4 className="mt-3 font-semibold">Need a hand?</h4>
          <p className="text-xs text-[#58646B] mt-3">
            For questions about your account, our support team can help.
          </p>
          <Link
            href={"/faqs"}
            className="underline flex items-center text-sm font-bold mt-4"
          >
            <span>Visit the Help Center</span>{" "}
            <span>
              <GoArrowUpRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="w-full min-w-0 lg:w-[70%]">
        {/* intro */}
        <div>
          <p className="text-base leading-7 md:text-lg md:leading-8">
            A safer transfer begins before you tap send. Taking a little time to
            review the details helps you spot mistakes, recognise unusual
            requests, and know what to do if a payment needs attention.
          </p>
          <p className="my-4 text-[#4B5563] text-sm leading-6">
            Sending money should feel straightforward. This guide brings
            together practical checks for transfers and digital-asset deposits,
            plus the information to keep handy if you need support.
          </p>
        </div>

        <div className="mt-6">
          {blogDetails.map((item) => {
            return (
              <div
                className="my-6 scroll-mt-6"
                id={`topic-${item.id}`}
                key={item.id}
              >
                {/* title and number of terms */}
                <div className="flex justify-between items-center py-4">
                  <div className="flex gap-4 items-end font-space_grotesk">
                    {/* <p className="text-xs font-bold shrink-0">
                      {item.id < 10 && "0"}
                      {item.id}
                    </p> */}

                    <h3 className="font-semibold text-lg md:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="my-4 py-4">
                  <p className="text-sm text-[#58646B] leading-6">
                    {item.description}
                  </p>
                  <p className="mt-6 text-sm text-[#58646B] leading-6">
                    {item?.descriptionTwo}
                  </p>
                  <p className="mt-6 text-sm text-[#58646B] leading-6">
                    {item?.descriptionThree}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* email support: stacked on phones, side by side from sm up */}
        <div className="bg-[#FAFAFA] rounded-lg p-5 flex flex-col gap-6">
          <h4 className="text-lg md:text-xl font-semibold font-space_grotesk">
            A little care. A lot more confidence
          </h4>
          <p className="text-sm md:text-base wrap-break-word font-space_grotesk">
            Make these checks part of your routine, not just something you do
            for a large payment. When you need a hand, the Help Center has
            answers on account verification, transfers, refunds, and security.
          </p>

          <Link
            href={"/help"}
            className="rounded-md bg-primary px-6 py-3 text-center text-dark w-fit inline-block"
          >
            Visit Help Center
          </Link>
        </div>

        <p className="text-[#6B7280] text-sm my-8">
          This article is general educational information, not financial advice.
          Check the current information in your account for your specific
          transaction.
        </p>

        <div className="mt-5 flex flex-wrap justify-between gap-4 border-t py-10 border-t-gray-300">
          <Link
            href={"/blogs"}
            className="font-space_grotesk flex gap-1 items-center"
          >
            <FaArrowLeft /> <span>Back to the blog</span>
          </Link>
          <Link
            href={"#"}
            className="font-space_grotesk flex gap-1 items-center"
          >
            <span>Back to top</span> <GoArrowUp />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default BlogDetailsComponent;
