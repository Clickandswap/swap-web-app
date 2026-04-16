import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

function InternationalCard() {
  return (
    <main className="text-dark bg-[#FEE89D] md:h-187.5 relative overflow-hidden flex flex-col md:flex-row justify-between">
      <div className="md:w-[40%] w-full px-6 md:px-0 md:ps-28 py-16">
        <h2 className="font-space_grotesk md:text-4xl text-3xl font-bold">
          One international <br /> card for all your <br /> global spending
        </h2>
        <p className="my-8 md:text-base text-sm">
          From software subscriptions to ad spend; from global purchase to local
          payments, our physical, virtuals and Prepaid cards covers you on all
          fronts
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <Button className="bg-dark md:w-1/2 text-light flex items-center justify-center gap-1.5 font-space_grotesk">
            {" "}
            <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Download App{" "}
          </Button>
          <Button className="border border-dark text-dark md:w-1/2 font-space_grotesk">
            Use Prepaid
          </Button>
        </div>
      </div>

      <div className="bg-[url(/logos/logo_big.png)] bg-contain md:h-full h-100 md:w-[65%] w-full bg-no-repeat bg-right">
        <Image
          src={"/landing_page/lady_holding_card.png"}
          alt="International card"
          width={1200}
          height={500}
          className="md:w-auto md:h-auto w-full h-full md:object-contain object-cover md:absolute -right-90 top-0"
          loading="lazy"
        />
      </div>
    </main>
  );
}

export default InternationalCard;
