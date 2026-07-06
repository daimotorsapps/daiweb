export interface MatchDay {
  date: string;
  label: string;
  matchIds: number[];
}

export const worldcupMatchDays: MatchDay[] = [
  {
    date: "2026-06-11",
    label: "Jueves, 11 de junio de 2026",
    matchIds: [1, 2],
  },
  {
    date: "2026-06-12",
    label: "Viernes, 12 de junio de 2026",
    matchIds: [3, 4],
  },
  {
    date: "2026-06-13",
    label: "Sábado, 13 de junio de 2026",
    matchIds: [8, 7, 5, 6],
  },
  {
    date: "2026-06-14",
    label: "Domingo, 14 de junio de 2026",
    matchIds: [10, 9, 11, 12],
  },
  {
    date: "2026-06-15",
    label: "Lunes, 15 de junio de 2026",
    matchIds: [15, 14, 13, 16],
  },
  {
    date: "2026-06-16",
    label: "Martes, 16 de junio de 2026",
    matchIds: [17, 18, 19, 20],
  },
  {
    date: "2026-06-17",
    label: "Miércoles, 17 de junio de 2026",
    matchIds: [21, 22, 23, 24],
  },
  {
    date: "2026-06-18",
    label: "Jueves, 18 de junio de 2026",
    matchIds: [26, 28, 27, 25],
  },
  {
    date: "2026-06-19",
    label: "Viernes, 19 de junio de 2026",
    matchIds: [31, 29, 30, 32],
  },
  {
    date: "2026-06-20",
    label: "Sábado, 20 de junio de 2026",
    matchIds: [35, 33, 34, 36],
  },
  {
    date: "2026-06-21",
    label: "Domingo, 21 de junio de 2026",
    matchIds: [37, 39, 38, 40],
  },
  {
    date: "2026-06-22",
    label: "Lunes, 22 de junio de 2026",
    matchIds: [43, 41, 42, 44],
  },
  {
    date: "2026-06-23",
    label: "Martes, 23 de junio de 2026",
    matchIds: [45, 48, 47, 46],
  },
  {
    date: "2026-06-24",
    label: "Miércoles, 24 de junio de 2026",
    matchIds: [50, 49, 52, 51, 54, 53],
  },
  {
    date: "2026-06-25",
    label: "Jueves, 25 de junio de 2026",
    matchIds: [55, 56, 57, 58, 59, 60],
  },
  {
    date: "2026-06-26",
    label: "Viernes, 26 de junio de 2026",
    matchIds: [61, 62, 63, 64, 65, 66],
  },
  {
    date: "2026-06-27",
    label: "Sábado, 27 de junio de 2026",
    matchIds: [68, 67, 69, 70, 71, 72],
  },
  {
    date: "2026-06-28",
    label: "Domingo, 28 de junio de 2026",
    matchIds: [73],
  },
  {
    date: "2026-06-29",
    label: "Lunes, 29 de junio de 2026",
    matchIds: [76, 74, 75],
  },
  {
    date: "2026-06-30",
    label: "Martes, 30 de junio de 2026",
    matchIds: [78, 77, 79],
  },
  {
    date: "2026-07-01",
    label: "Miércoles, 1 de julio de 2026",
    matchIds: [80, 82, 81],
  },
  {
    date: "2026-07-02",
    label: "Jueves, 2 de julio de 2026",
    matchIds: [84, 83, 85],
  },
  {
    date: "2026-07-03",
    label: "Viernes, 3 de julio de 2026",
    matchIds: [88, 86, 87],
  },
  {
    date: "2026-07-04",
    label: "Sábado, 4 de julio de 2026",
    matchIds: [90, 89],
  },
  {
    date: "2026-07-05",
    label: "Domingo, 5 de julio de 2026",
    matchIds: [91, 92],
  },
  {
    date: "2026-07-06",
    label: "Lunes, 6 de julio de 2026",
    matchIds: [93, 94],
  },
  {
    date: "2026-07-07",
    label: "Martes, 7 de julio de 2026",
    matchIds: [96, 95],
  },
  {
    date: "2026-07-09",
    label: "Jueves, 9 de julio de 2026",
    matchIds: [97],
  },
  {
    date: "2026-07-10",
    label: "Viernes, 10 de julio de 2026",
    matchIds: [99, 98],
  },
  {
    date: "2026-07-11",
    label: "Sábado, 11 de julio de 2026",
    matchIds: [100],
  },
  {
    date: "2026-07-14",
    label: "Martes, 14 de julio de 2026",
    matchIds: [101],
  },
  {
    date: "2026-07-15",
    label: "Miércoles, 15 de julio de 2026",
    matchIds: [102],
  },
  {
    date: "2026-07-18",
    label: "Sábado, 18 de julio de 2026",
    matchIds: [103],
  },
  {
    date: "2026-07-19",
    label: "Domingo, 19 de julio de 2026",
    matchIds: [104],
  },
];

export const API_BASE_URL = "https://worldcup26.ir";
export const GAMES_URL = `${API_BASE_URL}/get/games`;
export const TEAMS_URL = `${API_BASE_URL}/get/teams`;
export const STADIUMS_URL = `${API_BASE_URL}/get/stadiums`;
