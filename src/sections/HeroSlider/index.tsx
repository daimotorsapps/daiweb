import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
type Slide = {
    ariaLabel: string;
    desktopSrc: string;
    mobileSrc: string;
    ctaHref?: string;
    ctaText?: string;
};
const slides: Slide[] = [
    {
        ariaLabel: "1 / 7",
        desktopSrc: "./public/img/banner-mundial.jpg",
        mobileSrc: "./public/img/banner-mundial-mobile.png",
    },
    {
        ariaLabel: "2 / 7",
        desktopSrc: "./public/img/home-creta.jpg",
        mobileSrc: "./public/img/home-creta-mobile.jpg",
        /* ctaHref: "#modelos",
        ctaText: "MÁS INFORMACIÓN", */
    },
    {
        ariaLabel: "3 / 7",
        desktopSrc: "./public/img/banner-moviendo-historias.webp",
        mobileSrc: "./public/img/banner-moviendo-historias-mobile.webp",
    },
    {
        ariaLabel: "4 / 7",
        desktopSrc: "./public/img/grand-i10-gl.jpg",
        mobileSrc: "./public/img/grand-i10-gl-mobile.jpg",
        /* ctaHref: "#inicio",
        ctaText: "Cotizar", */
    },
    {
        ariaLabel: "5 / 7",
        desktopSrc: "./public/img/grand-i10-sedan.jpg",
        mobileSrc: "./public/img/grand-i10-sedan-mobile.jpg",
        /* ctaHref: "#inicio",
        ctaText: "Cotizar", */
    },
    {
        ariaLabel: "6 / 7",
        desktopSrc: "./public/img/tucson-premium.jpg",
        mobileSrc: "./public/img/tucson-premium-mobile.jpg",
        /* ctaHref: "#inicio",
        ctaText: "Cotizar", */
    },
    {
        ariaLabel: "7 / 7",
        desktopSrc: "./public/img/grand-i10-gl-mt.jpg",
        mobileSrc: "./public/img/grand-i10-gl-mt-mobile.jpg",
        /*  ctaHref: "#inicio",
         ctaText: "Cotizar", */
    },
];

export const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const goTo = useCallback((idx: number) => {
        if (animating) return;
        setAnimating(true);
        setCurrent((idx + slides.length) % slides.length);
        setTimeout(() => setAnimating(false), 600);
    }, [animating]);
    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);
    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [current]);
    const slide = slides[current];
    return (
        <div className="relative w-full overflow-hidden" style={{ minHeight: "750px" }}>
            {/* Slide */}
            <section
                key={current}
                role="group"
                aria-label={slide.ariaLabel}
                className="relative text-white items-stretch bg-stone-900 flex flex-col shrink-0 justify-end w-full"
                style={{ minHeight: "750px" }}
            >
                {/* Background images */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Desktop */}
                    <img
                        src={slide.desktopSrc}
                        alt=""
                        className="absolute inset-0 h-full w-full object-fill hidden md:block"
                        style={{ animation: "hero-reveal 0.9s ease-out forwards" }}
                    />
                    {/* Mobile */}
                    <img
                        src={slide.mobileSrc}
                        alt=""
                        className="absolute inset-0 h-full w-full object-contain md:hidden"
                        style={{ animation: "hero-reveal 0.9s ease-out forwards" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                </div>
                {/* CTA */}
                {slide.ctaHref && slide.ctaText && (
                    <div
                        className="relative items-center flex flex-col justify-center max-w-[1440px] w-[calc(100%_-_35.1429px)] z-[1] mx-auto pb-24 md:w-[calc(100%_-_86.8571px)] md:pb-40"
                        style={{ animation: "fade-in 0.7s ease-out 0.3s forwards", opacity: 0 }}
                    >
                        <div className="items-center flex justify-center w-full">
                            <a
                                href={slide.ctaHref}
                                className="relative text-stone-900 items-center bg-white flex h-full justify-center gap-x-2 gap-y-2 align-middle border px-6 py-[14.4px] border-solid border-white transition-all duration-200 hover:bg-stone-100 active:scale-95"
                            >
                                {slide.ctaText}
                            </a>
                        </div>
                    </div>
                )}
                {/* Spacer */}
                <div className="relative h-[66px] min-h-auto min-w-auto md:h-[105px]" />
            </section>
            {/* Prev/next buttons */}
            <div className="absolute inset-x-0 flex justify-between items-center px-4 md:px-8 pointer-events-none z-[99]" style={{ top: "50%", transform: "translateY(-50%)" }}>
                <button
                    onClick={prev}
                    aria-label="Diapositiva anterior"
                    className="pointer-events-auto relative text-stone-900 items-center aspect-square bg-white/80 flex justify-center align-middle w-12 border rounded-full border-solid border-stone-900/20 transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95 shadow-md"
                >
                        <FontAwesomeIcon icon={faArrowLeft} className="h-full w-[36%]" />
                        
                </button>
                <button
                    onClick={next}
                    aria-label="Diapositiva siguiente"
                    className="pointer-events-auto relative text-stone-900 items-center aspect-square bg-white/80 flex justify-center align-middle w-12 border rounded-full border-solid border-stone-900/20 transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95 shadow-md"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="h-full w-[36%]" />
                </button>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-[99]">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Ir a diapositiva ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                    />
                ))}
            </div>
        </div>
    );
};





