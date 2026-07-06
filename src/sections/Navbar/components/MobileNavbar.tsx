import { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarLogo } from "./NavbarLogo";
import { MobileMenuToggle } from "./MobileMenuToggle";
import { mobileNavLinks } from "../../../data/navLinks";

export const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    return (
        <div
            role="banner"
            className="relative block z-[1] md:hidden"
        >
            <div className="max-w-[1440px] w-[calc(100%_-_35.1429px)] mx-auto">
                <div className="relative flex h-20 justify-between items-center pointer-events-auto w-full z-[2] mx-auto px-[28.1964px]">
                    <NavbarLogo
                        anchorClassName="min-h-auto min-w-auto w-40"
                        divClassName="min-h-auto min-w-auto"
                    />
                    <MobileMenuToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
                </div>
            </div>

            {isOpen && (
                <div className="bg-stone-900 w-full animate-fade-in">
                    <nav className="max-w-[1440px] w-[calc(100%_-_35.1429px)] mx-auto px-[28.1964px] py-6">
                        <ul role="list" className="flex flex-col gap-y-1 list-none p-0 m-0">
                            {mobileNavLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        onClick={handleClose}
                                        className="block text-white/80 hover:text-white hover:bg-white/10 py-3 px-3 rounded transition-all duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};
