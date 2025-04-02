"use client";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5";

const socialLinks = [
  { href: "https://www.linkedin.com/in/tahmedofficial", icon: <FaLinkedin className="hover:bg-black hover:text-white duration-300" /> },
  { href: "https://github.com/tahmedofficial", icon: <FaGithub className="hover:bg-black hover:text-white duration-300" /> },
  { href: "https://www.facebook.com/taahmedofficial", icon: <FaFacebookSquare className="hover:bg-black hover:text-white duration-300" /> },
];

const personalInfo = {
  name: "Tanvir Ahmed",
  title: "---- Junior Web Developer",
  description: "I am Tanvir Ahmed, a MERN Stack Web Developer with a passion for building scalable, high-performance web applications. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in developing user-friendly and responsive web solutions. I am currently pursuing a Bachelor’s degree in Apparel Merchandising & Management at BGMEA University of Fashion & Technology. Alongside my academic journey, I have dedicated myself to mastering modern web technologies, staying updated with industry trends, and continuously improving my skills."
}

const imgUrl = "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY="

const Banner = () => {
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
            <Link href="tanvir-ahmed-CV.pdf" download="tanvir-ahmed-resume.pdf">
              <Button borderRadius="1.75rem" className="bg-[#1F1F1F] text-white">
                Download CV <IoDocumentTextOutline className="text-lg" />
              </Button>
            </Link>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden lg:flex flex-col gap-6 text-3xl">
            {socialLinks.map(({ href, icon }, index) => (
              <Link key={index} href={href} target="_blank" className="duration-300 p-2 rounded">
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section (Profile Image + Mobile Social Icons) */}
        <div className="flex items-center gap-8 justify-center">
          {/* Mobile Social Icons */}
          <div className="lg:hidden flex flex-col gap-6 text-3xl">
            {socialLinks.map(({ href, icon }, index) => (
              <Link key={index} href={href} target="_blank" className="hover:bg-p-color hover:text-white duration-300 p-2 rounded">
                {icon}
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
        <div className="border-2 border-p-color px-2 pb-2 rounded-xl">|</div>
        <h3 className="font-medium">Scroll Down</h3>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}>
          <FaArrowDownLong />
        </motion.span>
      </div>


    </div>
  );
};

export default Banner;
