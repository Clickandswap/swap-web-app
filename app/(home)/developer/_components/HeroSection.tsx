import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

function HeroSection() {
  return (
    <main className="text-dark">
      <div className="md:px-28 px-6 py-16">
        <p className="bg-[#FEF0BD] py-2 px-5 w-fit mx-auto text-xs font-medium rounded-3xl">
          ClickNSwap For Developers
        </p>
        <h2 className="font-semibold leading-12 text-4xl md:w-[45%] mx-auto font-space_grotesk text-center mt-4">
          Build on Click and Swap
        </h2>

        <p className="text-base text-center mt-4 md:w-[50%] mx-auto">
          Our payments API is in private beta. Join the developer waitlist for
          early access to accounts, payouts, card issuing, and
          stablecoin-to-local-currency conversion.
        </p>

        <div className="flex sm:flex-row flex-col justify-between gap-4 my-6 md:w-1/2 md:mx-auto">
          <Button className="bg-primary sm:w-1/2 w-full text-dark flex items-center justify-center gap-1.5 font-space_grotesk">
            {" "}
            Request Developer Access
          </Button>
          <Button className="sm:w-1/2 w-full font-space_grotesk text-dark shadow-inner border border-primary">
            Join the waitlist
          </Button>
        </div>
      </div>

      <Image
        src={"/developer_page/developer_img.png"}
        alt="Developer Image"
        width={1000}
        height={400}
        className="w-dvw h-dvh object-cover"
        loading="eager"
      />
    </main>
  );
}

export default HeroSection;
