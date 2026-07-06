import { type MatchData } from "./MatchCard";

interface GroupStandingsProps {
  matches: Record<number, MatchData>;
}

interface TeamStanding {
  name: string;
  flag: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

export default function GroupStandings({ matches }: GroupStandingsProps) {
  const groupMap: Record<string, Record<string, TeamStanding>> = {};

  const ensureTeam = (groupName: string, teamName: string, flag: string): TeamStanding => {
    if (!groupMap[groupName]) groupMap[groupName] = {};
    if (!groupMap[groupName][teamName]) {
      groupMap[groupName][teamName] = {
        name: teamName,
        flag,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
      };
    }
    return groupMap[groupName][teamName];
  };

  Object.values(matches)
    .filter((m) => m.type === "group" && m.finished)
    .forEach((m) => {
      const group = m.group;
      const home = ensureTeam(group, m.home.name, m.home.flag);
      const away = ensureTeam(group, m.away.name, m.away.flag);

      home.played++;
      away.played++;
      home.gf += m.home.score;
      home.ga += m.away.score;
      away.gf += m.away.score;
      away.ga += m.home.score;

      if (m.home.score > m.away.score) {
        home.won++;
        away.lost++;
        home.points += 3;
      } else if (m.home.score < m.away.score) {
        away.won++;
        home.lost++;
        away.points += 3;
      } else {
        home.drawn++;
        away.drawn++;
        home.points += 1;
        away.points += 1;
      }
    });

  Object.values(groupMap).forEach((group) => {
    Object.values(group).forEach((team) => {
      team.gd = team.gf - team.ga;
    });
  });

  const sortedGroups = Object.keys(groupMap)
    .sort()
    .map((groupName) => ({
      name: groupName,
      teams: Object.values(groupMap[groupName]).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.gd !== a.gd) return b.gd - a.gd;
        return b.gf - a.gf;
      }),
    }));

  if (sortedGroups.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        No hay partidos de grupo finalizados aún.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sortedGroups.map((group) => (
        <div key={group.name} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-950 text-white px-4 py-2 font-medium text-sm">
            Grupo {group.name}
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 text-xs border-b">
                <th className="text-left px-3 py-2">Equipo</th>
                <th className="text-center px-1 py-2">PJ</th>
                <th className="text-center px-1 py-2">Pts</th>
                <th className="text-center px-1 py-2">DG</th>
              </tr>
            </thead>
            <tbody>
              {group.teams.map((team) => (
                <tr key={team.name} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="px-3 py-2 flex items-center gap-2">
                    {team.flag ? (
                      <img
                        src={team.flag}
                        alt={team.name}
                        className="w-5 h-3.5 object-contain rounded-sm"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="w-5 h-3.5 bg-gray-200 rounded-sm" />
                    )}
                    <span className="font-medium text-gray-800 truncate">{team.name}</span>
                  </td>
                  <td className="text-center px-1 py-2 text-gray-600">{team.played}</td>
                  <td className="text-center px-1 py-2 font-bold text-blue-950">{team.points}</td>
                  <td className="text-center px-1 py-2 text-gray-600">{team.gd > 0 ? `+${team.gd}` : team.gd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
