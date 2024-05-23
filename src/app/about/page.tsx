"use client"
import Timeline from "@/app/components/Timeline";
import React from "react";
import { motion } from 'framer-motion';
import Navbar from "@/app/components/Navbar";

const Page = () => {
    const timelineEvents = [
        {
            title: "Graduation 🎓",
            date: "05/02/2024",
            description: "Earned a Bachelor of Science degree in Computer Science from Utah State University.",
            bullets: [
                "Cum Laude",
            ],
            imageUrls: [
                "/images/CurtisGrad.jpg",
            ]
        },
        {
            title: "Current Employment",
            date: "May 2021 to Present",
            description: "I am currently a Sales Advisor at Best Buy, who answers customer questions and navigated them through solutions for their daily tech needs.",
            imageUrls: ["/images/CurtisBestBuy.jpg"]
        },
        {
            title: "Gaming/Esports",
            description: "A big hobby of mine includes that of Gaming and Competitive Esports! Some of my accomplishments are:",
            bullets: [
                "Was a member of the USU Esports Executive Council",
                "Was a Game Admin for Valorant in my Community",
                "Competed on my Club's Varsity Valorant Team as Captain",
                "Placed Top 3 in the Mountain West Conference"
            ],
            imageUrls: [
                "/images/ValorantTeam.jpg",
                "/images/CurtisLiuEsports.png",
            ]
        },
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
                    <h2 className="text-3xl font-bold text-white mb-4 left-1/2 transform -translate-x-1/2 absolute">A Little More About Me:</h2>

                    <br/>
                    <Timeline events={timelineEvents} />
                    <div style={{ height: "40px" }}></div>
                    {/*<h2 className="text-3xl font-bold text-white mb-4 left-1/2 transform -translate-x-1/2 absolute">Present</h2>*/}
                </motion.div>
            </div>
            <div style={{ height: "200px" }}></div>
        </main>
    );
};

export default Page;