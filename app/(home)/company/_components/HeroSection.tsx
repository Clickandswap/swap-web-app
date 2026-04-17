import Image from "next/image";

function HeroSection() {
  return (
    <main className="md:px-28 px-6 pt-12 text-dark">
      <p className="bg-[#FEF0BD] py-2 px-5 w-fit mx-auto text-xs font-medium rounded-3xl">
        About Us
      </p>
      <h2 className="font-semibold md:leading-12 md:text-4xl text-2xl md:w-[40%] mx-auto font-space_grotesk text-center mt-4">
        ClickNSwap is building the future of trust in digital transactions.
      </h2>

      <div className="w-fit mx-auto mt-6">
        <Image
          src={"/company_page/business_plan.png"}
          alt="Business Plan"
          width={500}
          height={200}
          className="w-auto h-auto object-contain"
          loading="eager"
        />
      </div>
    </main>
  );
}

export default HeroSection;
