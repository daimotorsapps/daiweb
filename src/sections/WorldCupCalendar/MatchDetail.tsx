import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GAMES_URL, TEAMS_URL, STADIUMS_URL } from "../../data/worldcup-matches";
import { teamTranslations } from "../../data/team-translations";

interface ApiTeam {
  id: string;
  name_en: string;
  flag: string;
  fifa_code: string;
}

interface ApiStadium {
  id: string;
  name_en: string;
  city_en: string;
  capacity: number;
}

interface ApiMatch {
  id: string;
  home_team_id: string;
  away_team_id: string;
  home_score: string;
  away_score: string;
  home_scorers: string;
  away_scorers: string;
  group: string;
  matchday: string;
  local_date: string;
  stadium_id: string;
  finished: string;
  time_elapsed: string;
  type: string;
  home_team_name_en: string;
  away_team_name_en: string;
  home_team_label?: string;
  away_team_label?: string;
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

function parseLocalDate(dateStr: string): { timeText: string; dateText: string } {
  const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})/);
  if (!match) return { timeText: "--:--", dateText: "" };
  const [, month, day, year, hours, minutes] = match;
  const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const dateText = `${Number(day)} de ${months[Number(month) - 1]} de ${year}`;
  const timeText = `${hours}:${minutes}`;
  return { timeText, dateText };
}

export default function MatchDetail() {
  const { matchId } = useParams<{ matchId: string }>();
  const navigate = useNavigate();
  const [match, setMatch] = useState<ApiMatch | null>(null);
  const [teamsMap, setTeamsMap] = useState<Record<string, ApiTeam>>({});
  const [stadiumsMap, setStadiumsMap] = useState<Record<string, ApiStadium>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const [gamesRes, teamsRes, stadiumsRes] = await Promise.all([
          fetch(GAMES_URL, { signal: controller.signal }),
          fetch(TEAMS_URL, { signal: controller.signal }),
          fetch(STADIUMS_URL, { signal: controller.signal }),
        ]);

        if (!gamesRes.ok || !teamsRes.ok || !stadiumsRes.ok) {
          throw new Error("Error al cargar datos del partido");
        }

        const gamesData = await gamesRes.json();
        const teamsData = await teamsRes.json();
        const stadiumsData = await stadiumsRes.json();

        const tMap: Record<string, ApiTeam> = {};
        teamsData.teams.forEach((t: ApiTeam) => { tMap[t.id] = t; });
        setTeamsMap(tMap);

        const sMap: Record<string, ApiStadium> = {};
        stadiumsData.stadiums.forEach((s: ApiStadium) => { sMap[s.id] = s; });
        setStadiumsMap(sMap);

        const game = gamesData.games.find((g: ApiMatch) => g.id === matchId);
        if (!game) {
          setError("Partido no encontrado");
        } else {
          setMatch(game);
        }
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        console.error("Error fetching match:", err);
        setError("Error al cargar el partido");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [matchId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Cargando partido...</div>
      </div>
    );
  }

  if (error || !match) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4">
        <p className="text-red-600 font-medium">{error || "Partido no encontrado"}</p>
        <button onClick={() => navigate(-1)} className="text-blue-600 underline hover:text-blue-800">
          Volver al calendario
        </button>
      </div>
    );
  }

  const homeTeam = teamsMap[match.home_team_id];
  const awayTeam = teamsMap[match.away_team_id];
  const stadium = stadiumsMap[match.stadium_id];

  const homeName = teamTranslations[match.home_team_id] || match.home_team_name_en || homeTeam?.name_en || "Por definir";
  const awayName = teamTranslations[match.away_team_id] || match.away_team_name_en || awayTeam?.name_en || "Por definir";
  const homeFlag = homeTeam?.flag || "";
  const awayFlag = awayTeam?.flag || "";

  const isPlayed = match.finished === "TRUE" || match.time_elapsed === "finished";
  const isLive = ["1H", "HT", "2H", "ET", "BT", "P", "LIVE"].includes(match.time_elapsed);

  const roundText = match.type === "group" ? `Grupo ${match.group}` : (ROUND_LABELS[match.type] || match.group);
  const { timeText, dateText } = parseLocalDate(match.local_date);

  const flagImg = (flag: string, name: string) =>
    flag ? (
      <img src={flag} alt={`${name} bandera`} className="w-16 h-11 object-contain rounded-sm" />
    ) : (
      <div className="w-16 h-11 bg-gray-200 rounded-sm" />
    );

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="bg-blue-950 text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <p className="text-blue-200 text-sm mb-1">{roundText}</p>
            <h1 className="text-2xl md:text-3xl font-bold">Copa Mundial FIFA 2026</h1>
            <p className="text-blue-200 mt-1">{dateText} &middot; {timeText}</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al calendario
        </button>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1 flex flex-col items-center gap-2">
                {flagImg(homeFlag, homeName)}
                <span className="font-bold text-gray-800 text-center">{homeName}</span>
                {match.home_team_label && (
                  <span className="text-xs text-gray-400">{match.home_team_label}</span>
                )}
              </div>

              <div className="flex flex-col items-center gap-1">
                {isPlayed ? (
                  <div className="text-4xl font-bold text-blue-950">
                    {match.home_score} - {match.away_score}
                  </div>
                ) : isLive ? (
                  <span className="text-red-500 font-bold text-lg animate-pulse">EN VIVO</span>
                ) : (
                  <span className="text-gray-500 text-sm text-center">El juego aún no ha comenzado</span>
                )}
              </div>

              <div className="flex-1 flex flex-col items-center gap-2">
                {flagImg(awayFlag, awayName)}
                <span className="font-bold text-gray-800 text-center">{awayName}</span>
                {match.away_team_label && (
                  <span className="text-xs text-gray-400">{match.away_team_label}</span>
                )}
              </div>
            </div>
          </div>

          {stadium && (
            <div className="border-t px-6 py-4">
              <h3 className="text-sm font-semibold text-gray-500 mb-1">Estadio</h3>
              <p className="text-gray-800 font-medium">{stadium.name_en}</p>
              <p className="text-gray-500 text-sm">{stadium.city_en} &middot; Capacidad: {stadium.capacity.toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
