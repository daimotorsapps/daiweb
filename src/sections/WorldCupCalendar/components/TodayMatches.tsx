import { Link } from "react-router-dom";
import { type MatchData } from "./MatchCard";

interface TodayMatchesProps {
  matches: Record<number, MatchData>;
}

function parseLocalDate(dateStr: string): Date | null {
  const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})/);
  if (!match) return null;
  const [, month, day, year, hours, minutes] = match;
  return new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
}

function formatTime(dateStr: string): string {
  const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})/);
  if (!match) return "--:--";
  return `${match[4]}:${match[5]}`;
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

export default function TodayMatches({ matches }: TodayMatchesProps) {
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  const todayMatches = Object.values(matches)
    .filter((m) => {
      const d = parseLocalDate(m.date);
      if (!d) return false;
      const matchStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      return matchStr === todayStr;
    })
    .sort((a, b) => {
      const da = parseLocalDate(a.date);
      const db = parseLocalDate(b.date);
      return (da?.getTime() || 0) - (db?.getTime() || 0);
    });

  if (todayMatches.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        <div className="text-4xl mb-3">⚽</div>
        <p className="font-medium">No hay partidos programados para hoy</p>
        <p className="text-sm mt-1">Vuelve mañana para ver los próximos encuentros</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-500">
          {todayMatches.length} partido{todayMatches.length > 1 ? "s" : ""} hoy
        </p>
      </div>

      {todayMatches.map((match) => {
        const isPlayed = match.finished || match.timeElapsed === "finished";
        const isLive = ["1H", "HT", "2H", "ET", "BT", "P", "LIVE"].includes(match.timeElapsed);
        const roundText = match.type === "group" ? `Grupo ${match.group}` : (ROUND_LABELS[match.type] || match.group);

        return (
          <Link
            key={match.id}
            to={`/calendario/${match.id}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="bg-blue-950 text-white px-4 py-2 flex justify-between items-center text-xs">
              <span>{roundText}</span>
              {isLive && <span className="text-red-400 font-bold animate-pulse">EN VIVO</span>}
            </div>

            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-2">
                  {match.home.flag ? (
                    <img src={match.home.flag} alt={match.home.name} className="w-8 h-6 object-contain rounded-sm" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  ) : (
                    <div className="w-8 h-6 bg-gray-200 rounded-sm" />
                  )}
                  <span className="font-semibold text-gray-800 text-sm">{match.home.name}</span>
                </div>

                <div className="flex flex-col items-center min-w-[60px]">
                  {isPlayed ? (
                    <span className="text-lg font-bold text-blue-950">{match.home.score} - {match.away.score}</span>
                  ) : (
                    <span className="text-sm font-bold text-blue-950">{formatTime(match.date)}</span>
                  )}
                </div>

                <div className="flex-1 flex items-center gap-2 justify-end">
                  <span className="font-semibold text-gray-800 text-sm text-right">{match.away.name}</span>
                  {match.away.flag ? (
                    <img src={match.away.flag} alt={match.away.name} className="w-8 h-6 object-contain rounded-sm" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  ) : (
                    <div className="w-8 h-6 bg-gray-200 rounded-sm" />
                  )}
                </div>
              </div>

              {match.stadiumName && (
                <p className="text-center text-xs text-gray-400 mt-2">{match.stadiumName}</p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
