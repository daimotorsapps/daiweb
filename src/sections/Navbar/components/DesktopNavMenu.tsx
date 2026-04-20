import { useState } from "react";

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

export const DesktopNavMenu = () => {
    const [modelsOpen, setModelsOpen] = useState(false);
    const navLinks = [
        /* { href: "#modelos", label: "Comparar" },
        { href: "#inicio", label: "Financiamiento" }, */
        { href: "#nosotros", label: "Nosotros" },
        { href: "#novedades", label: "Contáctanos" },        
    ];
    return (
        <nav
            aria-label="Main"
            className="box-border gap-x-[14.0982px] flex basis-0 grow min-h-0 min-w-0 md:gap-x-[15.7143px] md:min-h-auto md:min-w-auto"
        >
            <ul
                role="list"
                className="items-stretch box-border flex basis-0 grow justify-center list-none min-h-0 min-w-0 pl-0 md:min-h-auto md:min-w-auto"
            >
                {/* Modelos dropdown */}
                <li className="box-border flex min-h-0 min-w-0 md:min-h-auto md:min-w-auto relative">
                    <div className="box-border h-full min-h-0 min-w-0 text-left w-full md:min-h-auto md:min-w-auto">
                        <button
                            onClick={() => setModelsOpen(!modelsOpen)}
                            className="relative items-center box-border gap-x-[10.0982px] flex basis-0 grow h-full justify-start -outline-offset-2 text-nowrap align-top w-full z-[2] mx-auto px-[14.0982px] md:gap-x-[11.7143px] md:px-[15.7143px] transition-opacity duration-200 hover:opacity-70"
                        >
                            <div className="box-border min-h-0 min-w-0 text-nowrap md:min-h-auto md:min-w-auto">
                                Modelos
                            </div>
                            {/* <div className="box-border shrink-0 min-h-0 min-w-0 text-nowrap w-4 ml-auto md:min-h-auto md:min-w-auto">
                                <img
                                    src="https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-2.svg"
                                    alt="Icon"
                                    className={`box-border h-full text-nowrap transform align-baseline w-full transition-transform duration-300 md:rotate-90 ${modelsOpen ? "rotate-180" : ""}`}
                                />
                            </div> */}
                        </button>
                    </div>

                    {modelsOpen && (<div className="absolute top-full left-0 bg-stone-900 p-4 min-w-[160px] z-50 border-t border-white/10 animate-fade-in shadow-xl">
                        {[{ href: "#modelos", label: "Hatchback" }, { href: "#modelos", label: "Sedán" }, { href: "#modelos", label: "SUV" }, { href: "#modelos", label: "MVP" },].map((item) => (<a key={item.label} href={item.href} onClick={() => setModelsOpen(false)}
                            className="block py-2 px-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 rounded" >
                            {item.label} </a>
                        ))} </div>
                    )}</li>
                {navLinks.map((link) => (<li key={link.label} className="box-border flex min-h-0 min-w-0 md:min-h-auto md:min-w-auto">
                    <a href={link.href}
                        className="relative items-center box-border gap-x-[10.0982px] flex basis-0 grow h-full justify-start max-w-full min-h-0 min-w-0 -outline-offset-2 w-full z-[2] px-[14.0982px] md:gap-x-[11.7143px] md:min-h-auto md:min-w-auto md:px-[15.7143px] transition-opacity duration-200 hover:opacity-70" >
                        <div className="box-border min-h-0 min-w-0 md:min-h-auto md:min-w-auto">
                            {link.label} </div>
                    </a>
                </li>
                ))} </ul>
            <ul role="list" className="box-border flex shrink-0 justify-start list-none min-h-0 min-w-0 pl-0 md:min-h-auto md:min-w-auto" >
                <li className="box-border flex min-h-0 min-w-0 md:min-h-auto md:min-w-auto">
                    {/* <div className="box-border h-full min-h-0 min-w-0 text-left w-full md:min-h-auto md:min-w-auto">
                        <button className="relative items-center box-border gap-x-[10.0982px] flex basis-0 grow h-full justify-start -outline-offset-2 text-nowrap align-top w-full z-[2] mx-auto px-[14.0982px] md:gap-x-[11.7143px] md:px-[15.7143px] transition-opacity duration-200 hover:opacity-70">
                            <div className="box-border min-h-0 min-w-0 text-nowrap w-[17.6px] md:min-h-auto md:min-w-auto">
                                 <img
                                    src="https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-3.svg" alt="Buscar" className="box-border h-full text-nowrap align-baseline w-full"
                                /> 

                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            </div>
                        </button>
                    </div> */}
                </li>
                <li className="relative items-start box-border flex flex-col justify-center min-h-0 min-w-0 text-center z-[2] md:min-h-auto md:min-w-auto">
                    <div className="relative box-border min-h-0 min-w-0 md:min-h-auto md:min-w-auto">
                        {/* <a href="#inicio" className="relative text-white items-center bg-[rgb(14,43,92)] box-border gap-x-2 flex h-full justify-center gap-y-2 align-middle border px-6 py-[14.4px] border-solid border-[rgb(14,43,92)] transition-all duration-200 hover:bg-[rgb(25,60,120)] hover:border-[rgb(25,60,120)] active:scale-95" >
                            <div className="relative box-border flow-root min-h-0 min-w-0 md:min-h-auto md:min-w-auto"> Cotizar </div>
                        </a> */}
                    </div>
                </li>
            </ul>
        </nav >
    );
}