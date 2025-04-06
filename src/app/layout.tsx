import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
import type { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";


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

  const cookieStore = cookies() as unknown as RequestCookies;
  const theme = cookieStore.get('theme')?.value ?? 'light';

  return (
    <html lang="en">
      <SEO></SEO>
      <body className={`${poppins.className} ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
