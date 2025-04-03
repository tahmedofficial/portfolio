import { IconType } from "react-icons";

interface ButtonProps {
    text: string;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ text, icon: Icon }) => {
    return (
        <button className="relative px-8 h-10 font-semibold text-white bg-[#1F1F1F] overflow-hidden group rounded-2xl duration-300 active:scale-90">
            <span className="absolute inset-0 w-full h-full bg-gray-400 transition-all duration-300 scale-0 group-hover:scale-100 origin-center"></span>
            <span className="relative font-normal flex items-center gap-2">
                {text} {Icon && <Icon className="text-lg" />}
            </span>
        </button>
    );
};

export default Button;
