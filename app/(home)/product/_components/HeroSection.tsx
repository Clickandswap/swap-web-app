import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

function HeroSection() {
  return (
    <main className="bg-linear-to-r from-light to-gradient-light-primary flex md:flex-row flex-col md:h-dvh h-205 overflow-hidden relative items-center">
      <div className="md:w-[50%] w-full md:px-28 px-6 py-12 text-dark">
        <h2 className="font-bold sm:text-5xl text-2xl font-space_grotesk">
          Experience crypto, effortlessly with ClickNSwap
        </h2>
        <p className="my-12 text-base">
          Your all-in-one crypto finance hub built for speed, security, and
          total control. Manage, move, and spend your money globally
        </p>

        <div className="flex sm:flex-row flex-col justify-between gap-4">
          <Button className="bg-primary sm:w-1/2 w-full text-dark flex items-center justify-center gap-1.5 font-space_grotesk">
            {" "}
            <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Download App{" "}
          </Button>
          <Button className="sm:w-1/2 w-full font-space_grotesk text-dark shadow-inner">
            Get Started
          </Button>
        </div>
      </div>

      <div className="bg-[url(/product_page/grid_line.png)] h-full md:w-1/2 w-full md:px-0 px-6 md:block flex justify-center">
        <Image
          src={"/clicknswap_mockup/clicknswap_mockup_two.png"}
          alt="ClickNSwap Dashboard MockUp"
          width={300}
          height={200}
          className="md:w-auto md:h-auto w-fit h-fit object-contain md:absolute right-30 -bottom-115"
          loading="eager"
        />
      </div>
    </main>
  );
}

export default HeroSection;
