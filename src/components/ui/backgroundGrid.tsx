import { cn } from "@/lib/utils";

const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 z-[-1]">
        <div className="relative flex h-full w-full items-center justify-center bg-slate-50 dark:bg-black">
            <div
                className={cn(
                "absolute inset-0 opacity-70",
                "[background-size:100px_100px]",
                "[background-position:center_top]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        </div>
    </div>
  );
};

export default BackgroundGrid;