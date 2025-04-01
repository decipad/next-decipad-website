"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export const Datalake = () => {
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
      className={`hidden lg:block mt-16 absolute top-0 left-[0px] bg-white w-[240px] border border-slate-200 rounded-xl p-4 transition-all duration-1000 ease-in-out transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[20px] opacity-0'
      }`}
    >
        <p className="px-4 py-1.5 text-sm font-medium bg-slate-100 text-slate-500 w-full text-center rounded-lg">Data Lake</p>
        <Image src="/datalake.svg" alt="Data Lake" width={240} height={240} className="px-4 pt-4 pb-2"/>
    </div>
  );
};