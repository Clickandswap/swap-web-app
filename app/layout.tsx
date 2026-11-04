import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clickandswap.com"),
  title: {
    default: "Click and Swap",
    template: "%s - Click and Swap",
  },
  description: "Move money beyond borders",
  openGraph: {
    siteName: "Click and Swap",
    type: "website",
    images: ["/clickNSwap_icon.png"],
  },
  authors: [
    { name: "Lasisi Abdulsamad", url: "https://github.com/Samkayzeee" },
  ],
  keywords: ["ClickAndSwap", "Swap", "Swappers", "Click and Swap"],
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
      data-scroll-behavior="smooth"
    >
      <body className="font-inter">{children}</body>
      <Script
        id="tawk-to-chat"
        strategy="lazyOnload"
        src="https://embed.tawk.to/6ab94cb24578c1344330766e/1k3ht76gn"
        crossOrigin="anonymous"
      />
    </html>
  );
}
