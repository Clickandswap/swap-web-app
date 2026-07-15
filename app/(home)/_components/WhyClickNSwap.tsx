import { cardDetails } from "@/common/data/card";
import Image from "next/image";

function WhyClickNSwap() {
  return (
    <main className="md:px-28 px-6 pt-16 pb-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="md:w-[40%] ">
          <div className="w-fit py-1.5 px-6 text-dark text-sm inset-shadow-2xs rounded-full my-2">Why Click and Swap?</div>
          <h2 className="font-bold font-space_grotesk md:text-4xl text-2xl bg-linear-to-r from-dark to-[#4A6879] bg-clip-text text-transparent">
          Money that arrives, clearly, and in local currency
        </h2>
        </div>
        <p className="text-base text-dark md:w-[40%] md:text-end">
          For millions, sending money home still means high fees and long waits.
          We make it faster, fairer, and easier to trust.
        </p>
      </div>

      {/* cards */}

      <div className="flex flex-col md:flex-row justify-between gap-6 mt-20">
        {cardDetails.map((item) => {
          return (
            <div
              className="card bg-card_bg text-dark font-space_grotesk md:w-[45%] w-full"
              key={item.id}
            >
              <figure className="py-10">
                <Image
                  src={item.img_path}
                  alt="Card Gif Representations"
                  width={100}
                  height={100}
                  unoptimized={true}
                  loading="lazy"
                  className="object-contain"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{item.title}</h2>
                <p className="md:text-base text-sm">{item.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default WhyClickNSwap;
