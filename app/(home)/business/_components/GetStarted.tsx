import Image from "next/image";
import React from "react";

function GetStarted() {
  return (
    <main className="px-6 py-10 md:px-12 md:py-16 xl:px-28">
      <h4 className="text-xl md:text-2xl font-space_grotesk font-semibold">
        Get started in few minute
      </h4>

      {/* main content: stacked on phones, side by side from md up */}
      <div className="my-5 flex flex-col md:h-120 md:flex-row">
        {/* first */}
        <div className="w-full md:w-[30%]">
          <div className="border-t border-t-[#D4D4D4] py-6">
            <h4 className="font-medium text-lg font-space_grotesk">
              Create your Click and Swap account
            </h4>
            <p className="text-sm mt-4">
              Sign up with your email address and fill out basic details about
              your business
            </p>
          </div>
          <div className="border-y border-y-[#D4D4D4] py-6">
            <h4 className="font-medium text-lg font-space_grotesk">
              Verify your email address
            </h4>
          </div>
          <div className="border-b border-b-[#D4D4D4] py-6">
            <h4 className="font-medium text-lg font-space_grotesk">
              Set up your Business Account
            </h4>
          </div>
        </div>

        {/* second */}
        <div className="bg-[#FFFAE9] w-full p-4 md:w-[70%] md:p-6 flex justify-center items-center">
          <Image
            src={"/business/verify_otp_template.webp"}
            width={500}
            height={500}
            alt="Verify Otp Template"
            className="h-auto max-h-full w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </main>
  );
}

export default GetStarted;