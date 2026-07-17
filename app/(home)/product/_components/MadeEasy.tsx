import { madeEasyCard } from "@/common/data/card";
import Button from "@/components/ui/Button";
import Image from "next/image";

function MadeEasy() {
  return (
    <main className="sm:px-28 py-12">
      <h2 className="font-bold md:text-5xl text-3xl bg-linear-to-r from-dark to-gradient-dark-secondary bg-clip-text text-transparent text-center py-10 sm:px-28 px-6">
        Everything in one app
      </h2>

      <div className="text-dark">
        {madeEasyCard.map((item) => {
          return (
            <div key={item.id} className="flex md:flex-row flex-col my-5">
              <div
                className={`${item.id === 1 && "bg-[#EEF9FF]"} ${item.id === 2 && "bg-[#FAFAFA]"} ${item.id === 3 && "bg-[#FFFCF1]"} md:w-1/2 w-full p-20 md:pt-32 flex items-center`}
              >
                <div>
                  <h3 className="font-bold font-space_grotesk text-2xl">
                    {item.name}
                  </h3>
                  <p className="text-base my-5 md:w-[65%]">{item.details}</p>

                  <Button className="sm:w-1/2 w-full font-space_grotesk text-dark shadow-inner border border-primary">
                    Join the waitlist
                  </Button>
                </div>
              </div>

              <div
                className="md:w-1/2 w-full p-12 relative bg-no-repeat bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${item.img_bg})` }}
              >
                {item.id === 1 && (
                  <Image
                    src={item.img_path}
                    width={400}
                    height={400}
                    className="w-fit h-fit object-contain absolute bottom-10"
                    alt={`${item.name} Sample Image`}
                  />
                )}

                {item.id === 2 && (
                  <Image
                    src={item.img_path}
                    width={200}
                    height={200}
                    className="w-fit h-fit object-contain absolute -left-28 bottom-10"
                    alt={`${item.name} Sample Image`}
                  />
                )}

                {item.id === 3 && (
                  <Image
                    src={item.img_path}
                    width={200}
                    height={200}
                    className="w-fit h-fit object-contain"
                    alt={`${item.name} Sample Image`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default MadeEasy;
