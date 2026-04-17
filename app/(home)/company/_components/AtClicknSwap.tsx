import { companyGoals } from "@/common/data/card";
import Image from "next/image";

function AtClicknSwap() {
  return (
    <main className="text-dark md:px-28 px-6 py-20">
      <h3 className="font-space_grotesk font-bold md:text-5xl text-2xl">At ClickNSwap</h3>
      <p className="text-base my-5 md:w-[60%] w-full">
        We believe that powerful technology should feel simple to use. That’s
        why every part of our platform is designed with clarity, speed, and
        usability at its core. We prioritize intuitive design, transparent
        processes, and consistent performance to deliver an experience that
        users can trust.
      </p>

      <div>
        {companyGoals.map((item) => {
          return (
            <div
              key={item.id}
              className={`${item.id === 1 ? "bg-card_bg" : "bg-[#FFFAE9]"} flex md:flex-row flex-col-reverse items-center justify-between py-8 px-6 my-10`}
            >
              <div className="md:w-[45%]">
                <h4 className="font-space_grotesk font-bold text-3xl">
                  {item.name}
                </h4>
                <p className="text-base my-5">{item.details}</p>
              </div>

              <Image
                src={item.img_path}
                alt={item.name}
                width={500}
                height={200}
                className="md:w-[45%] w-auto h-auto object-contain"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default AtClicknSwap;
