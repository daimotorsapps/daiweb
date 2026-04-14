import { useEffect } from "react";

export const NewsSection = () => {


    useEffect(() => {
        // Cargamos el script de Behold de forma dinámica al montar el componente
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://w.behold.so/widget.js";
        document.head.append(script);

        // Limpieza opcional al desmontar el componente
        return () => {
            script.remove();
        };
    }, []);


    return (
        <div className="box-border caret-transparent gap-x-0 flex min-h-[auto] min-w-[auto] gap-y-0 w-full">
            <div
                role="none"
                className="box-border caret-transparent gap-x-0 grid flex-col auto-cols-[minmax(0px,1fr)] grid-cols-[repeat(2,minmax(0px,1fr))] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-0 w-full md:grid-cols-[repeat(12,minmax(0px,1fr))]"
            >
                <div className="box-border caret-transparent contents">
                    <div className="items-start box-border caret-transparent col-end-[span_7] justify-start min-h-[auto] min-w-[auto] w-full">
                        <div className="box-border caret-transparent h-full">
                            <div role="list" className="box-border caret-transparent h-full">
                                <div
                                    role="listitem"
                                >
                                    {/* <div className="absolute bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7))] box-border caret-transparent h-full w-full inset-[0%]">

                                    </div>
                                    <div className="relative items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] z-[2]">
                                        <p className="items-start box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-full mb-[20.1964px] md:mb-[23.4286px] before:accent-auto before:box-border before:caret-transparent before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:mb-[-6.72px] before:min-h-[auto] before:min-w-[auto] before:pointer-events-auto before:text-start before:no-underline before:indent- [0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans after:accent-auto after:box-border after:caret-transparent after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:mb-[-5.92px] after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans">
                                            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] w-full">
                                                Últimas noticias
                                            </span>
                                        </p>
                                        <h3 className="text-[22.0982px] font-medium items-start box-border caret-transparent flex flex-col justify-center leading-[24.308px] min-h-[auto] min-w-full md:text-[23.7143px] md:leading-[26.0857px] before:accent-auto before:box-border before:caret-transparent before:text-white before:table before:text-[22.0982px] before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[24.308px] before:list-outside before:list-disc before:mb-[-4.85603px] before:min-h-[auto] before:min-w-[auto] be fore:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans before:md:text-[23.7143px] before:md:leading-[26.0857px] before:md:mb-[-5.20554px] after:accent-auto after:box-border after:caret-transparent after:text-white after:table after:text-[22.0982px] after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-[24.308px] after:list-outside after:list-disc after:mb-[-3.751 12px] after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans after:md:text-[23.7143px] after:md:leading-[26.0857px] after:md:mb-[-4.01982px]" >
                                            <span className="text-[22.0982px] box-border caret-transparent block leading-[24.308px] min-h-[auto] min-w-[auto] w-full md:text-[23.7143px] md:leading-[26.0857px]">
                                                Hyundai Motor Group presenta su marca de hidrógeno HTWO
                                                en Japón durante el H2&amp;FC EXPO
                                            </span>
                                        </h3>
                                    </div>
                                    <div className="absolute box-border caret-transparent h-full w-full z-[3] inset-[0%]">
                                        <a
                                            href="/noticias/hyundai-motor-group-presenta-su-marca-de-hidrogeno-htwo-en-japon-durante-el-h2-fc-expo"
                                            className="absolute box-border caret-transparent block h-full max-w-full outline-offset-[3px] w-full inset-[0%]"
                                        ></a>
                                        <button
                                            type="button"
                                            className="absolute bg-transparent caret-transparent hidden h-full outline-offset-[3px] w-full p-0 inset-[0%]"
                                        ></button>
                                    </div> */}
                                    <h3 className="text-xl ml-10 font-medium mb-4 font-hyundai_sans text-black">
                                        NOVEDADES DE INSTAGRAM
                                    </h3>
                                    <div className="col-span-2 md:col-span-7 p-6 border-r border-gray-100">

                                        <div className="w-full h-full px-2 md:px-4">
                                            <div
                                                data-behold-id="RZKHvgNuxaWJWL2kXFBA"
                                                className="behold-container w-full"
                                            ></div>
                                        </div>

                                        {/* Grid de instagram*/}
                                        {/* <div className="grid grid-cols-2 gap-2">



                                             <div className="aspect-square bg-neutral-200 overflow-hidden relative group">
                                                <iframe
                                                    src="https://www.instagram.com/reel/DW9i1mZiXlP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" // Aquí pegas la URL que te de el widget
                                                    className="w-full h-full border-0"
                                                    scrolling="no"
                                                ></iframe>
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">

                                                    <span className="text-white text-sm">Ver post</span>
                                                </div>
                                            </div>                                           
                                                

                                            <div className="aspect-square bg-neutral-200 overflow-hidden relative group">
                                                <img
                                                    src="https://via.placeholder.com/400"
                                                    alt="Instagram Post"
                                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <span className="text-white text-sm">Ver post</span>
                                                </div>
                                            </div> 


                                            <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                                <iframe
                                                    src="https://w.behold.so/widget.js" // O la URL de LightWidget
                                                    className="absolute top-0 left-0 w-full h-full border-0"
                                                    scrolling="no"
                                                    title="Instagram Feed"
                                                ></iframe>
                                            </div>

                                            <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                                <iframe
                                                    src="https://w.behold.so/widget.js" // O la URL de LightWidget
                                                    className="absolute top-0 left-0 w-full h-full border-0"
                                                    scrolling="no"
                                                    title="Instagram Feed"
                                                ></iframe>
                                            </div> 
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="box-border caret-transparent contents">

                    {/*                     <div className="items-start box-border caret-transparent col-end-[span_7] justify-start min-h-[auto] min-w-[auto] w-full md:col-end-[span_5]">


                        
                    </div>
 */}


                    {/*  <div className="box-border caret-transparent">

                        <div role="list" className="box-border caret-transparent">
                            <div
                                role="listitem"
                                className="relative text-white items-end bg-[url('https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69bac5660ef2b6fba0173ddf_Hyundai%20Motor%20Expand%20Strategic%20Partnership%20Autonomous%20Driving%20Technology.png')] bg-no-repeat bg-cover box-border caret-transparent flex h-full bg-center pt-40 pb-[28.1964px] px-[28.1964px] md:pb-[31.4286px] md:px-[31.4286px]"
                            >
                                <div className="absolute bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7))] box-border caret-transparent h-full w-full inset-[0%]"></div>
                                <div className="relative items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] z-[2]">
                                    <p className="items-start box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-full mb-[20.1964px] md:mb-[23.4286px] before:accent-auto before:box-border before:caret-transparent before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:mb-[-6.72px] before:min-h-[auto] before:min-w-[auto] before:pointer-events-auto before:text-start before:no-underline before:indent- [0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans after:accent-auto after:box-border after:caret-transparent after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:mb-[-5.92px] after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans">
                                        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] w-full">
                                            Últimas noticias
                                        </span>
                                    </p>
                                    <h3 className="text-[22.0982px] font-medium items-start box-border caret-transparent flex flex-col justify-center leading-[24.308px] min-h-[auto] min-w-full md:text-[23.7143px] md:leading-[26.0857px] before:accent-auto before:box-border before:caret-transparent before:text-white before:table before:text-[22.0982px] before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[24.308px] before:list-outside before:list-disc before:mb-[-4.85603px] before:min-h-[auto] before:min-w-[auto] be fore:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans before:md:text-[23.7143px] before:md:leading-[26.0857px] before:md:mb-[-5.20554px] after:accent-auto after:box-border after:caret-transparent after:text-white after:table after:text-[22.0982px] after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-[24.308px] after:list-outside after:list-disc after:mb-[-3.751 12px] after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans after:md:text-[23.7143px] after:md:leading-[26.0857px] after:md:mb-[-4.01982px]" >
                                        <span className="text-[22.0982px] box-border caret-transparent block leading-[24.308px] min-h-[auto] min-w-[auto] w-full md:text-[23.7143px] md:leading-[26.0857px]">
                                            Hyundai Motor, Kia y NVIDIA amplían su alianza
                                            estratégica para el desarrollo de conducción autónoma de
                                            próxima generación
                                        </span>
                                    </h3>
                                </div>
                                <div className="absolute box-border caret-transparent h-full w-full z-[3] inset-[0%]">
                                    <a
                                        href="/noticias/hyundai-motor-kia-y-nvidia-amplian-su-alianza-estrategica-para-el-desarrollo-de-conduccion-autonoma-de-proxima-generacion"
                                        className="absolute box-border caret-transparent block h-full max-w-full outline-offset-[3px] w-full inset-[0%]"
                                    ></a>
                                    <button
                                        type="button"
                                        className="absolute bg-transparent caret-transparent hidden h-full outline-offset-[3px] w-full p-0 inset-[0%]"
                                    ></button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="box-border caret-trans
                        parent contents">
                        <div className="text-neutral-600 items-start bg-neutral-400 box-border caret-transparent justify-start w-full p-[20.1964px] md:p-[23.4286px]">
                            <p className="text-[28.1964px] font-medium items-start box-border caret-transparent flex flex-col justify-center leading-[31.0161px] min-w-full mb-[20.1964px] md:text-[31.4286px] md:leading-[34.5714px] md:mb-[23.4286px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-600 before:table before:text-[28.1964px] before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[31.0161px] before:list-outside before:list-disc before:mb-[-6.19518px] before:min-h-[ auto] before:min-w-[auto] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans before:md:text-[31.4286px] before:md:leading-[34.5714px] before:md:mb-[-6.90982px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-600 after:table after:text-[28.1964px] after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-[31.0161px] after:list-outsi de after:list-disc after:mb-[-4.78536px] after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans after:md:text-[31.4286px] after:md:leading-[34.5714px] after:md:mb-[-5.33839px]" >
                                <span className="text-[28.1964px] box-border caret-transparent block leading-[31.0161px] min-h-[auto] min-w-[auto] w-full md:text-[31.4286px] md:leading-[34.5714px]">
                                    # Novedades
                                </span>
                            </p>
                            <p className="text-[28.1964px] font-medium items-start box-border caret-transparent flex flex-col justify-center leading-[31.0161px] min-w-full mb-[20.1964px] md:text-[31.4286px] md:leading-[34.5714px] md:mb-[23.4286px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-600 before:table before:text-[28.1964px] before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[31.0161px] before:list-outside before:list-disc before:mb-[-6.19518px] before:min-h-[ auto] before:min-w-[auto] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans before:md:text-[31.4286px] before:md:leading-[34.5714px] before:md:mb-[-6.90982px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-600 after:table after:text-[28.1964px] after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-[31.0161px] after:list-outsi de after:list-disc after:mb-[-4.78536px] after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans after:md:text-[31.4286px] after:md:leading-[34.5714px] after:md:mb-[-5.33839px]" >
                                <span className="text-[28.1964px] box-border caret-transparent block leading-[31.0161px] min-h-[auto] min-w-[auto] w-full md:text-[31.4286px] md:leading-[34.5714px]">
                                    # Tech
                                </span>
                            </p>
                            <p className="text-[28.1964px] font-medium items-start box-border caret-transparent flex flex-col justify-center leading-[31.0161px] min-w-full md:text-[31.4286px] md:leading-[34.5714px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-600 before:table before:text-[28.1964px] before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[31.0161px] before:list-outside before:list-disc before:mb-[-6.19518px] before:min-h-[auto] before:min-w-[auto] before: pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans before:md:text-[31.4286px] before:md:leading-[34.5714px] before:md:mb-[-6.90982px] after:accent-auto after:box-border after:caret-transparent after:text-neutral-600 after:table after:text-[28.1964px] after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-[31.0161px] after:list-outside after:list-disc after:mb-[-4.7 8536px] after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans after:md:text-[31.4286px] after:md:leading-[34.5714px] after:md:mb-[-5.33839px]" >
                                <span className="text-[28.1964px] box-border caret-transparent block leading-[31.0161px] min-h-[auto] min-w-[auto] w-full md:text-[31.4286px] md:leading-[34.5714px]">
                                    # Internacional
                                </span>
                            </p>
                        </div>
                    </div> */}



                    <div className="col-span-2 md:col-span-5 flex flex-col">
                        <h2 className="font-bold text-[16px] uppercase tracking-wide">
                            Ubicación
                        </h2>
                        {/* Área del Mapa */}
                        <div className="h-64 md:h-full min-h-[300px] w-full bg-neutral-400">

                            <iframe
                                title="Ubicación del negocio"
                                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2077.0463639292893!2d-71.60778267517432!3d10.661657321984306!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1776175361893!5m2!1ses!2sve"
                                className="w-full h-full border-0"
                                allowFullScreen={false}
                                loading="lazy"
                            ></iframe>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

