"use client";

import Image from "next/image";
import { Button } from "./button";
import { Typewriter } from "./typewriter";
import { Waitlist } from "./waitlist";
import { useState, useRef } from "react";

export const Prompt = () => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const waitlistButtonRef = useRef<HTMLButtonElement>(null);
  
  const handleContainerClick = () => {
    setIsInputActive(true);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleInputBlur = () => {
    if (!inputValue.trim()) {
      setIsInputActive(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      // Trigger click on the waitlist button
      waitlistButtonRef.current?.click();
    }
  };
  
  return (
    <div 
      className="z-10 relative w-full border border-slate-200 rounded-lg p-4 bg-white flex flex-col gap-6" 
      style={{ boxShadow: "0px 1.637px 13.096px -3.274px rgba(0, 0, 0, 0.1)" }}
      onClick={!isInputActive ? handleContainerClick : undefined}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center">
          <Image src="/edit.svg" alt="Edit" width={20} height={20} />
        </div>
        {isInputActive ? (
          <input
            type="text"
            className="flex-1 outline-none text-md text-slate-700"
            placeholder="Type your prompt here..."
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <Typewriter />
        )}
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button size="sm" variant="secondary" disabled><Image src="/plus.svg" alt="Add" width={16} height={16} /> Add context</Button>
        <Waitlist>
          <Button 
            ref={waitlistButtonRef}
            size="icon" 
            className="bg-black h-8 w-8 text-white!"
          >
            <Image src="/sparkle.svg" alt="Sparkle" width={24} height={24} className="text-white!" />
          </Button>
        </Waitlist>
      </div>
    </div>
  );
};