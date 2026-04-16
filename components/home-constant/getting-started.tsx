import Image from "next/image";

function GettingStarted() {
  return (
    <main className="bg-[#E4EDD9] text-[#222F37] flex md:flex-row flex-col justify-between pt-8">
      <div className="md:w-[50%] w-full md:ps-28 ps-6 pe-6 md:pe-0 py-14 self-center">
        <h3 className="text-space_grotesk font-bold md:text-4xl text-2xl">
          Getting Started In Just Few Steps
        </h3>
        <p className="text-base mt-6 mb-10">
          We simplify the process—we’ll take care of the crypto-to-fiats. Your
          funds go exactly where you want - your bank.
        </p>

        <div className="flex justify-between gap-4 w-fit">
          <Image
            src={"/getting-started/download_app.png"}
            alt="PlayStore and AppStore Download Image"
            width={250}
            height={200}
            className="h-auto w-1/2 object-contain"
          />

          <Image
            src={"/getting-started/download_qr_code.png"}
            alt="PlayStore and AppStore Download Image"
            width={250}
            height={200}
            className="h-auto w-1/2 object-contain"
          />
        </div>
      </div>

      <div className="w-full h-100 sm:h-auto">
        <Image
          src={"/getting-started/holding_phone.png"}
          alt="ClickNSwap Dashboard"
          width={500}
          height={300}
          className="md::object-contain object-cover w-full h-full"
          loading="eager"
        />
      </div>
    </main>
  );
}

export default GettingStarted;
