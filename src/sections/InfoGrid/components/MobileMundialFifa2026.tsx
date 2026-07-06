import { Link } from "react-router-dom";

const MobileMundialFifa2026 = () => {
  return (
    <section className="relative flex flex-col w-full gap-4 py-4 md:hidden">
      <div className="flex items-center gap-3">
        <img
          src="/img/logofifa.png"
          alt="World Cup 2026"
          className="w-16 h-auto"
        />
        <div className="flex flex-col">
          <span className="text-lg font-bold text-white">
            Copa Mundial de la FIFA 2026™
          </span>
          <span className="text-sm text-blue-200">
            11 de junio - 19 de julio de 2026
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-white font-semibold text-sm">
          Patrocinador oficial
        </span>

        <Link
          to="/calendario"
          className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-4 py-2 text-sm rounded-lg font-semibold hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out"
        >
          Ver partidos
        </Link>
      </div>
    </section>
  );
};

export default MobileMundialFifa2026;
