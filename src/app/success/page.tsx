import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import Image from "next/image";

export default function SuccessPage() {
    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] px-3 md:px-8 max-w-[1100px] mx-auto box-border">
            <Header />
            <div className="flex-1 flex flex-col items-center justify-center gap-8 max-w-[1100px] w-full mx-auto mb-20">
                <h1 className="text-5xl leading-[1.1] font-medium text-center">Thank you for joining the waitlist!</h1>
                <Image 
                  src="/example_page.png" 
                  alt="Example page" 
                  width={1200} 
                  height={1000}
                  className="w-full max-w-[1100px] h-auto"
                  priority
                />
            </div>
            <Footer />
        </div>
    )
}