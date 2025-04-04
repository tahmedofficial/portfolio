"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsSend } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Modal from "@/components/ui/Modal";
import Button from "./ui/Button";

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);

    console.log(process.env.NEXT_PUBLIC_SERVICE_ID);


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) {
            console.error("Form reference is null");
            return;
        }

        setIsSending(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                form.current,
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
                }
            )
            .then(
                () => {
                    e.currentTarget.reset();
                    setIsSending(false);
                    console.log("Message sent");
                },
                (error) => {
                    setIsSending(false);
                    console.error("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="mt-10 md:mt-16 text-p-color">
            <div className="text-center space-y-1">
                <h1 className="text-3xl md:text-4xl font-medium">Contact</h1>
                <h3 className="text-gray-500">Get in touch</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-10 mt-14 lg:mt-20">
                    <ContactInfo Icon={MdEmail} title="Email" content="tanvirofcuo@gmail.com" />
                    <ContactInfo Icon={FaPhoneSquareAlt} title="Number" content="+880 1600993826" />
                </div>
                <div className="mt-14 lg:mt-20">
                    <h1 className="text-center text-2xl lg:text-3xl font-medium">Message Me</h1>
                    <form ref={form} onSubmit={sendEmail} className="card-body">
                        <div className="flex flex-col relative">
                            <label className="absolute top-0 left-7 bg-white px-2 rounded-xl">
                                <span>Name</span>
                            </label>
                            <input className="h-12 mt-3 border border-gray-500 rounded-xl outline-none px-4" type="text" name="fromName" placeholder="Insert your name" required />
                        </div>
                        <div className="flex flex-col relative mt-4">
                            <label className="absolute top-0 left-7 bg-white px-2 rounded-xl">
                                <span>Email</span>
                            </label>
                            <input className="h-12 mt-3 border border-gray-500 rounded-xl outline-none px-4" type="email" name="fromEmail" placeholder="Insert your email" required />
                        </div>
                        <div className="flex flex-col relative mt-4">
                            <label className="absolute top-0 left-7 bg-white px-2 rounded-xl">
                                <span>Message</span>
                            </label>
                            <textarea className="h-28 mt-3 border border-gray-500 rounded-xl outline-none pt-3 px-4" name="message" placeholder="Write your message" required></textarea>
                        </div>
                        <div className="mt-10">
                            <Button text={isSending ? "Sending..." : "Send Message"} icon={BsSend}></Button>
                        </div>
                    </form>
                </div>
            </div>
            <Modal isOpen={isSending} onClose={() => setIsSending(false)} />
        </div>
    );
};

interface ContactInfoProps {
    Icon: React.ElementType;
    title: string;
    content: string;
}

const ContactInfo = ({ Icon, title, content }: ContactInfoProps) => (
    <div className="flex flex-col gap-1 items-center shadow-md py-12 border-t border-gray-300 rounded-xl max-w-96 mx-auto">
        <Icon className="text-3xl" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <h3>{content}</h3>
    </div>
);

export default Contact;
