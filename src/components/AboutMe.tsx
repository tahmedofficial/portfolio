"use client";
import Image from "next/image";
import { RiAwardLine } from "react-icons/ri";
import { VscGithubProject } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const AboutMe = () => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = Cookies.get("theme")
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, [])


    const aboutInfo = {
        title: "About Me",
        subTitle: "My Introduction",
        cart: [
            {
                Icon: RiAwardLine,
                title: "Experience",
                subTitle: "0 + Years",
            },
            {
                Icon: VscGithubProject,
                title: "Completed",
                subTitle: "5 + Projects",
            },
            {
                Icon: IoLocationOutline,
                title: "From",
                subTitle: "Dhaka, Bangladesh",
            },
        ],
        imgUrl: "https://raw.githubusercontent.com/tahmedofficial/portfolio-images/refs/heads/main/protfolio-img.png",
        description: "I am Tanvir Ahmed, a MERN Stack Web Developer passionate about building scalable and high-performance web applications. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in creating user-friendly, responsive, and efficient web solutions that enhance user experience. Currently, I am pursuing a Bachelor’s degree in Apparel Merchandising & Management at BGMEA University of Fashion & Technology. Alongside my academic journey, I have been dedicated to mastering modern web technologies, staying updated with industry trends, and continuously refining my skills to develop innovative and effective web application.",
    }

    return (
        <div className="mt-10 md:mt-16 text-p-color">
            <div className="text-center space-y-1">
                <h1 className="text-3xl md:text-4xl font-medium">{aboutInfo.title}</h1>
                <h3 className={theme === "dark" ? "text-gray-500" : "text-gray-300"}>{aboutInfo.subTitle}</h3>
            </div>
            <div className="grid lg:gap-8 grid-cols-1 lg:grid-cols-3 mt-12 md:mt-16">
                <div className="col-span-1 flex items-center mb-8 lg:mb-0">
                    <Image
                        className="lg:w-full lg:h-full border rounded-2xl mx-auto"
                        src={aboutInfo.imgUrl}
                        alt="Tanvir Ahmed"
                        width={288} // Adjust the width as per the required size
                        height={288} // Adjust the height as per the required size
                    />
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-3 gap-3">
                        {
                            aboutInfo.cart.map(({ Icon, title, subTitle }) => <div
                                className={`flex flex-col gap-1 items-center p-5 shadow-lg ${theme === "dark" ? "border-gray-300" : "shadow-neutral-700 border-neutral-700"} border-t rounded-lg`}
                                key={title}>
                                <Icon className="text-2xl"></Icon>
                                <h2 className="text-lg font-medium">{title}</h2>
                                <p className={theme === "dark" ? "text-gray-500" : "text-gray-300"}>{subTitle}</p>
                            </div>)
                        }
                    </div>
                    <div className="mt-10 space-y-8">
                        <h3>{aboutInfo.description}</h3>
                        <a href="/tanvir-ahmed-cv.pdf" download="tanvir-ahmed-CV.pdf">
                            <Button text="Download CV" theme={theme} icon={IoDocumentTextOutline}></Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
