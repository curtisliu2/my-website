"use client"
import React, {useState} from 'react';
import Image from "next/image";
import FramerMagnetic from "@/app/components/FramerMagnetic";
import BackButton from "@/app/components/BackButton";

import LinkedInLogo from '../../../public/linkedin.svg'
import MailLogo from '../../../public/mail.svg'

const Page = () => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <main className="flex flex-col justify-center items-center min-h-screen">

            <BackButton/>
            <p
                className="text-white text-xl md:text-2xl font-semibold mb-4 interactive-div">
                How would you like to contact me?
            </p>
            <div className="flex justify-center items-center space-x-10">
                <div
                    className="p-5 transition-transform duration-300 hover:scale-110">
                    <FramerMagnetic>
                        <a href="mailto:curtisliu4@gmail.com?subject=Email%20from%20My%20Portfolio%20Website&body=Hi%20there,">
                            <Image
                                src={MailLogo}
                                alt="Mail Logo"
                                width={60}
                                height={50}
                            />
                        </a>

                    </FramerMagnetic>
                </div>

                <div className="p-5 transition-transform duration-300 hover:scale-110">
                    <FramerMagnetic>
                        <a href="https://www.linkedin.com/in/curtis-liu-9952b8206/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={LinkedInLogo}
                                alt="LinkedIn Logo"
                                width={50}
                                height={50}
                            />
                        </a>
                    </FramerMagnetic>
                </div>

            </div>

</main>
    );
};

export default Page;