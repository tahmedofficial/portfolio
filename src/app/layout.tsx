import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tanvir Ahmed | MERN Stack Developer",
  description: "Tanvir Ahmed is a MERN stack developer skilled in React, Node.js, MongoDB, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Building Scalable Web Applications with React & Next.js

  return (
    <html lang="en">
      <SEO></SEO>
      <body className={`${poppins.className} bg-white`}>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
