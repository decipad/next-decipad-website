"use client"

import { useEffect, useState } from "react";

const texts = [
    "Create the utilization report...",
    "Create a profit and loss dashboard...",
    "Create a employee bonus calculator...",
    "Create a model for our revenue forecast...",
]

export const Typewriter = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [displayedCharIndex, setDisplayedCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isTyping) {
                // Typing animation
                if (displayedCharIndex < texts[index].length) {
                    setText(texts[index].substring(0, displayedCharIndex + 1));
                    setDisplayedCharIndex(prev => prev + 1);
                } else {
                    // Finished typing current text
                    setIsTyping(false);
                    setTimeout(() => {
                        setIsTyping(true);
                        setDisplayedCharIndex(0);
                        setIndex((prev) => (prev + 1) % texts.length);
                    }, 1000); // Pause before moving to next text
                }
            }
        }, 50);

        return () => clearInterval(interval);
    }, [isTyping, index, displayedCharIndex]);

    return (
        <div>
            <p className="text-md text-slate-700">{text}<span className="animate-pulse">|</span></p>
        </div>
    );
};