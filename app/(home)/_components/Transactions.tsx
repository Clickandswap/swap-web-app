import Image from "next/image";
import Link from "next/link";

function Transaction() {
  return (
    <main className="bg-linear-to-b from-[#FDF4C2] to-light pt-12 min-h-dvh relative">
      <section className="flex h-full">
        <div className="w-[25%] sm:ms-28 justify-between">
          <h2 className="text-4xl font-space_grotesk leading-12 font-bold bg-linear-to-b from-[#000000] to-[#517184] bg-clip-text text-transparent">
            Smart Crypto Transactions, Made Effortless
          </h2>
          <div className="flex justify-between border my-12 w-[75%]">
            <Link
              href={"#"}
              className="transition-transform ease-in-out duration-100 hover:-translate-y-1"
            >
              <Image
                src={"/store_badges/playstore_badge.png"}
                alt="Playstore Badge"
                width={100}
                height={100}
                className="object-cover w-auto h-auto"
              />
            </Link>
            <Link
              href={"#"}
              className="transition-transform ease-in-out duration-100 hover:-translate-y-1"
            >
              <Image
                src={"/store_badges/app_store_badge.png"}
                alt="App Store Badge"
                width={100}
                height={100}
                className="object-cover w-auto h-auto"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* leafs */}
      <Image
        src={"/landing_page/big_leaf.png"}
        alt="Big leaf"
        width={100}
        height={100}
        className="w-auto h-auto object-contain absolute bottom-0 left-0"
      />
      <Image
        src={"/landing_page/small_leaf.png"}
        alt="Small leaf"
        width={100}
        height={100}
        className="w-auto h-auto object-contain absolute bottom-0 left-36"
      />
    </main>
  );
}

export default Transaction;
