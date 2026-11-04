import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Click and Swap",
};

export default function NotFound() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center bg-dark px-6 py-16 text-center text-light">
      <p className="font-space_grotesk text-7xl font-bold text-primary md:text-9xl">
        404
      </p>

      <h1 className="mt-4 font-space_grotesk text-2xl font-semibold md:text-4xl">
        This page took a wrong turn
      </h1>

      <p className="mt-4 max-w-md text-sm text-[#9CA3AF] md:text-base">
        The page you are looking for doesn’t exist or may have been moved. Let’s
        get you back on track.
      </p>

      <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="rounded-full bg-primary px-8 py-3 font-space_grotesk font-semibold text-dark"
        >
          Go back home
        </Link>
        <Link
          href="/faqs"
          className="rounded-full border border-primary px-8 py-3 font-space_grotesk font-semibold text-primary"
        >
          Visit Help Center
        </Link>
      </div>
    </main>
  );
}
