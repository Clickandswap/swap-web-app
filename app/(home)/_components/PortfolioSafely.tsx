import { portfolioCard } from "@/common/data/card";
import Image from "next/image";

function PortfolioSafely() {
  return (
    <main className="sm:px-28 py-24 text-dark">
      <h2 className="font-space_grotesk text-4xl font-bold leading-12 w-[50%] bg-linear-to-b from-dark to-[#517184] bg-clip-text text-transparent">
        Everythin you need to build your portfolio safely
      </h2>

      <div className="flex justify-between my-10 gap-6">
        {portfolioCard.map((item) => {
          return (
            <div
              className={`card w-[50%] ${item.id === 1 ? "bg-[#FFFCF1]" : "bg-[#FCFFF9]"}`}
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
                <h2 className="card-title font-bold text-3xl font-space_grotesk">
                  {item.title}
                </h2>
                <p className="text-lg">{item.details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#EEF9FF] py-12 px-5 rounded-xl h-110 flex items-end relative overflow-hidden">
        <div className="w-[50%]">
          <h2 className="font-bold text-3xl font-space_grotesk">
            Withdraw Crypto or Fiat ClickNSwap User for Free.
          </h2>
          <p className="font-medium text-lg my-4">
            Enjoy zero withdrawal fees when sending crypto or fiat to other
            users via their ClickNSwap ID or username—instant and secure.
          </p>
        </div>

        <Image
          src={"/clicknswap_mockup/clicknswap_mockup_three.png"}
          alt="ClickNSwap Mockup"
          width={2500}
          height={2000}
          className="w-auto h-auto object-contain border absolute -right-110 -bottom-94" 
          loading="lazy"
        />
      </div>
    </main>
  );
}

export default PortfolioSafely;
