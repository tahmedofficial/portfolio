import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
import BackgroundEffects from "@/components/ui/BackgroundEffects";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tanvir Ahmed | MERN Stack Developer",
  description: "Tanvir Ahmed is a MERN stack developer skilled in React, Node.js, MongoDB, and Next.js.",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value ?? 'light';

  return (
    <html lang="en">
      <SEO></SEO>
      <body className={`${poppins.className} ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`}>
        <main className="relative min-h-screen w-full">
          <BackgroundEffects></BackgroundEffects>
          <div className="relative z-10">
            <Navbar></Navbar>
            <div className="md:w-4/6 mx-auto px-3 md:px-0">
              {children}
            </div>
            <Footer theme={theme}></Footer>
          </div>
        </main>
      </body>
    </html>
  );
}
