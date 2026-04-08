import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "ClickNSwap",
  description: "All-in-One Solution for Money Without Borders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${inter.className} ${space_grotesk.className}`}>{children}</body>
    </html>
  );
}
