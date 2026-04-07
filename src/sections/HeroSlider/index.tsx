import { useState, useEffect, useCallback } from "react";
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
 desktopSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69aef11216c9bb05ee04f384_Banner-Home-Creta_.jpg",
 mobileSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69aef9727a78dd12fc7cc3d5_Banner-Home-Creta-Mobile.jpg",
 ctaHref: "#modelos",
 ctaText: "MÁS INFORMACIÓN",
 },
{
 ariaLabel: "2 / 7",
 desktopSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69aef9a45bdb32270cb9a7e1_Hyundai_Banner2_.jpg",
 mobileSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69aef9ba9b2207c2e5a6807e_Banner_Hyundai_Mobile_.jpg",
 },
{
 ariaLabel: "3 / 7",
 desktopSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69b0eae7366431631ccdfb1b_Banner-Garantía_(1).jpg",
 mobileSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69b0eae715fa7409a027a0ab_Banner-Garantía-mobile.jpg",
 },
{
 ariaLabel: "4 / 7",
 desktopSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69b0eba373010273b41083b3_Banner-Grand-i10-GL-AT.jpg",
 mobileSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69b0eba3a39a93b7a245e2bd_Banner-cuotas-Grand-i10-GL-AT.jpg",
 ctaHref: "#inicio",
 ctaText: "Cotizar",
 },
{
 ariaLabel: "5 / 7",
 desktopSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69b0eca0e3ad90be5eb8ffb6_Banner-Grand-i10-SEDÁN.jpg",
 mobileSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69b0eca05d918e3f2a4d7d28_Banner-cuotas-Grand-i10-SEDÁN.jpg",
 ctaHref: "#inicio",
 ctaText: "Cotizar",
 },
{
 ariaLabel: "6 / 7",
 desktopSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69b0eca0d9dc691c924fbf89_Banner-Tucson-Premium.jpg",
 mobileSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69b0eca04284c4cc55356e90_Banner-cuotas-Tucson.jpg",
 ctaHref: "#inicio",
 ctaText: "Cotizar",
 },
{
 ariaLabel: "7 / 7",
 desktopSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69b0eca0ed42096e9cd9e5c8_Banner-Grand-i10-GL-MT.jpg",
 mobileSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69b0eca09af3f6407d838439_Banner-cuotas-Grand-i10-GL-MT.jpg",
 ctaHref: "#inicio",
 ctaText: "Cotizar",
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
 <div className="relative w-full overflow-hidden" style={{ minHeight: "600px" }}>
 {/* Slide */}
<section
 key={current}
 role="group"
aria-label={slide.ariaLabel}
 className="relative text-white items-stretch bg-stone-900 flex flex-col shrink-0 justify-end w-full"
style={{ minHeight: "600px" }}
 >
 {/* Background images */}
<div className="absolute inset-0 overflow-hidden">
 {/* Desktop */}
<img
 src={slide.desktopSrc}
 alt=""
className="absolute inset-0 h-full w-full object-cover hidden md:block"
style={{ animation: "hero-reveal 0.9s ease-out forwards" }}
 />
{/* Mobile */}
<img
 src={slide.mobileSrc}
 alt=""
className="absolute inset-0 h-full w-full object-cover md:hidden"
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
 <img
 src="https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-7.svg"
alt=""
className="h-full w-[36%] -scale-100"
 />
 </button>
<button
 onClick={next}
 aria-label="Diapositiva siguiente"
className="pointer-events-auto relative text-stone-900 items-center aspect-square bg-white/80 flex justify-center align-middle w-12 border rounded-full border-solid border-stone-900/20 transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95 shadow-md"
 >
 <img
 src="https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-8.svg"
alt=""
className="h-full w-[36%]"
 />
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





