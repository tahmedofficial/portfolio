"use client";
import { IconType } from "react-icons";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact, } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill, } from "react-icons/ri";
import { SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb, SiReactrouter, } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface Skill {
    name: string;
    level: string;
    icon: IconType;
}

const Skills = () => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = Cookies.get("theme")
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, [])

    const frontendSkills: Skill[] = [
        { name: "React.js", level: "Intermediate", icon: FaReact },
        { name: "Next.js", level: "Basic", icon: RiNextjsFill },
        { name: "TypeScript", level: "Basic", icon: BiLogoTypescript },
        { name: "JavaScript", level: "Intermediate", icon: RiJavascriptFill },
        { name: "HTML", level: "Intermediate", icon: FaHtml5 },
        { name: "CSS", level: "Basic", icon: FaCss3Alt },
        { name: "Tailwind", level: "Intermediate", icon: RiTailwindCssFill },
        { name: "Git", level: "Basic", icon: FaGitAlt },
        { name: "GitHub", level: "Basic", icon: FaGithub },
        { name: "React Router", level: "Intermediate", icon: SiReactrouter },
    ];

    const backendSkills: Skill[] = [
        { name: "Node.js", level: "Basic", icon: FaNodeJs },
        { name: "MongoDB", level: "Basic", icon: SiMongodb },
        { name: "Express.js", level: "Basic", icon: SiExpress },
        { name: "Firebase", level: "Advanced", icon: SiFirebase },
        { name: "JWT", level: "Intermediate", icon: SiJsonwebtokens },
    ];

    return (
        <div className="mt-16 md:mt-20">
            <div className="text-center space-y-1">
                <h1 className="text-3xl md:text-4xl font-medium">Skills</h1>
                <h3 className={theme === "dark" ? "text-gray-500" : "text-gray-300"}>My technical level</h3>
            </div>
            <div className="grid gap-14 grid-cols-1 lg:grid-cols-2 mt-16">

                {/* Frontend Skills */}
                <div className={`shadow-lg rounded-2xl p-5 md:py-10 md:px-16 border-t  ${theme === "dark" ? "border-gray-300" : "shadow-neutral-700 border-neutral-700"} h-full`}>
                    <h1 className="text-center text-3xl font-medium">Frontend Technology</h1>
                    <div className="grid grid-cols-2 gap-7 mt-10">
                        {
                            frontendSkills.map(({ name, level, icon: Icon }) => <div
                                className="grid grid-cols-5"
                                key={name}>
                                <Icon className="mt-1 text-2xl col-span-1" />
                                <div className="col-span-4">
                                    <h3 className="text-2xl font-medium">{name}</h3>
                                    <h3 className={theme === "dark" ? "text-gray-500" : "text-gray-300"}>{level}</h3>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

                {/* Backend Skills */}
                <div className={`shadow-lg rounded-2xl p-5 md:py-10 md:px-16 border-t  ${theme === "dark" ? "border-gray-300" : "shadow-neutral-700 border-neutral-700"} h-full`}>
                    <h1 className="text-center text-3xl font-medium">Frontend Technology</h1>
                    <div className="grid grid-cols-2 gap-7 mt-10">
                        {
                            backendSkills.map(({ name, level, icon: Icon }) => <div
                                className="grid grid-cols-5"
                                key={name}>
                                <Icon className="mt-1 text-2xl col-span-1" />
                                <div className="col-span-4">
                                    <h3 className="text-2xl font-medium">{name}</h3>
                                    <h3 className={theme === "dark" ? "text-gray-500" : "text-gray-300"}>{level}</h3>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Skills;