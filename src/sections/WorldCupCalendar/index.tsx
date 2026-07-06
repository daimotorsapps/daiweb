import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { worldcupMatchDays, GAMES_URL, TEAMS_URL, STADIUMS_URL } from "../../data/worldcup-matches";
import { teamTranslations } from "../../data/team-translations";
import MatchCard, { type MatchData } from "./components/MatchCard";
import CalendarPagination from "./components/CalendarPagination";
import GroupStandings from "./components/GroupStandings";
import TodayMatches from "./components/TodayMatches";
import KnockoutBracket from "./components/KnockoutBracket";

interface ApiTeam {
  id: string;
  name_en: string;
  name_fa: string;
  flag: string;
  fifa_code: string;
  iso2: string;
  groups: string;
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

interface ApiStadium {
  id: string;
  name_en: string;
  city_en: string;
  capacity: number;
}

const PAGE_SIZE = 5;

export default function WorldCupCalendar() {
  const [searchParams] = useSearchParams();
  const highlightMatchId = searchParams.get("highlight");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matchesData, setMatchesData] = useState<Record<number, MatchData>>({});
  const [teamsMap, setTeamsMap] = useState<Record<string, ApiTeam>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"today" | "calendar" | "standings" | "bracket">("today");

  const totalDays = worldcupMatchDays.length;
  const visibleDays = worldcupMatchDays.slice(currentIndex, currentIndex + PAGE_SIZE);

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
          throw new Error("Error al cargar datos del Mundial");
        }

        const gamesData = await gamesRes.json();
        const teamsData = await teamsRes.json();
        const stadiumsData = await stadiumsRes.json();

        const teamsMap: Record<string, ApiTeam> = {};
        teamsData.teams.forEach((team: ApiTeam) => {
          teamsMap[team.id] = team;
        });
        setTeamsMap(teamsMap);

        const stadiumsMap: Record<string, ApiStadium> = {};
        stadiumsData.stadiums.forEach((stadium: ApiStadium) => {
          stadiumsMap[stadium.id] = stadium;
        });

        const indexed: Record<number, MatchData> = {};
        gamesData.games.forEach((game: ApiMatch) => {
          const homeTeam = teamsMap[game.home_team_id];
          const awayTeam = teamsMap[game.away_team_id];
          const stadium = stadiumsMap[game.stadium_id];

          indexed[Number(game.id)] = {
            id: game.id,
            home: {
              name: teamTranslations[game.home_team_id] || game.home_team_name_en || homeTeam?.name_en || "Por definir",
              flag: homeTeam?.flag || "",
              score: parseInt(game.home_score) || 0,
              scorers: game.home_scorers === "null" ? "" : game.home_scorers,
            },
            away: {
              name: teamTranslations[game.away_team_id] || game.away_team_name_en || awayTeam?.name_en || "Por definir",
              flag: awayTeam?.flag || "",
              score: parseInt(game.away_score) || 0,
              scorers: game.away_scorers === "null" ? "" : game.away_scorers,
            },
            group: game.group,
            matchday: game.matchday,
            date: game.local_date,
            stadiumName: stadium?.name_en || "",
            finished: game.finished === "TRUE",
            timeElapsed: game.time_elapsed,
            type: game.type,
          };
        });

        setMatchesData(indexed);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        console.error("Error fetching World Cup data:", err);
        setError("Error al cargar los partidos. Intenta de nuevo.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!highlightMatchId || isLoading) return;
    const matchData = matchesData[Number(highlightMatchId)];
    if (!matchData) return;

    const dayIndex = worldcupMatchDays.findIndex((d) =>
      d.matchIds.includes(Number(highlightMatchId))
    );
    if (dayIndex >= 0) {
      const page = Math.floor(dayIndex / PAGE_SIZE) * PAGE_SIZE;
      setCurrentIndex(page);
    }

    setTimeout(() => {
      const el = document.getElementById(`match-${highlightMatchId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 300);
  }, [highlightMatchId, isLoading, matchesData]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - PAGE_SIZE));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + PAGE_SIZE;
      if (next >= totalDays) return prev;
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="bg-blue-950 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/img/logofifa.png"
              alt="Logo FIFA 2026"
              className="w-12 h-auto"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Copa Mundial de la FIFA 2026™</h1>
              <p className="text-blue-200 mt-1">11 de junio - 19 de julio de 2026</p>
            </div>
          </div>

          <p className="text-lg">Calendario de partidos y resultados</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-4 pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {([
            { key: "today" as const, label: "Hoy" },
            { key: "calendar" as const, label: "Calendario" },
            { key: "standings" as const, label: "Posiciones" },
            { key: "bracket" as const, label: "Bracket" },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? "bg-blue-950 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-center">
            <p className="text-red-600 font-medium">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 text-sm text-red-500 underline hover:text-red-700"
            >
              Reintentar
            </button>
          </div>
        )}

        {activeTab === "calendar" && (
          <>
            {visibleDays.map((day) => (
          <div key={day.date} className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-950">
              {day.label}
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {day.matchIds.map((matchId) => {
                if (isLoading) {
                  return (
                    <div
                      key={matchId}
                      className="bg-white rounded-lg shadow-md p-6 animate-pulse"
                    >
                      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-200 rounded" />
                        <div className="flex-1 h-4 bg-gray-200 rounded" />
                        <div className="w-12 h-4 bg-gray-200 rounded" />
                        <div className="flex-1 h-4 bg-gray-200 rounded" />
                        <div className="w-10 h-10 bg-gray-200 rounded" />
                      </div>
                    </div>
                  );
                }

                const matchData = matchesData[matchId];
                if (!matchData) {
                  return (
                    <div
                      key={matchId}
                      className="bg-white rounded-lg shadow-md p-6 text-center text-gray-400 text-sm"
                    >
                      Datos no disponibles
                    </div>
                  );
                }

                return (
                  <div key={matchId} id={`match-${matchId}`}>
                    <MatchCard match={matchData} highlight={highlightMatchId === String(matchId)} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <CalendarPagination
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex + PAGE_SIZE < totalDays}
          currentStart={currentIndex}
          currentEnd={currentIndex + PAGE_SIZE}
          total={totalDays}
        />
          </>
        )}

        {activeTab === "standings" && !isLoading && (
          <GroupStandings matches={matchesData} />
        )}

        {activeTab === "today" && !isLoading && (
          <TodayMatches matches={matchesData} />
        )}

        {activeTab === "bracket" && !isLoading && (
          <KnockoutBracket matches={matchesData} />
        )}


      </div>
    </div>
  );
}
