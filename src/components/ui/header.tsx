import Image from "next/image"
import { Waitlist } from "./waitlist"
import { Button } from "./button"

export const Header = () => {
    return (
        <div className="h-[100px] w-full flex items-center justify-between">
            <Image src="/decipad.svg" alt="Decipad" width={100} height={24} />
            <div className="flex gap-2">
                <a target="_blank" href="https://decipad.com"><Button variant="ghost">Legacy App</Button></a>
                <Waitlist>
                    <Button variant="outline">Get early access</Button>
                </Waitlist>
            </div>
            
      </div>
    )
}