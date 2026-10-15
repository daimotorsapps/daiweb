import { useEffect } from "react";

export const NewsSection = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://w.behold.so/widget.js";
        document.head.append(script);

        return () => {
            script.remove();
        };
    }, []);

    return (
        <div className="w-[calc(100%_-_35px)] max-w-[1440px] mx-auto mb-10 md:w-[calc(100%_-_87px)]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
                <div className="md:col-span-7">
                    <h3 className="text-xl font-medium mb-4 font-hyundai_sans border-b border-stone-900/20 pb-2 transition-all duration-200 hover:opacity-70">
                        Novedades de nuestro Instagram
                    </h3>
                    <div
                        data-behold-id="RZKHvgNuxaWJWL2kXFBA"
                        className="behold-container min-h-[500px] w-full"
                    ></div>
                </div>

                <div className="flex flex-col md:col-span-5">
                    <h3 className="text-xl font-medium mb-4 font-hyundai_sans border-b border-stone-900/20 pb-2 transition-all duration-200 hover:opacity-70">
                        Nuestra ubicación
                    </h3>
                    <iframe
                        title="Ubicación del negocio"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2077.0463639292893!2d-71.60778267517432!3d10.661657321984306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8998ef7a37e3b3%3A0xd72c9490243bc414!2sDai%20Motors%2C%20S.A.!5e0!3m2!1ses!2sve!4v1776195462767!5m2!1ses!2sve"
                        className="w-full flex-1 min-h-[320px] rounded-xl border-0 md:min-h-[500px]"
                        allowFullScreen={false}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
