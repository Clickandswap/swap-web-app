import Image from "next/image";

function Loading() {
  return (
    <main className="flex items-center justify-center bg-dark w-dvw h-dvh">
      <Image
        src={"/logos/clickNswap_icon.png"}
        alt="Loading Logo"
        width={100}
        height={100}
        className="w-auto h-auto object-contain animate-pulse"
        priority
      />

      {/* <h1 className="text-5xl font-bold">Loading...</h1> */}
    </main>
  );
}

export default Loading;
