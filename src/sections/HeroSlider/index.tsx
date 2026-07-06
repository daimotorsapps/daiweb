import { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { slides } from "../../data/slides";

export const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // Create slides with clones for infinite loop
    const clonedSlides = [
        { ...slides[slides.length - 1], isClone: true, cloneId: 'prev' },
        ...slides.map((s, i) => ({ ...s, isClone: false, index: i })),
        { ...slides[0], isClone: true, cloneId: 'next' }
    ];

    const goTo = useCallback((idx: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent(idx);
    }, [isTransitioning]);

    const next = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent((prev) => prev + 1);
    }, [isTransitioning]);

    const prev = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent((prev) => prev - 1);
    }, [isTransitioning]);

    // Handle transition end for infinite loop
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const handleTransitionEnd = () => {
            if (current === slides.length) {
                // At cloneFirst (index slides.length), jump to real slide 0
                track.style.transition = 'none';
                track.style.transform = `translateX(-100%)`;
                track.offsetHeight; // force reflow
                track.style.transition = '';
                setCurrent(0);
                setIsTransitioning(false);
            } else if (current === -1) {
                // At cloneLast (index -1), jump to real last slide
                track.style.transition = 'none';
                track.style.transform = `translateX(-${slides.length * 100}%)`;
                track.offsetHeight;
                track.style.transition = '';
                setCurrent(slides.length - 1);
                setIsTransitioning(false);
            } else {
                setIsTransitioning(false);
            }
        };

        track.addEventListener('transitionend', handleTransitionEnd);
        return () => track.removeEventListener('transitionend', handleTransitionEnd);
    }, [current]);

    // Autoplay
    useEffect(() => {
        timerRef.current = setInterval(() => {
            if (!isTransitioning) next();
        }, 5000);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [next, isTransitioning]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [next, prev]);

    return (
        <div className="relative w-full overflow-hidden h-[calc(56.25vw-200px)]">
            <section
                role="group"
                aria-label="Hero slider"
                className="relative text-white bg-stone-900 w-full h-full"
            >
                <div 
                    ref={trackRef}
                    className="flex h-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${(current + 1) * 100}%)` }}
                >
                    {clonedSlides.map((slide, index) => (
                        <div key={`${slide.cloneId || slide.index}-${index}`} className="relative h-full w-full flex-shrink-0 min-w-[100%]">
                            <img
                                src={slide.desktopSrc}
                                alt={slide.alt}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto hidden md:block"
                                style={{ animation: (!slide.isClone && index - 1 === current) ? "hero-reveal 0.9s ease-out forwards" : "none" }}
                            />
                            <img
                                src={slide.mobileSrc}
                                alt={slide.alt}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-contain md:hidden"
                                style={{ animation: (!slide.isClone && index - 1 === current) ? "hero-reveal 0.9s ease-out forwards" : "none" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                        </div>
                    ))}
                </div>
            </section>

            <div className="absolute inset-0 flex justify-between pointer-events-none z-50">
                <button
                    onClick={prev}
                    aria-label="Diapositiva anterior"
                    className="pointer-events-auto w-20 md:w-28 h-full bg-transparent hover:bg-white/5 hover:backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="text-white text-xl md:text-2xl drop-shadow-lg" />
                </button>
                <button
                    onClick={next}
                    aria-label="Diapositiva siguiente"
                    className="pointer-events-auto w-20 md:w-28 h-full bg-transparent hover:bg-white/5 hover:backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="text-white text-xl md:text-2xl drop-shadow-lg" />
                </button>
            </div>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-50">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Ir a diapositiva ${i + 1}`}
                        aria-current={i === (current % slides.length + slides.length) % slides.length ? "true" : undefined}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === (current % slides.length + slides.length) % slides.length ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                    />
                ))}
            </div>
        </div>
    );
};
