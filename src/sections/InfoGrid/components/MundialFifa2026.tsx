import { useEffect, useState } from "react";


export default function MundialFifa2026(): JSX.Element {
    return (
        <div className="flex w-full items-center justify-between">
            <div className="flex gap-x-4">
                <img
                    src={'./public/img/logofifa.png'}
                    alt="Logo FIFA 2026"
                    className="box-border w-10 h-auto object-contain mx-auto"
                />
                <div className="flex flex-col">
                    <span className="text-3xl font-semibold">
                        Copa Mundial de la FIFA 2026™
                    </span>
                    <span>
                        11 de junio - 19 de julio de 2026
                    </span>
                </div>
            </div>
            <div>
                <Countdown />
            </div>
            <div className="text-xl font-semibold">
                Patrocinador <br /> oficial
            </div>
        </div>
    )
}




const getTimeLeft = () => {
    const eventDate = new Date("2026-06-11T15:00:00-05:00"); // Ajusta la zona horaria si es necesario
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
}

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center text-center">
            <div className="flex gap-x-2 text-xl font-medium">
                <span>{timeLeft.days} <br /> días</span>
                <span>{timeLeft.hours} <br /> horas</span>
                <span>{timeLeft.minutes} <br /> min</span>
                <span>{timeLeft.seconds} <br /> seg</span>
            </div>
        </div>
    );
}