"use client";
import { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import ToggleMenu from "@/components/ui/ToggleMenu";

export const navItems: { title: string; path: string }[] = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Skills", path: "/skills" },
    { title: "Education", path: "/education" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <nav className="relative w-full h-full bg-white">
            <div className="lg:hidden">
                <ToggleMenu isOpen={isOpen}></ToggleMenu>
            </div>

            <div className="container mx-auto flex items-center justify-between px-5 py-4">
                {/* Logo & Mobile Menu Button */}
                <div className="flex items-center">
                    <button className={`lg:hidden z-20 ${isOpen && "text-white"}`} onClick={() => setOpen(!isOpen)}>
                        <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
                    </button>
                    <h1 className="text-p-color font-medium text-2xl ml-4 lg:ml-0">Tanvir</h1>
                </div>
                {/* Desktop Navigation */}
                <ul className="hidden lg:flex gap-6">
                    {navItems.map(({ title, path }) => (
                        <li key={title}>
                            <Link href={path} className="border-b-2 border-transparent text-p-color transition-all duration-300 hover:border-p-color">
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
