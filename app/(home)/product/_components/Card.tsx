import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <main className="bg-dark text-light md:h-188 relative sm:px-28 px-6 md:py-18 pt-18 overflow-hidden">
      <div className="md:w-[35%] w-full">
        <h3 className="font-bold sm:text-4xl text-2xl font-space_grotesk">
          Your Card, Your Way, Virtual or physical ⎯ it’s your choice
        </h3>

        <p className="font-base my-4">
          Turn your digital assets into everyday spending power - Pay online or
          in-store globally, Automatically convert crypto to fiat, Secure and
          easy-to-use virtual card, Track every transaction in-app.
        </p>

        <p className="font-bold text-base my-6">
          From wallet to real world — instantly.
        </p>

        <div className="flex justify-between gap-3 my-12 w-[65%]">
          <Link
            href={"#"}
            className="transition-transform ease-in-out duration-100 hover:-translate-y-1 w-1/2"
          >
            <Image
              src={"/store_badges/playstore_badge.png"}
              alt="Playstore Badge"
              width={100}
              height={100}
              className="object-cover w-full md:h-auto"
            />
          </Link>
          <Link
            href={"#"}
            className="transition-transform ease-in-out duration-100 hover:-translate-y-1 w-1/2"
          >
            <Image
              src={"/store_badges/app_store_badge.png"}
              alt="App Store Badge"
              width={100}
              height={100}
              className="object-cover w-full md:h-auto"
            />
          </Link>
        </div>
      </div>

      
      {/* lady holding card Image */}
      <Image
        src={"/product_page/lady_holding_card_two.png"}
        alt="Card"
        width={700}
        height={300}
        className="md:w-auto md:h-auto w-full md:object-cover object-contain md:absolute -bottom-65 right-20"
      />

      {/* leafs */}
      <Image
        src={"/landing_page/big_leaf.png"}
        alt="Big leaf"
        width={100}
        height={100}
        className="w-auto h-auto object-contain absolute bottom-0 left-0 hidden md:block"
      />
      <Image
        src={"/landing_page/small_leaf.png"}
        alt="Small leaf"
        width={100}
        height={100}
        className="w-auto h-auto object-contain absolute bottom-0 left-36 hidden md:block"
      />
    </main>
  );
}

export default Card;
