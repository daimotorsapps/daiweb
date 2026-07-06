import { Link } from "react-router-dom";
import { bannerConfig } from "../data/bannerConfig";

export default function DesktopBanner() {
  return (
    <div className="relative box-border hidden md:flex w-full items-center justify-between bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950">
      <div className="absolute inset-0 opacity-10">
        <img
          src={bannerConfig.backgroundSrc}
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      <div className="relative flex w-full items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <img
            src={bannerConfig.logoSrc}
            alt={bannerConfig.logoAlt}
            className="w-12 h-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">
              {bannerConfig.title}
            </span>
            <span className="text-blue-200">
              {bannerConfig.subtitle}
            </span>
          </div>
        </div>

        {/* <div className="text-white">
          <CountdownTimer variant="desktop" />
        </div> */}

        <div className="flex items-center gap-6">
          <div className="text-white text-lg font-semibold text-right">
            {bannerConfig.sponsorText.split(" ").map((word, i) => (
              <span key={i}>{word}{i === 0 ? " " : ""}{i === 0 && <br />}</span>
            ))}
          </div>

          <Link
            to={bannerConfig.buttonLink}
            className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out"
          >
            {bannerConfig.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
