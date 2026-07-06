import { Link } from "react-router-dom";
import { bannerConfig } from "../data/bannerConfig";
import { useNextMatch } from "../../../hooks/useNextMatch";

export default function MobileBanner() {
  const nextMatchId = useNextMatch();
  const buttonLink = nextMatchId ? `${bannerConfig.buttonLink}?highlight=${nextMatchId}` : bannerConfig.buttonLink;
  return (
    <section className="relative flex flex-col w-full gap-4 py-4 md:hidden">
      <div className="flex items-center gap-3">
        <img
          src={bannerConfig.logoSrc}
          alt={bannerConfig.logoAlt}
          className="w-16 h-auto"
        />
        <div className="flex flex-col">
          <span className="text-lg font-bold text-white">
            {bannerConfig.title}
          </span>
          <span className="text-sm text-blue-200">
            {bannerConfig.subtitle}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-white font-semibold text-sm">
          {bannerConfig.sponsorText}
        </span>

        <Link
          to={buttonLink}
          className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-4 py-2 text-sm rounded-lg font-semibold hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out"
        >
          {bannerConfig.buttonText}
        </Link>
      </div>
    </section>
  );
}
