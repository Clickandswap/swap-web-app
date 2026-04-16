import Image from "next/image";
import Button from "../ui/Button";

function NeedHelp() {
  return (
    <main className="sm:mx-28 my-12 px-8 sm:py-10 py-0 pt-20 bg-[url(/company_page/gradient_bg.png)] bg-cover text-light sm:rounded-3xl sm:relative sm:h-75">
      <div className="sm:w-[40%] mb-4 sm:mb-0">
        <h3 className="font-bold sm:text-4xl text-2xl font-space_grotesk">
          Need Help? Talk to us
        </h3>
        <p className="font-[300] sm:text-base text-xs mt-4 mb-8">
          Our multi-channel customer success team is always available to support
          you.
        </p>

        <Button className="border border-light rounded-full px-10">
          Speak to us
        </Button>
      </div>

      <Image
        src={"/company_page/headphone_lady.png"}
        alt="Need Help? Image"
        width={400}
        height={200}
        className="sm:w-auto w-full sm:h-auto h-full sm:object-contain object-cover sm:absolute right-0 -top-31.5 bottom-0"
        loading="lazy"
      />
    </main>
  );
}

export default NeedHelp;
