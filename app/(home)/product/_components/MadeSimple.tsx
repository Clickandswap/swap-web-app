import Image from "next/image";

function MadeSimple() {
  return (
    <main className="sm:mx-18 md:pe-20 pe-0 pt-10 pb-6 md:pb-0 my-10 text-dark flex flex-col-reverse md:flex-row md:gap-0 gap-8 items-center justify-between bg-[#EEF9FF] rounded-lg overflow-hidden">
      <Image
        src={"/product_page/air_baloon.png"}
        alt="Baloon"
        width={400}
        height={200}
        className="w-auto h-auto object-cover relative md:-left-18"
      />

      <div className="md:w-[30%] w-full px-6 md:px-0">
        <h2 className="font-bold text-4xl font-space_grotesk">
          Global Payments <br />
          <span className="bg-linear-to-b from-dark to-[#517184] bg-clip-text text-transparent">
            Made Simple
          </span>
        </h2>

        <p className="text-base">
          Move money across countries without delays or high fees. Global
          transactions become simple and accessible.
        </p>
      </div>
    </main>
  );
}

export default MadeSimple;
