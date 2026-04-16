import { cardDetails } from "@/common/data/card";
import Image from "next/image";

function WhyClickNSwap() {
  return (
    <main className="sm:px-28 px-6 pt-16 pb-4">
      <div className="flex justify-between">
        <h2 className="w-[38%] font-bold font-space_grotesk md:text-5xl text-lg bg-linear-to-r from-dark to-[#4A6879] bg-clip-text text-transparent">
          Why ClickNSwap Should be your top Pick
        </h2>
        <p className="text-base text-dark w-[40%] text-end">
          In many places, crypto transactions can be a hassle. At ClickNSwap, we
          make it simple and stress-free — giving you a seamless crypto journey
          built with innovation, top-tier security, and intuitive design.
        </p>
      </div>

      {/* cards */}

      <div className="flex justify-between gap-6 mt-20">
        {cardDetails.map((item) => {
          return (
            <div
              className="card bg-card_bg text-dark font-space_grotesk w-[45%]"
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
                <p className="text-base">{item.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default WhyClickNSwap;
