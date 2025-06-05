"use client";
import { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen }) => {
    if (!isOpen) return null;

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = Cookies.get("theme")
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, [])


    return (
        <div className="fixed inset-0 bg-transparent bg-opacity-30 backdrop-blur-sm flex justify-center items-center" role="dialog" aria-hidden={!isOpen}>
            <div
                className={`${theme == "light" ? "bg-white text-black" : "bg-black text-white"} rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <h1 className="text-2xl md:text-3xl font-medium">Sending message</h1>
                <span className="loading loading-dots loading-md"></span>
            </div>
        </div>
    );
};

export default Modal;
