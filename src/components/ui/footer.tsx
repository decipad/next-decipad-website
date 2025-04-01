import { Button } from "./button"

export const Footer = () => {
    return (
        <div className="py-8 lg:py-0 lg:h-28 w-full flex items-center justify-center lg:justify-between flex-wrap">
            <div className="text-sm text-muted-foreground">© Decipad 2025 · Designed on the internet</div>
            <div className="flex">
                <a target="_blank" href="https://app.decipad.com/docs/privacy?_gl=1*138mpx4*_gcl_au*MTcyNTAwNTEyOS4xNzQwMTI0NDM0*_ga*MTc3MTIzOTYyMi4xNzQwMTI0Mzk2*_ga_KXQHYKE1X6*MTc0MzUwMDk0Mi4zMi4wLjE3NDM1MDA5NDMuNTkuMC4w"><Button variant="link">Privacy policy</Button></a>
                <a target="_blank" href="https://app.decipad.com/docs/terms?_gl=1*1uocr1p*_gcl_au*MTcyNTAwNTEyOS4xNzQwMTI0NDM0*_ga*MTc3MTIzOTYyMi4xNzQwMTI0Mzk2*_ga_KXQHYKE1X6*MTc0MzUwMDk0Mi4zMi4xLjE3NDM1MDA5NzkuMjMuMC4w"><Button variant="link">Terms of service</Button></a>
            </div>
        </div>
    )
}