import Link from "next/link";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
// import { navItems } from "./Navbar";


export const socialLinks = [
    { href: "https://www.linkedin.com/in/tahmedofficial", Icon: FaLinkedin },
    { href: "https://github.com/tahmedofficial", Icon: FaGithub },
    { href: "https://www.facebook.com/taahmedofficial", Icon: FaFacebookSquare },
];


const Footer = async ({ theme }: { theme: string }) => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={`py-12 mt-16 shadow-inner ${theme === "light" && "shadow-neutral-700"} text-center`}>
            <h1 className="text-3xl font-medium">Tanvir Ahmed</h1>
            <nav className="mt-8">
                <ul className="flex justify-center gap-7">
                    {["Projects", "Education", "Skills"].map((item) => (
                        <li key={item}>
                            <Link href={`/${item.toLowerCase()}`} className="hover:underline">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex justify-center gap-7 mt-8 text-3xl">
                {socialLinks.map(({ href, Icon }) => (
                    <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className={`${theme === "dark" ? "hover:bg-black hover:text-white" : "hover:bg-white hover:text-black"} duration-300`}></Icon>
                    </Link>
                ))}
            </div>
            <p className="mt-8">Copyright &copy; {currentYear} - All rights reserved by Tanvir Ahmed.</p>
        </footer>
    );
};

export default Footer;