import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getTimeLeft = () => {
  const eventDate = new Date("2026-06-11T15:00:00-05:00");
  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 text-center">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.days}</span>
        <span className="text-xs text-blue-200">días</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.hours}</span>
        <span className="text-xs text-blue-200">horas</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.minutes}</span>
        <span className="text-xs text-blue-200">min</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{timeLeft.seconds}</span>
        <span className="text-xs text-blue-200">seg</span>
      </div>
    </div>
  );
}

export default function MundialFifa2026(): JSX.Element {
  return (
    <div className="relative box-border hidden md:flex w-full items-center justify-between bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/img/mundial-bg.jpg"
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
            src="/img/logofifa.png"
            alt="Logo FIFA 2026"
            className="w-12 h-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">
              Copa Mundial de la FIFA 2026™
            </span>
            <span className="text-blue-200">
              11 de junio - 19 de julio de 2026
            </span>
          </div>
        </div>

        <div className="text-white">
          <Countdown />
        </div>

        <div className="flex items-center gap-6">
          <div className="text-white text-lg font-semibold text-right">
            Patrocinador <br /> oficial
          </div>

          <Link
            to="/calendario"
            className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/15 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out"
          >
            Ver partidos
          </Link>
        </div>
      </div>
    </div>
  );
}
