import Image from "next/image";

function GettingStarted() {
  return (
    <main className="bg-[#E4EDD9] sm:ps-28 ps-6 text-[#222F37] flex justify-between">
      <div className="w-[30%] py-14 self-center">
        <h3 className="text-space_grotesk font-bold md:text-4xl text-lg">
          Getting Started In Just Few Seconds
        </h3>
        <p className="text-base mt-6 mb-10">
          We simplify the process—we’ll take care of the crypto-to-fiats. Your
          funds go exactly where you want - your bank.
        </p>

        <div className="flex justify-between gap-4">
          <Image
            src={"/getting-started/download_app.png"}
            alt="PlayStore and AppStore Download Image"
            width={100}
            height={100}
            className="h-auto w-full bject-cover"
          />

          <Image
            src={"/getting-started/download_qr_code.png"}
            alt="PlayStore and AppStore Download Image"
            width={100}
            height={100}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      <div className="w-full">
        <Image
          src={"/getting-started/holding_phone.png"}
          alt="ClickNSwap Dashboard"
          width={500}
          height={300}
          className="object-contain w-full h-auto"
          loading="eager"
        />
      </div>
    </main>
  );
}

export default GettingStarted;
