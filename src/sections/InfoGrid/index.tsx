import MundialFifa2026 from "./components/MundialFifa2026";
import MobileMundialFifa2026 from "./components/MobileMundialFifa2026";

export default function InfoGrid() {
    return (
        <div className="box-border caret-transparent p-4 gap-x-0 flex min-h-[auto] md:max-h-30 min-w-[auto] gap-y-0 w-full  text-white bg-blue-950">
            <MundialFifa2026 />
            <MobileMundialFifa2026 />
        </div>
    );
};