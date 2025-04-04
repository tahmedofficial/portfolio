import Image from "next/image";
import { RiAwardLine } from "react-icons/ri";
import { VscGithubProject } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from "./ui/Button";
import Link from "next/link";

const AboutMe: React.FC = () => {

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
        imgUrl: "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=",
        description: "I am Tanvir Ahmed, a MERN Stack Web Developer passionate about building scalable and high-performance web applications. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in creating user-friendly, responsive, and efficient web solutions that enhance user experience. Currently, I am pursuing a Bachelor’s degree in Apparel Merchandising & Management at BGMEA University of Fashion & Technology. Alongside my academic journey, I have been dedicated to mastering modern web technologies, staying updated with industry trends, and continuously refining my skills to develop innovative and effective web application.",
    }

    return (
        <div className="mt-10 md:mt-16 text-p-color">
            <div className="text-center space-y-1">
                <h1 className="text-3xl md:text-4xl font-medium">{aboutInfo.title}</h1>
                <h3 className="text-gray-500">{aboutInfo.subTitle}</h3>
            </div>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 mt-12 md:mt-16">
                <div className="col-span-1 flex items-center">
                    <Image
                        className="max-w-72 border rounded-2xl mx-auto"
                        src={aboutInfo.imgUrl}
                        alt="Tanvir Ahmed"
                        width={288} // Adjust the width as per the required size
                        height={288} // Adjust the height as per the required size
                    />
                </div>
                <div className="col-span-2 lg:ml-20">
                    <div className="grid grid-cols-3 gap-3">
                        {
                            aboutInfo.cart.map(({ Icon, title, subTitle }) => <div
                                className="flex flex-col gap-1 items-center p-5 shadow-lg border-t border-gray-300 rounded-lg"
                                key={title}>
                                <Icon className="text-2xl"></Icon>
                                <h2 className="text-lg font-medium">{title}</h2>
                                <p className="text-gray-500">{subTitle}</p>
                            </div>)
                        }
                    </div>
                    <div className="mt-10 space-y-8">
                        <h3>{aboutInfo.description}</h3>
                        <Link href="/tanvir-ahmed-resume.pdf" download="tanvir-ahmed-resume.pdf">
                            <Button text="Download CV" icon={IoDocumentTextOutline}></Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
