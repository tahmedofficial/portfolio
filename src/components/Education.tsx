'use client';
import { useEffect, useState } from 'react';
import { FaCircle, FaGraduationCap } from "react-icons/fa";
import { motion } from 'framer-motion';
import Cookies from "js-cookie";


type TimelineItem = {
    period: string;
    duration: string;
    institute: string;
    degree?: string;
    department?: string;
    group?: string;
    board?: string;
    passingYear?: string;
    result?: string;
    courseName?: string;
};

const Education = () => {

    const educationData: TimelineItem[] = [
        {
            period: 'July 2024 to (Running)',
            duration: 'Running',
            degree: "Bachelor's",
            institute: 'BGMEA University of Fashion & Technology',
            department: 'Apparel Merchandising & Management',
        },
        {
            period: 'March 2022 to August 2023',
            duration: '18 Months',
            degree: 'Higher Secondary Certificate (HSC)',
            institute: 'Kabi Nazrul Govt. College',
            group: 'Humanities',
            board: 'Dhaka',
            passingYear: '2023',
            result: 'GPA 4.00 Out of 5.00',
        },
        {
            period: 'February 2019 to October 2021',
            duration: '21 Months',
            degree: 'Secondary School Certificate (SSC)',
            institute: 'Railway Hafezia Sunnia Alim Madrasah',
            group: 'Humanities',
            board: 'Madrasah',
            passingYear: '2021',
            result: 'GPA 4.44 Out of 5.00',
        },
    ];

    const coursesData: TimelineItem[] = [
        {
            period: 'December 2023 to June 2024',
            duration: '6 Months',
            institute: 'Programming Hero',
            courseName: 'Complete Web Development',
        },
    ];

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = Cookies.get("theme")
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, [])


    const [activeTab, setActiveTab] = useState<string>('education');
    const lineHide = (activeTab === "education" ? educationData : coursesData).length

    return (
        <div className="mt-16">
            <div className="text-center space-y-1">
                <h1 className="text-3xl md:text-4xl font-medium">Education</h1>
                <h3 className={theme === "dark" ? "text-gray-500" : "text-gray-300"}>My personal journey</h3>
            </div>

            <div className="mt-16 flex justify-center space-x-4">
                {['education', 'courses'].map((tab) => {

                    const darkModeClass = activeTab === tab ? "#1F1F1F" : "#E5E7EB";
                    const lightModeClass = activeTab === tab ? "#E5E7EB" : "#1F1F1F";

                    return (
                        <motion.button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 px-4 rounded-lg flex items-center gap-2`}
                            animate={{
                                backgroundColor: theme === "dark" ? darkModeClass : lightModeClass,
                                color: theme === "dark" ? lightModeClass : darkModeClass,
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaGraduationCap />
                            {tab === 'education' ? 'Education' : 'Courses'}
                        </motion.button>
                    )
                })}
            </div>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-16">
                {(activeTab === 'education' ? educationData : coursesData).map((item, index) => (
                    <li key={index}>
                        {0 === index ? undefined : <hr />}
                        <div className="timeline-middle">
                            <FaCircle className="text-[#808080]" />
                        </div>
                        {
                            index % 2 === 0 ? <div className="timeline-start space-y-1 mx-5">
                                {item.institute ? <h1 className='text-xl lg:text-2xl font-medium'> <span className='font-semibold'>institute: </span>{item.institute}</h1> : undefined}
                                {item.degree ? <h3 className='text-lg lg:text-xl'> <span className='font-semibold'>degree: </span>{item.degree}</h3> : undefined}
                                {item.period ? <h3> <span className='font-semibold'>Period: </span>{item.period}</h3> : undefined}
                                {item.duration ? <h3> <span className='font-semibold'>duration: </span>{item.duration}</h3> : undefined}
                                {item.department ? <h3> <span className='font-semibold'>department: </span>{item.department}</h3> : undefined}
                                {item.group ? <h3> <span className='font-semibold'>group: </span>{item.group}</h3> : undefined}
                                {item.board ? <h3> <span className='font-semibold'>board: </span>{item.board}</h3> : undefined}
                                {item.passingYear ? <h3> <span className='font-semibold'>passingYear: </span>{item.passingYear}</h3> : undefined}
                                {item.result ? <h3> <span className='font-semibold'>result: </span>{item.result}</h3> : undefined}
                            </div>
                                : <div className="timeline-end space-y-1 mx-5">
                                    {item.institute ? <h1 className='text-xl lg:text-2xl font-medium'> <span className='font-semibold'>institute: </span>{item.institute}</h1> : undefined}
                                    {item.degree ? <h3 className='text-lg lg:text-xl'> <span className='font-semibold'>degree: </span>{item.degree}</h3> : undefined}
                                    {item.period ? <h3> <span className='font-semibold'>Period: </span>{item.period}</h3> : undefined}
                                    {item.duration ? <h3> <span className='font-semibold'>duration: </span>{item.duration}</h3> : undefined}
                                    {item.department ? <h3> <span className='font-semibold'>department: </span>{item.department}</h3> : undefined}
                                    {item.group ? <h3> <span className='font-semibold'>group: </span>{item.group}</h3> : undefined}
                                    {item.board ? <h3> <span className='font-semibold'>board: </span>{item.board}</h3> : undefined}
                                    {item.passingYear ? <h3> <span className='font-semibold'>passingYear: </span>{item.passingYear}</h3> : undefined}
                                    {item.result ? <h3> <span className='font-semibold'>result: </span>{item.result}</h3> : undefined}
                                </div>
                        }
                        {lineHide === index + 1 ? undefined : <hr />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;