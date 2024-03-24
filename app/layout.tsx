import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Mozzi Fire",
  description: "Developed By Sharad Jadhav",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
