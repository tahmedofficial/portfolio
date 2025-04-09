"use client";
import Link from "next/link";
import { CgSoftwareDownload } from "react-icons/cg";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { socialLinks } from "./Footer";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


const Banner = () => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = Cookies.get("theme")
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [])

  const personalInfo = {
    name: "Tanvir Ahmed",
    title: "---- Junior MERN Stack Web Developer",
    description: "Building Scalable Web Applications with React & Next.js | I am a MERN Stack Web Developer specializing in high-performance, user-friendly, and responsive web applications. With expertise in MongoDB, Express.js, React, and Node.js, I craft scalable applications that enhance user experience. Passionate about modern web technologies, I stay updated with industry trends to deliver innovative and efficient web applications."
  }

  const imgUrl = "https://raw.githubusercontent.com/tahmedofficial/portfolio-images/refs/heads/main/protfolio-img.png";

  return (
    <div className="mt-10 lg:mt-20">
      <div className="lg:grid lg:grid-cols-3 flex flex-col-reverse">
        {/* Left Section */}
        <div className="col-span-2 flex flex-col-reverse lg:flex-row-reverse gap-16 items-center mt-20 lg:mt-0">
          {/* Text Content */}
          <div className="space-y-5">
            <h1 className="text-4xl lg:text-5xl font-medium text-center md:text-left">{personalInfo.name}</h1>
            <h2 className="text-xl lg:text-2xl text-center lg:text-left">{personalInfo.title}</h2>
            <p className="text-sm lg:text-base">{personalInfo.description}</p>
            <a href="tanvir-ahmed-resume.pdf" download="tanvir-ahmed-resume.pdf">
              <Button text="Resume" theme={theme} icon={CgSoftwareDownload}></Button>
            </a>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden lg:flex flex-col gap-6 text-3xl">
            {socialLinks.map(({ href, Icon }) => (
              <Link key={href} href={href} target="_blank" className="duration-300 p-2 rounded">
                <Icon className={`${theme === "dark" ? "hover:bg-black hover:text-white" : "hover:bg-white hover:text-black"} duration-300`}></Icon>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section (Profile Image + Mobile Social Icons) */}
        <div className="flex items-center gap-8 justify-center">
          {/* Mobile Social Icons */}
          <div className="lg:hidden flex flex-col gap-6 text-3xl">
            {socialLinks.map(({ href, Icon }) => (
              <Link key={href} href={href} target="_blank" className="hover:bg-p-color hover:text-white duration-300 p-2 rounded">
                <Icon className={`${theme === "dark" ? "hover:bg-black hover:text-white" : "hover:bg-white hover:text-black"} duration-300`}></Icon>
              </Link>
            ))}
          </div>

          {/* Profile Image with Animated Border */}
          <div
            className="w-60 h-72 shadow-inner"
            style={{
              background: `url(${imgUrl}) center/cover no-repeat`,
              boxShadow: "inset 0 0 0 9px rgba(255, 255, 255, 0.3)",
              animation: "profileAnimation 5s ease-in-out infinite",
            }}
          />

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="h-14 flex gap-3 items-center justify-center mt-10 md:mt-16">
        <div className={`border-2 px-2 ${theme === "dark" ? "hover:bg-black hover:text-white border-black" : "hover:bg-white hover:text-black border-white"} duration-300 pb-2 rounded-xl`}>|</div>
        <h3 className="font-medium">Scroll Down</h3>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}>
          <FaArrowDownLong />
        </motion.span>
      </div>

    </div >
  );
};

export default Banner;
