"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    const birthDate = new Date('2001-12-31'); // Replace with your birthdate
    const calculateAge = (date) => {
        const diff = Date.now() - date.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    const age = calculateAge(birthDate);

    return (
        <section className="py-8 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 sm:col-span-4 flex justify-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-60 h-60 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] relative">
                        <Image
                            src="/images/LinkedInProfile.png"
                            alt="hero image"
                            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 sm:col-span-8 flex flex-col justify-center text-center sm:text-left"
                >
                    <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                          Hello, I&apos;m{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            className="mb-4 text-2xl sm:text-5xl lg:text-8xl"
                            sequence={[
                                "Curtis Liu",
                                3000,
                                "Software Engineer",
                                1000,
                                "Full-Stack Developer",
                                1000,
                                "Mobile Developer",
                                1000,
                                "UI/UX Designer",
                                1000,
                                "Gaming Enthusiast",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl lg:pr-24">
                        I'm a {age}-year-old software engineer who is currently located in Logan, Utah. My journey in technology started with a deep curiosity about how things worked, driving me to build new innovations and enhance existing ones.
                        This curiosity led me to pursue a degree in computer science, where I gained a solid foundation in both theoretical and practical aspects of software engineering. I've always believed in the mindset of "I can do it better" whenever faced with technological challenges, and now, more than ever, I'm ready to turn that belief into reality.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                        <Link
                            href="/contact"
                            className="px-6 py-3 w-full sm:w-auto rounded-full mr-0 sm:mr-4 mb-4 sm:mb-0 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 hover:text-black text-white"
                        >
                            Contact Me
                        </Link>
                        <Link
                            href="/resume"
                            className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Resume
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
