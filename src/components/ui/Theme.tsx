'use client';
import { useEffect, useState } from 'react';
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";

const setCookie = (name: string, value: string, days = 365) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const getCookie = (name: string): string | null => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
};

const Theme = () => {
    const [theme, setTheme] = useState<"dark" | "light">("light");

    useEffect(() => {
        const saved = getCookie('theme') as "dark" | "light" | null;
        if (saved) {
            setTheme(saved);
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        if (newTheme === "light") {
            setTheme(newTheme);
        }
        setCookie("theme", newTheme);
        window.location.reload();
    };

    return (
        <button
            onClick={toggleTheme}
            className={`transition-all duration-300 ease-in-out py-2 px-4 rounded-lg flex items-center justify-center ${theme === "dark" ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
        >
            <span className={`transition-all duration-300 ease-in-out text-xl ${theme === "dark" ? 'rotate-190 opacity-100 scale-100' : 'rotate-0 opacity-0 scale-75'}`}>
                <BsSunFill />
            </span>
            <span className={`transition-all duration-300 ease-in-out text-xl absolute ${theme === "dark" ? 'rotate-190 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`}>
                <IoMdMoon />
            </span>
        </button>
    );
};

export default Theme;

