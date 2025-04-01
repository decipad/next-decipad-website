"use client"

import { Button } from "./button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Spinner } from "./icons/spinner";
import { Input } from "./input"
import { useEffect, useState } from "react";

// const commonProviders = ["gmail", "yahoo", "hotmail", "outlook", "icloud", "aol", "protonmail", "mail", "zoho", "yandex", "gmx", "live", "msn"];

export const Waitlist = (props: {children: React.ReactNode}) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [requestStatus, setRequestStatus] = useState<"idle" | "loading" | "success" | "error">("idle");


    const handleSubmit = async () => {
        setRequestStatus("loading");
        const response = await fetch("/api/addToWaitList", {
            method: "POST",
            body: JSON.stringify({ email }),
        });
        
        if (response.ok) {
            const data = await response.json();
            setRequestStatus("success");
            console.log(data.status, data.message);
        } else {
            console.error('Failed to add to waitlist');
            setRequestStatus("error");
        }
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError("Email is required");
            return false;
        } else if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address");
            return false;
        } else {
            setEmailError("");
            return true;
        }
    };

    const validateForm = () => {
        const isEmailValid = validateEmail(email);
        setIsFormValid(isEmailValid);
    };

    useEffect(() => {
        validateForm();
    }, [email]);

    useEffect(() => {
        if (emailTouched) {
            validateForm();
        }
    }, [email, emailTouched]);

    return (
        <Dialog>
            <DialogTrigger asChild>{props.children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Join the waitlist</DialogTitle>
                    <DialogDescription>
                        Once the Decipad is released we are going to let you know so you can be in the first row.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-full">
                        <Input 
                            type="email" 
                            id="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            onBlur={() => {
                                setEmailTouched(true);
                                validateEmail(email);
                            }}
                            className={emailTouched && emailError ? "border-red-500" : ""}
                            required
                        />
                        {emailTouched && emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <Button 
                        onClick={() => {
                            handleSubmit()
                        }}
                        type="button" 
                        variant="default" 
                        className="w-full"
                        disabled={!isFormValid}
                    >
                        {
                            requestStatus === "loading" ? <Spinner /> : 
                            requestStatus === "success" ? "You are on the waitlist" : 
                            requestStatus === "error" ? "Error, try again" : 
                            "Signup"
                         }
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}   