import { useState, useEffect } from "react";
import { GAMES_URL } from "../data/worldcup-matches";

interface ApiGame {
  id: string;
  local_date: string;
  finished: string;
  time_elapsed: string;
}

function parseDate(dateStr: string): Date | null {
  const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})/);
  if (!match) return null;
  const [, month, day, year, hours, minutes] = match;
  return new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
}

export function useNextMatch(): string | null {
  const [nextMatchId, setNextMatchId] = useState<string | null>(null);

  useEffect(() => {
    const cached = sessionStorage.getItem("nextMatchId");
    if (cached) {
      setNextMatchId(cached === "null" ? null : cached);
      return;
    }

    const controller = new AbortController();

    fetch(GAMES_URL, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        const now = new Date();
        const upcoming = (data.games as ApiGame[])
          .filter((g) => g.finished === "FALSE" && g.time_elapsed === "notstarted")
          .map((g) => ({ id: g.id, date: parseDate(g.local_date) }))
          .filter((g): g is { id: string; date: Date } => g.date !== null)
          .filter((g) => g.date.getTime() > now.getTime())
          .sort((a, b) => a.date.getTime() - b.date.getTime());

        const nextId = upcoming.length > 0 ? upcoming[0].id : null;
        sessionStorage.setItem("nextMatchId", nextId || "null");
        setNextMatchId(nextId);
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  return nextMatchId;
}
