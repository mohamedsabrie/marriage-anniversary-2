import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Audio from "@/components/Audio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anniversary-2",
  description: "This is the second anniversary gift to my beautiful wife Icha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-purple-400 relative ${inter.className}`}>
        <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full" />
        <Audio />
        {children}
      </body>
    </html>
  );
}
