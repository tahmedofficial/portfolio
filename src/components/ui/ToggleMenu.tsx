"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAnimate, stagger, type AnimationSequence } from "framer-motion";
import { navItems } from "../Navbar";

interface NavMenuProps {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    pathName: string;
}

const useMenuAnimation = (isOpen: boolean) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations: AnimationSequence = isOpen
            ? [
                ["nav", { x: "0%" }, { duration: 0.6, ease: [0.08, 0.65, 0.53, 0.96] }],
                ["li", { scale: 1, opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.05), at: "-0.1" }],
            ]
            : [
                ["li", { scale: 0.5, opacity: 0, filter: "blur(10px)" }, { delay: stagger(0.05, { from: "last" }), at: "<" }],
                ["nav", { x: "-100%" }, { at: "-0.1" }],
            ];

        animate(menuAnimations);
    }, [isOpen, animate]);

    return scope;
};

const ToggleMenu = ({ isOpen, setOpen, pathName }: NavMenuProps) => {

    const scope = useMenuAnimation(isOpen);
    const [isClosed, setClosed] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setClosed(true);
        }, 800);

        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            clearTimeout(timer);
            document.body.classList.remove("overflow-hidden");
        };

    }, [isOpen]);

    return (
        <div ref={scope}>
            <nav className={isClosed ? "absolute h-screen w-full pl-7 pt-8 bg-black bg-opacity-80 z-10" : "hidden"}>
                <ul className="flex flex-col gap-3 mt-14 text-white">
                    {navItems.map(({ title, path }) => (
                        <li key={path} className={`origin-left py-1 ${path === pathName ? "bg-white text-black" : undefined}`}>
                            <Link onClick={() => setOpen(false)} href={path}
                                className={`px-3 ${path === pathName ? undefined : "hover:underline"}`}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default ToggleMenu;
