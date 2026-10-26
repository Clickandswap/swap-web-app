import { termsDatas } from "@/common/data/terms-and-condition";
import Link from "next/link";
import React from "react";
import { GoArrowUp, GoArrowUpRight } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

function TermsAndConditionsComponent() {
  return (
    <main className="py-8 px-6 md:px-12 xl:px-26 md:py-10 md:my-18 text-dark flex lg:flex-row flex-col gap-6">
      {/* side bar */}
      <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:flex lg:flex-col">
        <p className="text-xs text-[#58646B]">ON THIS PAGE</p>
        <h4 className="font-semibold text-lg mt-3">Contents</h4>

        {/* topics list: scrolls on its own when there are too many */}
        <div className="mt-4 lg:min-h-0 lg:overflow-y-auto lg:pr-2">
          {termsDatas.map((item) => {
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
          <h4 className="text-xl md:text-2xl font-semibold font-space_grotesk">
            Using Click and Swap
          </h4>
          <p className="my-4 text-[#4B5563] text-sm leading-6">
            These numbered sections bring account, payment, security, and
            support information into one readable document. Service-specific
            details should be checked in the app and in the final approved
            policies.
          </p>

          <p className="text-xs text-[#6B7280]">
            {termsDatas.length} sections . Sample version . Effective date to be
            confirmed
          </p>
        </div>

        <div className="mt-6">
          {termsDatas.map((item) => {
            return (
              <div
                className="my-6 scroll-mt-6"
                id={`topic-${item.id}`}
                key={item.id}
              >
                {/* title and number of terms */}
                <div className="flex justify-between items-center py-4 border-b border-b-primary">
                  <div className="flex gap-4 items-end font-space_grotesk">
                    <p className="text-xs font-bold shrink-0">
                      {item.id < 10 && "0"}
                      {item.id}
                    </p>

                    <h3 className="font-semibold text-lg md:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="my-4 py-4">
                  <p className="mt-6 text-sm text-[#58646B] leading-6">
                    {item.description}
                  </p>
                  <p className="mt-6 text-sm text-[#58646B] leading-6">
                    {item?.descriptionTwo}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* email support: stacked on phones, side by side from sm up */}
        <div className="bg-[#FAFAFA] rounded-lg p-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h4 className="text-lg md:text-xl font-semibold font-space_grotesk">
              Need some clarity?
            </h4>
            <p className="mt-4 text-sm md:text-base wrap-break-word font-space_grotesk">
              Help: Support@clickandswap.com
            </p>
          </div>

          <Link
            href={"mailto:support@clickandswap.com"}
            className="w-full rounded-md bg-primary px-6 py-3 text-center text-dark sm:w-auto sm:shrink-0"
          >
            Email Support
          </Link>
        </div>

        <div className="mt-5 flex flex-wrap justify-between gap-4">
          <Link
            href={"#"}
            className="font-space_grotesk flex gap-1 items-center"
          >
            <span>Privacy Policy</span> <MdOutlineArrowOutward />
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

export default TermsAndConditionsComponent;
