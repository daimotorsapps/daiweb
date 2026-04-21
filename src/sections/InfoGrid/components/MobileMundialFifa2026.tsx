import MundialFifa2026 from "./MundialFifa2026";




/* export const MobileMundialFifa2026 = (): JSX.Element => {
    return (
        <div className="box-border caret-transparent p-4 gap-x-0 flex min-h-[auto] max-h-30 min-w-[auto] gap-y-0 w-full  text-white bg-blue-950">
            {/* <div className="flex gap-x-4">
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
        </div>
    )
} */

import React, { useState, useEffect } from 'react';

const CountdownSection = () => {
    // Lógica simple de cuenta regresiva (ejemplo rápido)
    /* const [timeLeft, setTimeLeft] = useState({ dias: 50, horas: 13, min: 31 }); */

    return (
        <section className=" relative box-border flex  w-full gap-8 justify-between z-[1] md:hidden">

            <div className="mb-8 md:mb-12">
                <img
                    src="./public/img/logofifa.png"
                    alt="World Cup 2026"
                    className="w-32 md:w-48 animate-pulse"
                />
            </div>

            <div className="flex gap-4 md:gap-8 items-center text-center animate-pulse">
                <div className="text-xl font-semibold">
                    Patrocinador <br /> oficial
                </div>
            </div>
        </section>
    );
};




export default CountdownSection;