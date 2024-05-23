"use client";
import Link from 'next/link';

const BackButton = () => {
    return (
        <div className="absolute top-6 left-6 z-50">
            <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }}
               className="text-2xl font-bold underline text-white hover:text-gray-300">
                ../
            </a>
        </div>
    );
};

export default BackButton;
