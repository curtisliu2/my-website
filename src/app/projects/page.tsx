"use client"
import Timeline from "@/app/components/Timeline";
import React from "react";
import { motion } from 'framer-motion';
import Navbar from "@/app/components/Navbar";

const Page = () => {
    const timelineEvents = [
        {
            title: "🎶 SongShare",
            date: "",
            description: "A comprehensive Full-Stack social media platform designed for sharing music among friends, accompanied by an equivalent mobile application.",
            technical: "React.JS, Vite.JS, Spotify API, Google Geolocation, Android Studio w/ Kotlin",
            imageUrls: ["/images/songshare.png"],
            bullets: [
                "Developed a user-friendly interface with React.js",
                "Implemented real-time data fetching using the Spotify API",
                "Built a mobile application counterpart using Android Studio"
            ]
        },
        {
            title: "Non-Immigrant Visa Analysis",
            date: "",
            description: "Description of event 2.",
            technical: "Jupyter Notebook, MongoDB, SQL, BeautifulSoup",
            imageUrls: [],
            bullets: [
                "Conducted data analysis on visa trends",
                "Utilized MongoDB for data storage",
                "Performed web scraping with BeautifulSoup"
            ]
        },
        {
            title: "🙋‍♂️ This Website!",
            date: "",
            description: "This very website, which is my entire portfolio, was made to showcase what I've done and help you get to know me a little bit better!",
            technical: "React.JS, Next.JS, FramerMotion, TailwindCSS",
            imageUrls: [],
            bullets: [
                "Designed the layout with TailwindCSS",
                "Integrated animations using FramerMotion",
                "Deployed with Next.js"
            ]
        },
        // Add more events as needed
    ];


    return (
        <main>
            <Navbar />
            <div className="w-full mt-24 px-12 py-4">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-full"
                >
                    <h2 className="text-3xl font-bold text-white mb-4 left-1/2 transform -translate-x-1/2 absolute">Past Projects:</h2>
                    <br/>
                    <Timeline events={timelineEvents} />
                    <div style={{ height: "40px" }}></div>
                    <h2 className="text-3xl font-bold text-white mb-4 left-1/2 transform -translate-x-1/2 absolute">Yours could be next!
                        <a className={"text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"} href={"/contact"}> Hire Me</a>
                    </h2>
                </motion.div>
            </div>
            <div style={{ height: "200px" }}></div>
        </main>
    );
};

export default Page;