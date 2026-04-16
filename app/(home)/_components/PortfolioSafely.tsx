import { portfolioCard } from "@/common/data/card";
import Image from "next/image";

function PortfolioSafely() {
  return (
    <main className="md:px-28 px-6 py-24 text-dark">
      <h2 className="font-space_grotesk md:text-4xl text-2xl font-bold md:leading-12 md:w-[50%] bg-linear-to-b from-dark to-[#517184] bg-clip-text text-transparent">
        Everything you need to build your portfolio safely
      </h2>

      <div className="flex flex-col md:flex-row justify-between my-10 gap-6">
        {portfolioCard.map((item) => {
          return (
            <div
              className={`card md:w-[50%] w-full ${item.id === 1 ? "bg-[#FFFCF1]" : "bg-[#FCFFF9]"}`}
              key={item.id}
            >
              <figure className="py-10">
                <Image
                  src={item.img_path}
                  alt={item.title}
                  width={200}
                  height={100}
                  loading="lazy"
                  className="w-auto h-auto object-contain my-12"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold md:text-3xl text-2xl font-space_grotesk">
                  {item.title}
                </h2>
                <p className="md:text-lg text-sm">{item.details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#EEF9FF] py-12 rounded-xl md:h-110 h-150 flex md:flex-row flex-col items-end relative overflow-hidden">
        <div className="md:w-[50%] w-full px-5">
          <h2 className="font-bold text-3xl font-space_grotesk">
            Withdraw Crypto or Fiat ClickNSwap User for Free.
          </h2>
          <p className="font-medium md:text-lg text-sm my-4">
            Enjoy zero withdrawal fees when sending crypto or fiat to other
            users via their ClickNSwap ID or username—instant and secure.
          </p>
        </div>

        <Image
          src={"/clicknswap_mockup/clicknswap_mockup_three.png"}
          alt="ClickNSwap Mockup"
          width={2500}
          height={2000}
          className="w-auto h-auto md:object-contain absolute md:-right-110 md:-bottom-94 bottom-0 right-0"
          loading="lazy"
        />
      </div>
    </main>
  );
}

export default PortfolioSafely;
