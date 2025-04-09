"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

    const projects = [
        {
            title: "Deores - Clothing Brand",
            description: "Deores, an e-commerce platform using React, Node.js, and MongoDB. Firebase handled user authentication, while Framer Motion animated the interface. TenStack Query optimized data fetching, and JWT ensured data security. Axios facilitated seamless API integration, and Tailwind CSS ensured responsive design. Deores showcases my ability to create secure, user-friendly, and visually appealing web applications using cutting-edge technologies.",
            tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
            github: "https://github.com/tahmedofficial/deores-mart-client",
            liveLink: "https://deores-mart.firebaseapp.com/",
        },
        {
            title: "BUFT-Merchandisers",
            description: "BUFT-Merchandisers is an under-construction website built with Next.js, designed specifically for textile Merchandisers. This platform aims to streamline the workflow, improve communication, and simplify product management for professionals in the textile industry. Stay tuned for updates as we continue to build this essential tool!",
            tech: ["Next.js", "Tailwind"],
            github: "https://github.com/tahmedofficial/BUFT-Merchandisers",
            liveLink: "https://buft-merchandisers.vercel.app/",
        },
        {
            title: "Study Hive - Educational Platform",
            description: "Developed Study Hive, a cutting-edge educational platform utilizing React, Node.js, Express.js, MongoDB, JWT, Firebase Auth, and Stripe. This platform provides seamless user authentication, secure payment processing, and an engaging, interactive learning experience. Students can easily order courses and access a wealth of knowledge through an intuitive and user-friendly interface.",
            tech: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind"],
            github: "https://github.com/tahmedofficial/study-hive-client",
            liveLink: "https://study-hive-6e0e8.firebaseapp.com/",
        },
    ];

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = Cookies.get("theme")
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, [])

    return (
        <div>
            <div className="text-center space-y-1 my-10">
                <h1 className="text-3xl md:text-4xl font-medium">Projects</h1>
                <h3 className={theme === "dark" ? "text-gray-500" : "text-gray-300"}>Browse my Projects
                </h3>
            </div>
            {
                projects.map(project => <div
                    key={project.liveLink}
                    className={`shadow-lg rounded-md my-10 p-4 border-t ${theme === "dark" ? "border-t-gray-300" : "shadow-neutral-700 border-t-neutral-700"}`}>
                    <div className="space-y-2 mb-5">
                        <h1 className="text-2xl lg:text-3xl font-medium">{project.title}</h1>
                        <h3>{project.description}</h3>
                    </div>
                    <iframe
                        className="w-full h-[30rem] rounded-lg"
                        src={project.liveLink}
                        title="Deores Live Preview">
                    </iframe>
                    <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 p-2 rounded-md ${theme === "dark" ? "bg-gray-100" : "bg-neutral-800"}`}>
                        {
                            project.tech.map((techName, index) => <h3
                                key={index}
                                className="bg-blue-200 text-blue-600 text-center rounded-md">
                                {techName}
                            </h3>)
                        }
                    </div>
                    <div className="flex justify-around pt-5">
                        <Link href={project.github} className="flex items-center gap-3">
                            <FaGithub className={`w-8 h-8 ${theme === "dark" ? "hover:text-white hover:bg-black" : "hover:text-black hover:bg-white"} duration-300`} />
                            <p className="hover:underline">Github Repo</p>
                        </Link>
                        <Link href={project.liveLink} className="flex items-center gap-3">
                            <FaExternalLinkAlt className={`w-8 h-8 p-1 ${theme === "dark" ? "hover:text-white hover:bg-black" : "hover:text-black hover:bg-white"} duration-300`} />
                            <p className="hover:underline">Live Link</p>
                        </Link>
                    </div>
                </div>)
            }
        </div>
    );
};


export default Projects;