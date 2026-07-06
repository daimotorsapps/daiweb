export const bannerConfig = {
  eventDate: "2026-06-11T15:00:00-05:00",
  title: "Copa Mundial de la FIFA 2026™",
  subtitle: "11 de junio - 19 de julio de 2026",
  sponsorText: "Patrocinador oficial",
  buttonText: "Ver partidos",
  buttonLink: "/calendario",
  logoSrc: "/img/logofifa.png",
  logoAlt: "Logo FIFA 2026",
  backgroundSrc: "/img/banner-mundial.jpg",
} as const;

export type BannerConfig = typeof bannerConfig;
