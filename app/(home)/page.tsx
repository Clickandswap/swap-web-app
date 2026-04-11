import Faqs from "@/components/home-constant/faqs";
import GettingStarted from "@/components/home-constant/getting-started";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between text-primary">
        This is the main Page
      </main>

      <main>We deliver Experience</main>

      <GettingStarted />
      <Faqs />
    </>
  );
}
