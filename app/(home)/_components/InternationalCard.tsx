import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

function InternationalCard() {
  return (
    <main className="text-dark bg-[#FEE89D] h-187.5 relative overflow-hidden flex justify-between">
      <div className="w-[40%] sm:ps-28 py-16">
        <h2 className="font-space_grotesk text-4xl font-bold">
          One international <br /> card for all your <br /> global spending
        </h2>
        <p className="my-8">
          From software subscriptions to ad spend; from global purchase to local
          payments, our physical, virtuals and Prepaid cards covers you on all
          fronts
        </p>

        <div className="flex justify-between gap-4">
          <Button className="bg-dark w-1/2 text-light flex items-center justify-center gap-1.5 font-space_grotesk">
            {" "}
            <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Download App{" "}
          </Button>
          <Button className="border border-dark text-dark w-1/2 font-space_grotesk">
            Use Prepaid
          </Button>
        </div>
      </div>

      <div className="bg-[url(/logos/logo_big.png)] bg-contain h-full w-[65%] bg-no-repeat bg-right"></div>

      <Image
        src={"/landing_page/lady_holding_card.png"}
        alt="International card"
        width={1200}
        height={500}
        className="w-auto h-auto object-contain absolute -right-90 top-0"
        loading="lazy"
      />
    </main>
  );
}

export default InternationalCard;
