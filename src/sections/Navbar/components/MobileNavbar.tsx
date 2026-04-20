import { useState } from "react";
import { NavbarLogo } from "./NavbarLogo";
const navLinks = [
    { href: "#modelos", label: "Modelos" },
    { href: "#modelos", label: "Comparar" },
    { href: "#inicio", label: "Financiamiento" },
    { href: "#noticias", label: "Noticias" },
    { href: "#inicio", label: "Nosotros" },
    { href: "#concesionarios", label: "Concesionarios" },
];
export const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    return (
        <div
            role="banner"
            className="relative box-border block z-[1] md:hidden"
        >
            {/* Top bar */}
            <div className="box-border max-w-[1440px] w-[calc(100%_-_35.1429px)] mx-auto">
                <div className="relative box-border gap-x-[14.0982px] flex h-20 justify-between pointer-events-auto w-full z-[2] mx-auto px-[28.1964px]">
                    <NavbarLogo
                        anchorClassName="min-h-auto min-w-auto w-40"
                        divClassName="min-h-auto min-w-auto"
                    />
                    {/* <div className="flex items-center">
                        <MobileMenuToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
                    </div> */}
                </div>
            </div>
            {/* Slide-down overlay */}
            <div
                className={`fixed inset-x-0 top-[80px] bg-stone-900 z-50 overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}`}
                style={{ maxHeight: isOpen ? "calc(100vh - 80px)" : "0" }}
            >
                <nav aria-label="Mobile menu" className="max-w-[1440px] w-[calc(100%_-_35.1429px)] mx-auto px-[28.1964px] pt-4 pb-8">
                    {/* Search form */}
                    <form
                        className="flex mb-6 border-b border-white/20 pb-1"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <button type="submit" className="items-center bg-transparent flex justify-center -outline-offset-2 -ml-1 px-3 py-2">
                            <img
                                src="https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-6.svg"
                                alt="Buscar"
                                className="box-border align-baseline w-[17.6px]"
                            />
                        </button>
                        <label className="box-border block w-full">
                            <input
                                name="query"
                                placeholder="Buscar..."
                                type="search"
                                className="appearance-none bg-transparent box-border block h-[46.4px] leading-[22.8571px] max-w-full outline-none text-start align-middle w-full p-0 text-white placeholder:text-white/40"
                            />
                        </label>
                    </form>
                    {/* Nav links */}
                    <ul role="list" className="list-none pl-0 mb-6">
                        {navLinks.map((link, i) => (
                            <li
                                key={link.label + i}
                                className="flex border-b border-white/10 last:border-b-0 animate-fade-in"
                                style={{ animationDelay: isOpen ? `${i * 50}ms` : "0ms" }}
                            >
                                <a
                                    href={link.href}
                                    onClick={handleClose}
                                    className="relative items-center box-border flex basis-0 grow justify-start max-w-full -outline-offset-2 w-full z-[2] py-4 text-white transition-all duration-200 hover:pl-2 hover:text-white/70"
                                >
                                    <span>{link.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* CTA */}
                    <a
                        href="#inicio"
                        onClick={handleClose}
                        className="block text-center text-white bg-[rgb(14,43,92)] border border-[rgb(14,43,92)] px-6 py-4 transition-all duration-200 hover:bg-[rgb(25,60,120)] active:scale-95"
                    >
                        Cotizar
                    </a>
                </nav>
            </div>
        </div>
    );
};