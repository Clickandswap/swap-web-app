import Image from "next/image";
import Button from "../ui/Button";

function NeedHelp() {
  return (
    <main className="sm:mx-28 my-12 px-8 py-10 bg-[url(/company_page/gradient_bg.png)] bg-cover text-light rounded-3xl relative h-75">
      <div className="w-[40%]">
        <h3 className="font-bold text-4xl font-space_grotesk">
          Need Help? Talk to us
        </h3>
        <p className="font-[300] text-base mt-4 mb-8">
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
        className="w-auto h-auto object-contain absolute right-0 -top-31.5 bottom-0"
      />
    </main>
  );
}

export default NeedHelp;
