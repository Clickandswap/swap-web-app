import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
});

export const metadata: Metadata = {
  title: "ClickAndSwap",
  description: "Move money beyond borders",
  authors: [
    { name: "Lasisi Abdulsamad", url: "https://github.com/Samkayzeee" },
  ],
  keywords: ["ClickAndSwap", "Swap", "Swappers"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space_grotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-inter">{children}</body>
    </html>
  );
}
