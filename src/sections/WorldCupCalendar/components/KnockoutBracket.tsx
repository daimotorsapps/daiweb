import { Link } from "react-router-dom";
import { type MatchData } from "./MatchCard";

interface KnockoutBracketProps {
  matches: Record<number, MatchData>;
}

interface BracketMatch {
  id: number;
  round: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  finished: boolean;
  homeFlag: string;
  awayFlag: string;
}

const H = 72;
const G = 6;
const HEADER_H = 32;
const TOTAL_HEIGHT = 16 * H + 15 * G + HEADER_H;

const CONNECTION_PAIRS: Record<string, [number, number][]> = {
  'r32-r16': [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15]],
  'r16-qf':  [[0,1],[2,3],[4,5],[6,7]],
  'qf-sf':   [[0,2],[1,3]],
  'sf-final':[[0,1]],
};

const ROUNDS: {
  key: string;
  label: string;
  ids: number[];
  pad: number;
  gap: number;
}[] = [
  { key: 'r32', label: 'Ronda de 32', ids: [73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88], pad: 0,         gap: G },
  { key: 'r16', label: 'Ronda de 16', ids: [90,89,91,92,94,93,96,95],                         pad: (H+G)/2,   gap: H + 2*G },
  { key: 'qf',  label: 'Cuartos',     ids: [97,99,98,100],                                     pad: 3*(H+G)/2, gap: 3*H + 4*G },
  { key: 'sf',  label: 'Semifinal',   ids: [101,102],                                          pad: 7*(H+G)/2, gap: 7*H + 8*G },
  { key: 'final', label: 'Final',     ids: [104],                                              pad: 15*(H+G)/2, gap: 0 },
];

function getCenterY(roundIdx: number, matchIdx: number): number {
  const r = ROUNDS[roundIdx];
  return HEADER_H + r.pad + matchIdx * (H + r.gap) + H / 2;
}

export default function KnockoutBracket({ matches }: KnockoutBracketProps) {
  const knockoutMatches = Object.values(matches).filter((m) => m.type !== "group");

  const matchMap: Record<number, BracketMatch> = {};
  knockoutMatches.forEach((m) => {
    matchMap[parseInt(m.id)] = {
      id: parseInt(m.id),
      round: m.type,
      homeTeam: m.home.name,
      awayTeam: m.away.name,
      homeScore: m.home.score,
      awayScore: m.away.score,
      finished: m.finished,
      homeFlag: m.home.flag,
      awayFlag: m.away.flag,
    };
  });

  if (knockoutMatches.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        <div className="text-4xl mb-3">&#127942;</div>
        <p className="font-medium">La fase de knockout aun no comienza</p>
        <p className="text-sm mt-1">Los octavos de final empezaran pronto</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex items-start min-w-fit px-2 gap-0">
        {ROUNDS.map((round, idx) => (
          <div key={round.key} className="flex shrink-0">
            {idx > 0 && (
              <BracketConnector pairs={CONNECTION_PAIRS[`${ROUNDS[idx - 1].key}-${round.key}`]} fromIdx={idx - 1} toIdx={idx} />
            )}
            <div className="flex flex-col shrink-0 w-[180px]">
              <div className="text-center mb-3 h-5">
                <span className={`text-xs font-bold uppercase tracking-wide ${round.key === 'final' ? 'text-yellow-600' : 'text-blue-950'}`}>
                  {round.label}
                </span>
              </div>
              <div
                className="flex flex-col"
                style={{
                  height: TOTAL_HEIGHT,
                  paddingTop: round.pad,
                  paddingBottom: round.pad,
                  gap: round.gap,
                }}
              >
                {round.ids.map((id) => (
                  <div key={id} className="shrink-0">
                    {matchMap[id] && <BracketCard match={matchMap[id]} isFinal={round.key === 'final'} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BracketConnector({ pairs, fromIdx, toIdx }: {
  pairs: [number, number][];
  fromIdx: number;
  toIdx: number;
}) {
  const midX = 12;
  const rightX = 24;

  return (
    <svg className="w-6 shrink-0" style={{ height: TOTAL_HEIGHT }}>
      {pairs.map(([src1, src2], i) => {
        const y1 = getCenterY(fromIdx, src1);
        const y2 = getCenterY(fromIdx, src2);
        const yT = getCenterY(toIdx, i);

        return (
          <g key={i}>
            <path d={`M 0 ${y1} H ${midX} V ${yT}`} fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
            <path d={`M 0 ${y2} H ${midX} V ${yT}`} fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
            <path d={`M ${midX} ${yT} H ${rightX}`} fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          </g>
        );
      })}
    </svg>
  );
}

function BracketCard({ match, isFinal }: { match: BracketMatch; isFinal?: boolean }) {
  const getTeamDisplay = (name: string, flag: string, score: number | null, isWinner: boolean) => {
    const isPlaceholder = name.startsWith("Winner") || name.startsWith("Runner-up") || name.startsWith("Loser");
    return (
      <div className="flex items-center gap-1.5 min-w-0">
        {flag && !isPlaceholder ? (
          <img src={flag} alt={name} className="w-5 h-3.5 object-contain rounded-sm shrink-0" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
        ) : (
          <div className="w-5 h-3.5 bg-gray-200 rounded-sm shrink-0" />
        )}
        <span className={`text-xs truncate max-w-[110px] ${isWinner ? "font-bold" : "font-normal"} ${isPlaceholder ? "text-gray-400" : "text-gray-800"}`}>
          {isPlaceholder ? "TBD" : name}
        </span>
      </div>
    );
  };

  const homeWins = match.finished && match.homeScore !== null && match.awayScore !== null && match.homeScore > match.awayScore;
  const awayWins = match.finished && match.homeScore !== null && match.awayScore !== null && match.awayScore > match.homeScore;

  return (
    <Link
      to={`/calendario/${match.id}`}
      className={`block h-[72px] rounded-lg border overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] ${
        isFinal
          ? "border-yellow-400 bg-gradient-to-b from-yellow-50 to-yellow-100 shadow-lg"
          : match.finished
          ? "border-green-300 bg-gradient-to-b from-green-50 to-green-100"
          : "border-gray-200 bg-white hover:border-blue-300"
      }`}
    >
      <div className={`h-[22px] flex items-center px-3 text-[10px] font-bold ${
        isFinal ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-yellow-900" : "bg-blue-950 text-white"
      }`}>
        {isFinal ? "FINAL" : `M${match.id}`}
      </div>
      <div className="flex items-center justify-between h-[25px] px-3">
        {getTeamDisplay(match.homeTeam, match.homeFlag, match.homeScore, !!homeWins)}
        {match.finished && match.homeScore !== null && (
          <span className={`text-xs font-bold shrink-0 ml-1 ${homeWins ? "text-green-600" : "text-gray-500"}`}>
            {match.homeScore}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between h-[25px] px-3 border-t border-gray-100">
        {getTeamDisplay(match.awayTeam, match.awayFlag, match.awayScore, !!awayWins)}
        {match.finished && match.awayScore !== null && (
          <span className={`text-xs font-bold shrink-0 ml-1 ${awayWins ? "text-green-600" : "text-gray-500"}`}>
            {match.awayScore}
          </span>
        )}
      </div>
    </Link>
  );
}
