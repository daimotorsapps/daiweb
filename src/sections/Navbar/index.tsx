import { useState, useEffect, useRef } from "react";
import { DesktopNavbar } from "@/sections/Navbar/components/DesktopNavbar";
import { MobileNavbar } from "@/sections/Navbar/components/MobileNavbar";

export const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const prevScrollYRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setHidden(false);
            } else if (currentScrollY > prevScrollYRef.current && currentScrollY > 80) {
                setHidden(true);
            } else if (currentScrollY < prevScrollYRef.current) {
                setHidden(false);
            }

            prevScrollYRef.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed text-white bg-stone-900 z-[1000] top-0 inset-x-0 transition-transform duration-300 ease-in-out ${
                hidden ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            <DesktopNavbar />
            <MobileNavbar />
        </div>
    );
};
