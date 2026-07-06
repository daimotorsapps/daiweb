import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useModelos } from "../../../hooks/useModelos";
import { desktopNavLinks, modelosDropdown, ModelItem } from "../../../data/navLinks";

export const DesktopNavMenu = () => {
    const [modelsOpen, setModelsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const openTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

    const clearTimers = useCallback(() => {
        clearTimeout(openTimeoutRef.current);
        clearTimeout(closeTimeoutRef.current);
    }, []);

    const handleMouseEnter = useCallback(() => {
        clearTimers();
        openTimeoutRef.current = setTimeout(() => setModelsOpen(true), 150);
    }, [clearTimers]);

    const handleMouseLeave = useCallback(() => {
        clearTimers();
        closeTimeoutRef.current = setTimeout(() => setModelsOpen(false), 250);
    }, [clearTimers]);

    return (
        <nav
            aria-label="Main"
            className="flex basis-0 grow min-h-0 min-w-0 gap-x-[15.7143px]"
        >
            <ul
                role="list"
                className="items-stretch flex basis-0 grow justify-center list-none min-h-0 min-w-0 pl-0"
            >
                <li
                    ref={dropdownRef}
                    className="flex min-h-0 min-w-0 relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="h-full min-h-0 min-w-0 text-left w-full">
                        <button
                            onClick={() => setModelsOpen(!modelsOpen)}
                            aria-haspopup="true"
                            aria-expanded={modelsOpen}
                            className="relative items-center flex gap-x-[11.7143px] basis-0 grow h-full justify-start -outline-offset-2 text-nowrap align-top w-full z-[2] mx-auto px-[15.7143px] transition-opacity duration-200 hover:opacity-70"
                        >
                            <div className="min-h-0 min-w-0 text-nowrap text-[16px] font-medium">
                                Modelos
                            </div>
                            <svg
                                className={`w-3 h-3 transition-transform duration-200 ${modelsOpen ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {modelsOpen && (
                        <div
                            className="absolute top-full left-0 bg-stone-900 min-w-[600px] z-50 border-t border-white/10 animate-fade-in shadow-xl origin-top rounded-b-lg overflow-hidden"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex">
                                <div className="w-[180px] border-r border-white/10 py-3 px-2 flex flex-col">
                                    {modelosDropdown.map((cat, index) => (
                                        <button
                                            key={cat.category}
                                            onMouseEnter={() => setActiveTab(index)}
                                            className={`text-left py-2 px-3 text-[15px] transition-all duration-200 rounded ${
                                                activeTab === index
                                                    ? "text-white bg-white/10"
                                                    : "text-white/70 hover:text-white hover:bg-white/5"
                                            }`}
                                        >
                                            {cat.category}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex-1 py-3 px-4 min-w-[380px]">
                                    <div className="text-[13px] text-white/40 uppercase tracking-wider mb-2 px-1">
                                        {modelosDropdown[activeTab].category}
                                    </div>
                                    <div className="flex flex-col">
                                        {modelosDropdown[activeTab].models.map((model) => (
                                            <ModelDropdownItem
                                                key={`${model.categoryKey}-${model.index}`}
                                                model={model}
                                                setModelsOpen={setModelsOpen}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
                {desktopNavLinks.map((link) => (
                    <li key={link.label} className="flex min-h-0 min-w-0">
                        <Link
                            to={link.to}
                            className="relative items-center flex gap-x-[11.7143px] basis-0 grow h-full justify-start max-w-full min-h-0 min-w-0 -outline-offset-2 w-full z-[2] px-[15.7143px] transition-all duration-200 hover:opacity-70"
                        >
                            <div className="min-h-0 min-w-0 text-[16px] font-medium">
                                {link.label}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function ModelDropdownItem({ model, setModelsOpen }: { model: ModelItem; setModelsOpen: (open: boolean) => void }): JSX.Element {
    const { setModel } = useModelos(s => s)
    const handleClickModelos = () => {
        setModel(model.categoryKey, model.index)
        setModelsOpen(false)
    }

    return (
        <Link
            className="flex items-center gap-3 py-2.5 px-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 rounded"
            to="/#modelos"
            onClick={handleClickModelos}
        >
            <img
                src={model.imageSrc}
                alt={model.label}
                className="w-20 h-12 object-contain flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
                <div className="text-[15px] font-medium truncate">
                    {model.label}
                    {model.variant && (
                        <span className="ml-1.5 text-white/50 font-normal">{model.variant}</span>
                    )}
                </div>
                <div className="text-[12px] text-white/40 mt-0.5">
                    {model.transmission}
                </div>
            </div>
            <svg
                className="w-4 h-4 text-white/30 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </Link>
    )
}
