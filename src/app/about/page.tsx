"use client"
import Timeline from "@/app/components/Timeline";
import React from "react";
import { motion } from 'framer-motion';
import Navbar from "@/app/components/Navbar";
import { ListBulletIcon } from "@heroicons/react/24/solid";

const Page = () => {
    const timelineEvents = [
        {
            title: "Juniper Systems 🧑‍💻",
            date: "06/24 to Present",
            description: "I am a Manufacturing Software Engineer for Juniper Systems, some of my current responsibility include:",
            bullets: [
                "Develop software for the manufacturing department uses for product testing.",
                "Provides solutions to problems in product operating systems, operating systems omissions, and otherapplication problems found by customers and other departments.",
                "Aids in design and devolpment of software applications for products.",
                "Supports the manufacturing line by solving problems and determining necessary changes to the assembly procedures.",
                "Performs and implements product and process improvement to reduce waste of materials and utilities, improve efficiency, imrpove quality and reduce variability.",
                "Workes in conjuction with Quality Assurance to help maintain documentation for standards of acceptability and performing incoming inspections, verifying acceptability, and data tracking.",
                "Helping customer service and marketing provide solutions for customers by answering technical questions about our products."
            ],
            imageUrls: [
                "/images/juniperpfp.jpg",
                "/images/juniperlogo.png"
            ]

        },
        {
            title: "Pursuing a Masters in Science 🏫",
            date: "08/25 to Present",
            description: "Pursuing a Master of Computer Science degree at Utah State University.",
            imageUrls: [
                "/images/usulogo.png"
            ]
        },
        {
            title: "Graduating in a Bachelors of Science 🎓",
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
            title: "Best Buy 💻",
            date: "05/21 to Present",
            description: "I am a Sales Advisor at Best Buy, who answers customer questions and navigated them through solutions for their daily tech needs.",
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