import { Link } from "react-router-dom";

export interface MatchData {
  id: string;
  home: {
    name: string;
    flag: string;
    score: number;
    scorers: string;
  };
  away: {
    name: string;
    flag: string;
    score: number;
    scorers: string;
  };
  group: string;
  matchday: string;
  date: string;
  stadiumName: string;
  finished: boolean;
  timeElapsed: string;
  type: string;
}

interface MatchCardProps {
  match: MatchData;
  highlight?: boolean;
}

const ROUND_LABELS: Record<string, string> = {
  group: "Fase de grupos",
  r32: "Octavos de final",
  r16: "Octavos de final",
  qf: "Cuartos de final",
  sf: "Semifinales",
  third: "Tercer puesto",
  final: "Final",
};

function parseLocalDate(dateStr: string): { timeText: string; dateObj: Date | null } {
  const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})/);
  if (!match) return { timeText: "--:--", dateObj: null };
  const [, month, day, year, hours, minutes] = match;
  const dateObj = new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
  return {
    timeText: `${hours}:${minutes}`,
    dateObj,
  };
}

export default function MatchCard({ match, highlight }: MatchCardProps) {
  const { home, away, group, type, finished, timeElapsed, date, stadiumName } = match;
  const { timeText } = parseLocalDate(date);

  const isPlayed = finished || timeElapsed === "finished";
  const isLive = ["1H", "HT", "2H", "ET", "BT", "P", "LIVE"].includes(timeElapsed);

  const roundText = type === "group" ? `Grupo ${group}` : (ROUND_LABELS[type] || group);

  return (
    <Link
      to={`/calendario/${match.id}`}
      className={`block bg-white rounded-lg shadow-md overflow-hidden border transition-shadow hover:shadow-lg ${
        highlight ? "animate-pulse-highlight border-yellow-400" : "border-gray-100"
      }`}
    >
      <style>{`
        @keyframes pulse-highlight {
          0%, 100% { border-color: #facc15; box-shadow: 0 0 0 2px rgba(250,204,21,0.5); }
          50% { border-color: transparent; box-shadow: 0 0 0 2px transparent; }
        }
        .animate-pulse-highlight {
          animation: pulse-highlight 0.8s ease-in-out 5;
        }
      `}</style>
      <div className="bg-blue-950 text-white px-4 py-2 flex justify-between items-center text-sm">
        <span className="font-medium">Copa Mundial FIFA 2026</span>
        <span className="text-blue-200">{roundText}</span>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-2">
            {home.flag ? (
              <img
                src={home.flag}
                alt={`${home.name} bandera`}
                className="w-10 h-7 object-contain rounded-sm"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="w-10 h-7 bg-gray-200 rounded-sm" />
            )}
            <span className="font-semibold text-gray-800 text-sm md:text-base">{home.name}</span>
            {isPlayed && (
              <span className="ml-auto text-xl font-bold text-blue-950">{home.score}</span>
            )}
          </div>

          <div className="flex-1 flex items-center gap-2 justify-end">
            {isPlayed && (
              <span className="text-xl font-bold text-blue-950">{away.score}</span>
            )}
            <span className="font-semibold text-gray-800 text-sm md:text-base text-right">{away.name}</span>
            {away.flag ? (
              <img
                src={away.flag}
                alt={`${away.name} bandera`}
                className="w-10 h-7 object-contain rounded-sm"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="w-10 h-7 bg-gray-200 rounded-sm" />
            )}
          </div>
        </div>

        <div className="flex justify-center mt-2">
          {isLive ? (
            <span className="text-red-500 font-bold text-xs animate-pulse">EN VIVO</span>
          ) : isPlayed ? (
            <span className="text-gray-500 text-xs">Finalizado</span>
          ) : (
            <span className="text-gray-700 font-medium text-xs">{timeText}</span>
          )}
        </div>

        {stadiumName && (
          <div className="mt-1 text-center text-xs text-gray-400">{stadiumName}</div>
        )}
      </div>
    </Link>
  );
}
