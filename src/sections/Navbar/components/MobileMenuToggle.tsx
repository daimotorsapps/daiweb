export type MobileMenuToggleProps = {
    isOpen: boolean;
    onToggle: () => void;
};

export const MobileMenuToggle = ({ isOpen, onToggle }: MobileMenuToggleProps) => {
    return (
        <button
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={onToggle}
            className="relative text-2xl shrink-0 float-right leading-9 min-h-auto min-w-auto w-8 z-[2] cursor-pointer"
        >
            <div className="relative items-center flex flex-col h-full justify-center gap-y-[7px] w-full">
                <span
                    className={`bg-white block shrink-0 h-[1.5px] w-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[8.5px]" : ""}`}
                />
                <span
                    className={`bg-white block shrink-0 h-[1.5px] w-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`}
                />
                <span
                    className={`bg-white block shrink-0 h-[1.5px] w-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[8.5px]" : ""}`}
                />
            </div>
        </button>
    );
};
