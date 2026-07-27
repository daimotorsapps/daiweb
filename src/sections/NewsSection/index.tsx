import { useEffect } from "react";

export const NewsSection = () => {


    useEffect(() => {
        //script de Behold de forma dinámica
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://w.behold.so/widget.js";
        document.head.append(script);


        return () => {
            script.remove();
        };
    }, []);


    return (
        <div className="box-border caret-transparent gap-x-0 flex min-h-[auto] min-w-[auto] mb-10 gap-y-0 w-full h-full">
            <div
                role="none"
                className="box-border caret-transparent gap-x-0 grid flex-col auto-cols-[minmax(0px,1fr)] grid-cols-[repeat(2,minmax(0px,1fr))] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-0 w-full md:grid-cols-[repeat(12,minmax(0px,1fr))]"
            >
                <div className="box-border caret-transparent contents">
                    <div className="items-start box-border caret-transparent col-end-[span_7] justify-center min-h-[auto] min-w-[auto] w-full">

                        <div className="box-border caret-transparent w-full h-full">

                            <div role="list" className="box-border caret-transparent h-full">
                                <div
                                    role="listitem"
                                >
                                    {/* TITULO */}
                                    <h3 className="text-xl ml-10 font-medium mb-4 font-hyundai_sans cursor-pointer w-50 h-full text-black bg-transparent border-l-stone-900 w-full border-b-stone-900/20 transition-all duration-200 hover:opacity-70  ">
                                        Novedades de nuestro Instagram
                                    </h3>


                                    {/* MAPA */}
                                    <div className="col-span-2  min-h-[auto] border-r border-gray-100">

                                        <div className="w-full h-full md:px-10">
                                            <div
                                                data-behold-id="RZKHvgNuxaWJWL2kXFBA"
                                                className="behold-container min-h-[500px] w-full"
                                            ></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="box-border caret-transparent contents mr-0md:mr-6">



                    <div className="col-span-7 md:col-span-5 rounded-xl flex flex-col mr-0 md:mr-10">
                        <h3 className="text-xl ml-10 font-medium mt-2 md:mt-0 mb-4 font-hyundai_sans cursor-pointer w-50 h-8 text-black bg-transparent border-l-stone-900 w-full border-b-stone-900/20 transition-all duration-200 hover:opacity-70  ">
                            Nuestra ubicación
                        </h3>
                        {/* Área del Mapa */}
                        <iframe
                            title="Ubicación del negocio"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2077.0463639292893!2d-71.60778267517432!3d10.661657321984306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8998ef7a37e3b3%3A0xd72c9490243bc414!2sDai%20Motors%2C%20S.A.!5e0!3m2!1ses!2sve!4v1776195462767!5m2!1ses!2sve"
                            className="w-full h-full rounded-xl"
                            allowFullScreen={false}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>


    );
};

