"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            requestAnimationFrame(() => {
                const xCenter = window.innerWidth / 2;
                const yCenter = window.innerHeight / 2;
                const middleX = e.clientX - xCenter;
                const middleY = e.clientY - yCenter;
                setPosition({ x: middleX, y: middleY });
            });
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    const cursorVariants = {
        default: {
            x: position.x,
            y: position.y,
            opacity: hidden ? 0 : 1,
            scale: 1, // Normal scale
            transition: { type: 'spring', stiffness: 100, damping: 10 }
        },
        hover: {
            scale: 1.5, // Increase scale when hovering over interactive elements
            opacity: 0.7,
            transition: { type: 'spring', stiffness: 100, damping: 10 }
        }
    };

    return (
        <motion.div
            className="fixed pointer-events-none z-50"
            variants={cursorVariants}
            animate={isHovering ? "hover" : "default"}
            style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: '2px solid black',
                mixBlendMode: 'difference',
                transform: 'translate(-50%, -50%)' // Ensure the cursor is centered
            }}
        />
    );
};

export default CustomCursor;
