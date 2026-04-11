import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";

function FirstToExperience() {
  return (
    <main className="bg-light h-72 flex justify-between items-center sm:ps-28 ps-6 overflow-hidden">
      <div className="w-[35%]">
        <h4 className="text-dark text-space_grotesk font-semibold md:text-3xl text-lg">
          Be First to Experience the Future of Crypto
        </h4>

        <div className="w-full flex gap-6 my-6">
          <Button className="bg-primary w-1/2 text-dark flex items-center justify-center gap-1.5">
            {" "}
            <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Download App{" "}
          </Button>
          <Button className="border border-dark text-dark w-1/2">
            Get Started
          </Button>
        </div>
      </div>

      <div className="bg-[url(/first_to_experience/bitcoin_bg.png)] bg-cover bg-center w-[60%] h-full flex justify-center">
        <Image
          src={"/first_to_experience/bitcoin.png"}
          alt="Bitcoins Image"
          width={300}
          height={200}
          className="w-auto h-auto"
        />
      </div>
    </main>
  );
}

export default FirstToExperience;
