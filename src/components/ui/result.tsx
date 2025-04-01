"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./button";

export const Result = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const [result, setResult] = useState<"report" | "model">("report");
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        // Set a longer delay before starting the animation
        const timer = setTimeout(() => {
        setIsVisible(true);
        }, 800);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className={`hidden lg:block absolute top-0 right-[0px] bg-white w-[240px] border border-slate-200 rounded-xl p-4 transition-all duration-1000 ease-in-out transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[20px] opacity-0'
            } ${className}`}
            {...props}
        >
            <div className="flex gap-1">
                <Button variant={result === "report" ? "secondary" : "ghost"} size="sm" onClick={() => setResult("report")}>
                    Report
                </Button>
                <Button variant={result === "model" ? "secondary" : "ghost"} size="sm" onClick={() => setResult("model")}>
                    Model
                </Button>
            </div>
            <Image src="/widget.svg" alt="Data Lake" width={240} height={240} className="pt-4 pb-2"/>
            <Image src="/chart.svg" alt="Data Lake" width={240} height={240} className="pt-2 pb-2"/>
        </div>
    );
};