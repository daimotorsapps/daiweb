import { useState, useEffect } from "react";
import { bannerConfig } from "../data/bannerConfig";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const eventDate = new Date(bannerConfig.eventDate);
  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface CountdownTimerProps {
  variant?: "desktop" | "mobile";
}

export default function CountdownTimer({ variant = "desktop" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isMobile = variant === "mobile";
  const numberClass = isMobile ? "text-lg" : "text-2xl";
  const labelClass = isMobile ? "text-[10px]" : "text-xs";

  return (
    <div className="flex gap-3 text-center">
      <div className="flex flex-col items-center">
        <span className={`${numberClass} font-bold`}>{timeLeft.days}</span>
        <span className={`${labelClass} text-blue-200`}>días</span>
      </div>
      <div className="flex flex-col items-center">
        <span className={`${numberClass} font-bold`}>{timeLeft.hours}</span>
        <span className={`${labelClass} text-blue-200`}>horas</span>
      </div>
      <div className="flex flex-col items-center">
        <span className={`${numberClass} font-bold`}>{timeLeft.minutes}</span>
        <span className={`${labelClass} text-blue-200`}>min</span>
      </div>
      <div className="flex flex-col items-center">
        <span className={`${numberClass} font-bold`}>{timeLeft.seconds}</span>
        <span className={`${labelClass} text-blue-200`}>seg</span>
      </div>
    </div>
  );
}
