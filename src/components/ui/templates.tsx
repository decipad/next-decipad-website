import { ArrowRight } from "./icons/arrow-right"

const templates = [
    "Utilization report",
    "Sales dashboard",
    "Bonus calculation",
    "Revenue forecast",
]

export const Templates = () => {
    return (
        <div className="flex flex-wrap gap-2 justify-center mt-4"> 
            {templates.map((template) => (
                <div key={template} className="w-[180px] flex items-center justify-center gap-1.5 bg-white border border-slate-200 text-slate-500 rounded-full px-4 py-1.5">
                    <p className="mt-[2px]">{template}</p>
                    <ArrowRight />
                </div>
            ))}
        </div>
    )
}