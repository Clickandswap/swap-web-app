import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

function HeroSection() {
  return (
    <main className="text-light bg-dark pt-28 md:h-221 h-max flex flex-col justify-between">
      <div className="md:px-28 px-6 md:w-[60%] md:mx-auto">
        <h2 className="font-bold md:text-5xl text-2xl text-center font-space_grotesk">
          All-in-One Solution for Money Without Borders
        </h2>
        <h4 className="text-center font-medium text-lg my-6">
          ClickNSwap turns your digital assets into real-world value—fast,
          secure, and stress-free.
        </h4>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <Button className="bg-primary md:w-1/2 text-dark flex items-center justify-center gap-1.5 font-space_grotesk">
            {" "}
            <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Download App{" "}
          </Button>
          <Button className="border border-light text-light md:w-1/2 font-space_grotesk">
            Get Started
          </Button>
        </div>
      </div>

      <div className="w-full md:mt-0 mt-10">
        <Image
          src={"/landing_page/big_slope_home.png"}
          alt="Home Page Hero Slope"
          width={500}
          height={300}
          className="md:h-auto h-full w-full object-cover"
          loading="eager"
        />
      </div>
    </main>
  );
}

export default HeroSection;
