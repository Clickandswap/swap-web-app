import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function ApiUsage() {
  return (
    <main className="bg-[#FFFBEF] py-10 md:px-16 px-6 text-dark md:my-20">
      {/* first section */}
      <div className="flex gap-6 h-70">
        <div className="bg-light p-6 rounded-xl w-[45%] flex flex-col justify-between">
          <div className="">
            <h4 className="text-2xl font-semibold font-space_grotesk">
              Account & Payouts
            </h4>
            <p className="text-sm my-2 md:w-1/2">
              Create accounts, collect funds, send payouts across supported
              corridors.
            </p>
          </div>

          <Link href={"#"} className="flex gap-6 items-center">
            <p className="text-[#517184] font-semibold text-xl">Read More </p>
            <FaArrowRightLong size={25} className="text-dark" />
          </Link>
        </div>

        <div className="bg-light p-6 rounded-xl relative w-[55%] flex flex-col justify-between">
          <div className="">
            <h4 className="text-2xl font-semibold font-space_grotesk">
              Card Issuing SDK
            </h4>
            <p className="text-sm my-2 md:w-1/2">
              Issue virtual and physical cards programmatically. 
            </p>
          </div>

          <Link href={"#"} className="flex gap-6 items-center">
            <p className="text-[#517184] font-semibold text-xl">Read More </p>
            <FaArrowRightLong size={25} className="text-dark" />
          </Link>

          <Image
            width={400}
            height={400}
            src={"/developer_page/card_issueing_sdk.png"}
            alt="Card Issuing Image"
            className="absolute right-0 bottom-0 object-contain"
          />
        </div>
      </div>

      {/* second section */}
      <div className="flex gap-6 h-70 my-4">
        <div className="bg-light p-6 rounded-xl relative w-[60%] flex flex-col justify-between">
          <div className="">
            <h4 className="text-2xl font-semibold font-space_grotesk">
              Transaction and Settlement API
            </h4>
            <p className="text-sm my-2 md:w-1/2">
              Fetch all payments made to your third-party merchants and Access
              detailed breakdown of settlements paid to your third party
              merchants.
            </p>
          </div>

          <Link href={"#"} className="flex gap-6 items-center">
            <p className="text-[#517184] font-semibold text-xl">Read More </p>
            <FaArrowRightLong size={25} className="text-dark" />
          </Link>

          <Image
            width={400}
            height={400}
            src={"/developer_page/api_settlement.png"}
            alt="Card Issuing Image"
            className="absolute right-0 bottom-0 object-contain"
          />
        </div>

        <div className="bg-light p-6 rounded-xl w-[40%] flex flex-col justify-between">
          <div className="">
            <h4 className="text-2xl font-semibold font-space_grotesk">
              Payment Checkout
            </h4>
            <p className="text-sm my-2 md:w-1/2">
              Give customers confidence in your business with a modern, gorgeous
              checkout form that elevates your brand
            </p>
          </div>

          <Link href={"#"} className="flex gap-6 items-center">
            <p className="text-[#517184] font-semibold text-xl">Read More </p>
            <FaArrowRightLong size={25} className="text-dark" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ApiUsage;
