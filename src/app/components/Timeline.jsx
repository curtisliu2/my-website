"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from "react";

const Timeline = ({ events }) => {
    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: index => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.3, duration: 0.5 }
        })
    };

    return (
        <div className="mx-auto w-full max-w-4xl py-8 relative px-4 sm:px-8">
            <motion.div
                className="absolute w-0.5 bg-gray-300 left-1/2 transform -translate-x-1/2"
                initial={{ height: 0 }}
                animate={{ height: '100%', transition: { duration: 1.5 } }}
            />
            {events.map((event, index) => (
                <motion.div
                    key={index}
                    className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} items-start mb-8`}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    variants={itemAnimation}
                >
                    <div className={`relative w-full sm:w-5/6 p-4 flex ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center`}>
                        <div className="bg-black p-4 rounded-lg shadow-lg w-full sm:w-2/3 border-2 border-white">
                            <div className={`text-left sm:text-${index % 2 === 0 ? 'left' : 'right'} ml-0 sm:ml-4 mr-0 sm:mr-4 text-white`}>
                                <h4 className="text-lg font-semibold">{event.title}</h4>
                                <p className="text-sm">{event.date}</p>
                                <p className="text-base">{event.description}</p>
                                <br/>
                                {event.technical && (
                                    <p><span className="font-bold">🛠️ Stack:</span> {event.technical}</p>
                                )}
                                {event.bullets && (
                                    <ul className="list-disc list-inside">
                                        {event.bullets.map((bullet, idx) => (
                                            <li key={idx} className="text-sm">{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            {event.imageUrls && (
                                <div className="flex flex-wrap mt-4">
                                    {event.imageUrls.map((url, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className={`relative w-full sm:w-1/3 p-1 ${imgIndex !== 0 ? 'sm:-ml-4' : ''} ${imgIndex % 2 === 0 ? 'z-10' : 'z-20'}`}
                                            style={{ top: imgIndex % 2 === 0 ? '0' : '10px' }} // Adjust verticality
                                        >
                                            <Image
                                                src={url}
                                                alt={`Image for ${event.title}`}
                                                width={300}
                                                height={350}
                                                className="rounded-lg"
                                            />
                                            <br/>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
