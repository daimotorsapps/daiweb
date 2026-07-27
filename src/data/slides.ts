export type Slide = {
    ariaLabel: string;
    alt: string;
    desktopSrc: string;
    mobileSrc: string;
    ctaHref?: string;
    ctaText?: string;
};

export const slides: Slide[] = [
    {
        ariaLabel: "Slide 1 de 6: Hyundai Creta",
        alt: "Hyundai Creta - Estilo y tecnología",
        desktopSrc: "/img/home-creta.jpg",
        mobileSrc: "/img/home-creta-mobile.jpg",
    },
    {
        ariaLabel: "Slide 2 de 6: Moviendo Historias",
        alt: "Hyundai Moviendo Historias",
        desktopSrc: "/img/banner-moviendo-historias.webp",
        mobileSrc: "/img/banner-moviendo-historias-mobile.webp",
    },
    {
        ariaLabel: "Slide 3 de 6: Hyundai Grand i10 GL",
        alt: "Hyundai Grand i10 GL",
        desktopSrc: "/img/grand-i10-gl.jpg",
        mobileSrc: "/img/grand-i10-gl-mobile.jpg",
    },
    {
        ariaLabel: "Slide 4 de 6: Hyundai Grand i10 Sedan",
        alt: "Hyundai Grand i10 Sedan",
        desktopSrc: "/img/grand-i10-sedan.jpg",
        mobileSrc: "/img/grand-i10-sedan-mobile.jpg",
    },
    {
        ariaLabel: "Slide 5 de 6: Hyundai Tucson Premium",
        alt: "Hyundai Tucson Premium",
        desktopSrc: "/img/tucson-premium.jpg",
        mobileSrc: "/img/tucson-premium-mobile.jpg",
    },
    {
        ariaLabel: "Slide 6 de 6: Hyundai Grand i10 GL MT",
        alt: "Hyundai Grand i10 GL MT",
        desktopSrc: "/img/grand-i10-gl-mt.jpg",
        mobileSrc: "/img/grand-i10-gl-mt-mobile.jpg",
    },
];
