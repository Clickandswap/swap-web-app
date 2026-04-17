import { madeEasyCard } from "@/common/data/card";
import Image from "next/image";

function MadeEasy() {
  return (
    <main className="sm:px-28 py-12">
      <h2 className="font-bold md:text-5xl text-3xl bg-linear-to-r from-dark to-gradient-dark-secondary bg-clip-text text-transparent text-center py-10 sm:px-28 px-6">
        Crypto Made Easy
      </h2>

      <div className="text-dark">
        {madeEasyCard.map((item) => {
          return (
            <div key={item.id} className="flex md:flex-row flex-col my-5">
              <div className="bg-card_bg md:w-1/2 w-full p-14 flex items-end">
                <div>
                  <h3 className="font-bold font-space_grotesk text-2xl">
                    {item.name}
                  </h3>
                  <p className="text-base my-5 md:w-[65%]">{item.details}</p>
                </div>
              </div>

              <div className="bg-[url(/product_page/crypto_card_bg.png)] md:w-1/2 w-full p-12">
                <Image
                  src={item.img_path}
                  width={600}
                  height={300}
                  className="w-full h-full object-contain"
                  alt={`${item.name} Sample Image`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default MadeEasy;
