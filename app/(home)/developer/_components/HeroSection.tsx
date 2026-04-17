import Image from "next/image";

function HeroSection() {
  return (
    <main className="text-dark">
      <div className="md:px-28 px-6 py-16">
        <p className="bg-[#FEF0BD] py-2 px-5 w-fit mx-auto text-xs font-medium rounded-3xl">
          ClickNSwap For Developers
        </p>
        <h2 className="font-semibold leading-12 text-4xl md:w-[45%] mx-auto font-space_grotesk text-center mt-4">
          Build something awesome with ClickNSwap
        </h2>

        <p className="text-base text-center mt-4 md:w-[50%] mx-auto">
          Access powerful APIs to bring your ideas to life on the platform that
          simplifies payments for everyone.
        </p>
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
