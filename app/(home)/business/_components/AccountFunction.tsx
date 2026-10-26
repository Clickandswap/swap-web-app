import Image from "next/image";
import React from "react";

function AccountFunction() {
  return (
    <main className="md:px-12 px-6 py-16">
      <div className='bg-[url("/business/business_functions_pics.webp")] bg-center bg-cover rounded-2xl h-dvh relative p-6 flex items-center justify-center'>
        <Image
          src={"/business/open_account.webp"}
          alt="Account Types Opening"
          width={300}
          height={300}
          className="w-auto h-auto object-contain"
        />
        <div className="py-2 px-6 rounded-full text-[#D8AA0E] font-medium text-lg bg-light border border-secondary w-fit -rotate-6 absolute left-6 top-6">
          Send
        </div>
        <div className="py-2 px-6 rounded-full text-light font-medium text-lg bg-[#D8AA0E] border border-secondary w-fit -rotate-6 absolute right-15 top-6">
          Receive
        </div>
        <div className="py-2 px-6 rounded-full text-light font-medium text-lg bg-secondary border border-light w-fit -rotate-6 absolute bottom-6 left-15">
          Pay
        </div>
        <div className="py-2 px-6 rounded-full text-light font-medium text-lg bg-secondary border border-light w-fit -rotate-6 absolute bottom-6 right-15">
          Swap
        </div>
      </div>
    </main>
  );
}

export default AccountFunction;
