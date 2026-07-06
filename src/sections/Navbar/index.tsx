import { useState, useEffect } from "react";
import { DesktopNavbar } from "@/sections/Navbar/components/DesktopNavbar";
import { MobileNavbar } from "@/sections/Navbar/components/MobileNavbar";

export const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setHidden(false);
            } else if (currentScrollY > prevScrollY && currentScrollY > 80) {
                setHidden(true);
            } else if (currentScrollY < prevScrollY) {
                setHidden(false);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);

    return (
        <div
            className={`fixed text-white bg-stone-900 z-[1000] top-0 inset-x-0 transition-transform duration-300 ease-in-out ${
                hidden ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            {/* <a href="#main" className="absolute text-stone-900 bg-gray-200 block max-w-50 -outline-offset-2 pointer-events-auto -translate-x-[200%] focus:translate-x-0 z-[2] m-2 p-2 rounded-lg left-0 top-0 transition-transform duration-200" >
                <div className="text-sm leading-[21px]">
                    Skip to main content
                </div>
            </a> */}
            <DesktopNavbar />
            <MobileNavbar />
        </div>
    );
};
