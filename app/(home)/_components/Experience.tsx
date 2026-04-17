import { experienceCards } from "@/common/data/card";
import Image from "next/image";

function Experience() {
  return (
    <main className="sm:px-28 px-6 py-16 bg-linear-to-b from-[#FFFFFF] to-gradient-light-primary text-dark">
      <div className="text-[#222F37] md:w-[35%]">
        <h2 className="font-space_grotesk md:text-4xl text-3xl font-bold">
          We deliver experience
        </h2>

        <p className="font-medium md:text-base text-sm">
          Here's how ClickNSwap is helping{" "}
          <span className="font-bold">100K</span> people spend their money
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-18">
        <div className="md:w-[25%] w-full bg-[#FFFFFF] px-6 py-4 rounded-lg flex flex-col justify-end">
          <p className="font-space_grotesk flex items-center mb-4">
            <span className="font-bold text-4xl">4.9</span>
            <span className="text-sm">/5</span>
          </p>
          <Image
            src={"/landing_page/avatars.png"}
            alt="Experienced Avatars"
            width={100}
            height={100}
            className="w-fit h-auto object-contain"
          />
        </div>

        {experienceCards.map((item) => {
          return (
            <div key={item.id} className={`flex gap-2 ${item.id !== 2  ? "flex-col" : "flex-col-reverse"} md:w-[25%] w-full`} >
              <div className="bg-card_bg gap-2 px-6 py-4 flex rounded-lg">
                <Image
                  src={"/landing_page/avatar_experience.png"}
                  alt="User Avatar"
                  width={10}
                  height={10}
                  className="rounded-full w-auto h-auto object-contain"
                />

                <div>
                    <h6 className="font-bold text-xs text-[#222F37]">{item.name}</h6>
                    <p className="text-dark text-[10px] font-medium">{item.profession}</p>
                </div>
              </div>

              <div className={`bg-card_bg px-6 py-4 rounded-lg h-48 flex ${item.id !== 2 ? "items-end" : "items-start"}`}>
                <p className="text-sm text-[#222F37]">
                    {item.experience}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Experience;
