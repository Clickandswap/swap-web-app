import { helpDeskFaqs } from "@/common/data/faqs/helpdesk";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";

function HelpDeskFaqs() {
  return (
    <main className="py-10 md:px-26 px-6 text-dark md:my-18 flex lg:flex-row flex-col gap-6">
      {/* side bar */}
      <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:flex lg:flex-col">
        <p className="text-xs text-[#58646B]">FIND YOUR ANSWER</p>
        <h4 className="font-semibold text-lg mt-3">Browse by topic</h4>

        {/* topics list: scrolls on its own when there are too many */}
        <div className="mt-4 lg:min-h-0 lg:overflow-y-auto lg:pr-2">
          {helpDeskFaqs.map((item) => {
            return (
              <Link
                href={`#help-topic-${item.id}`}
                key={item.id}
                className="my-2 flex gap-2 py-2 px-4 items-center font-space_grotesk"
              >
                <span>{item.title}</span>
                <FaArrowDown className="text-sm" />
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

      <div className="w-full lg:w-[70%]">
        <div>
          <p className="text-xs text-[#58646B]">
            Click and Swap / <span className="font-bold">Help Desk</span>
          </p>
          <h3 className="font-bold md:text-3xl text-xl mt-4">Help Desk</h3>
          <p className="text-base text-[#58646B] mt-3">
            Answers for account, payment and security issues
          </p>
          <input
            type="search"
            name="search-faqs"
            id=""
            className="w-full px-4 py-2 rounded-md text-sm border border-[#E5E7EB] focus:outline-none mt-4"
            placeholder="Search questions or topics"
          />
        </div>
        <div className="flex justify-between mt-5">
          <p className="text-sm text-[#58646B] mt-3">
            {" "}
            {helpDeskFaqs.length} topics{" "}
          </p>

          <p className="text-sm text-[#58646B] mt-3">All answers shown below</p>
        </div>

        {/* the questions and answers */}
        <div className="mt-6">
          {helpDeskFaqs.map((item) => {
            return (
              <div
                className="my-6 scroll-mt-6"
                id={`help-topic-${item.id}`}
                key={item.id}
              >
                {/* title and number of questions */}
                <div className="flex justify-between items-center py-4 border-b">
                  <div className="flex gap-4 items-end font-space_grotesk">
                    <p className="text-xs font-bold">
                      {item.id < 10 && "0"}
                      {item.id}
                    </p>

                    <h3 className="font-semibold text-xl">{item.title}</h3>
                  </div>

                  <p className="text-xs text-[#58646B]">
                    {item.faqs.length} questions
                  </p>
                </div>

                {/* questions and answers */}
                <div className="mt-8">
                  {item.faqs.map((subitem) => {
                    return (
                      <div
                        key={subitem.id}
                        className="my-4 py-4 border-b border-b-gray-300"
                      >
                        <h4 className="font-semibold text-lg font-space_grotesk">
                          {subitem.question}
                        </h4>
                        <p className="mt-6 text-sm text-[#58646B] leading-6">
                          {subitem.answer}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default HelpDeskFaqs;
