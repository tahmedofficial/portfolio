import { IconType } from "react-icons";

interface ButtonProps {
    text: string;
    icon?: IconType;
    theme?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon: Icon, theme }) => {
    return (
        <button className={`relative px-8 h-10 font-semibold ${theme === "dark" ? "text-white bg-[#1F1F1F]" : "bg-gray-200 text-black hover:text-white"} overflow-hidden group rounded-2xl duration-300 active:scale-90`}>
            <span className={`absolute inset-0 w-full h-full ${theme === "dark" ? "bg-gray-400" : "bg-gray-400"} transition-all duration-300 scale-0 group-hover:scale-100 origin-center`}></span>
            <span className={`relative font-normal flex items-center gap-2`}>
                {text} {Icon && <Icon className="text-lg" />}
            </span>
        </button>
    );
};

export default Button;
