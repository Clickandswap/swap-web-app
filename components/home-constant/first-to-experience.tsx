import Button from "@/components/ui/Button";
import Image from "next/image";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";

function FirstToExperience() {
  return (
    <main className="bg-light sm:h-72 pt-14 sm:pt-0 h-max flex sm:flex-row flex-col justify-between items-center overflow-hidden">
      <div className="sm:w-[40%] w-full sm:ps-28 ps-6 pe-6 sm:pe-0">
        <h4 className="text-dark text-space_grotesk font-semibold md:text-3xl text-lg">
          Be First to Experience the Future of Crypto
        </h4>

        <div className="w-full flex flex-col sm:flex-row gap-6 my-6">
          <Button className="bg-primary sm:w-1/2 text-dark flex items-center justify-center gap-1.5">
            {" "}
            <IoLogoAppleAppstore /> <IoLogoGooglePlaystore /> Download App{" "}
          </Button>
          <Button className="border border-dark text-dark sm:w-1/2">
            Get Started
          </Button>
        </div>
      </div>

      <div className="bg-[url(/first_to_experience/bitcoin_bg.png)] bg-cover bg-center sm:w-[55%] w-full h-full flex justify-center">
        <Image
          src={"/first_to_experience/bitcoin.png"}
          alt="Bitcoins Image"
          width={300}
          height={200}
          className="sm:w-auto sm:h-auto w-46 h-46 object-contain"
        />
      </div>
    </main>
  );
}

export default FirstToExperience;
