import { useState } from "react";
import { ModelCard } from "./components/ModelCard";
import { useModelos } from "../../hooks/useModelos";
import { tabsConfig, type Tab } from "./modelsData";
import { getCircularIndex } from "../../utils/carousel";

export const ModelSection = () => {
    const [direction, setDirection] = useState<'prev' | 'next' | null>(null);
    const activeTab = useModelos((s) => s.model);
    const carouselIdx = useModelos((s) => s.modelIndex);
    const setModel = useModelos((s) => s.setModel);

    const currentModels = tabsConfig.find((t) => t.key === activeTab)?.models ?? [];
    const visibleModel = currentModels[carouselIdx];

    const handleTabChange = (key: Tab) => {
        setDirection('next');
        setModel(key);
    }

    const prev = () => {
        setDirection('prev');
        setModel(activeTab, getCircularIndex(currentModels.length, carouselIdx, -1));
    }
    const next = () => {
        setDirection('next');
        setModel(activeTab, getCircularIndex(currentModels.length, carouselIdx, 1));
    }

    const prevModel = currentModels[getCircularIndex(currentModels.length, carouselIdx, -1)];
    const nextModel = currentModels[getCircularIndex(currentModels.length, carouselIdx, 1)];

    const navContent = currentModels.length > 1 && prevModel && nextModel ? (
        <>
            <button
                onClick={prev}
                aria-label="Modelo anterior"
                className="relative z-[5] w-[60px] md:w-[180px] h-[200px] -ml-[18px] md:-ml-[43px] opacity-50 hover:opacity-100 transition-opacity duration-200 active:scale-95"
            >
                <img
                    src={prevModel.imageSrc}
                    alt={prevModel.modelName}
                    className="h-full w-auto object-cover object-[right_center]"
                />
            </button>
            <button
                onClick={next}
                aria-label="Modelo siguiente"
                className="relative z-[5] w-[60px] md:w-[180px] h-[200px] -mr-[18px] md:-mr-[43px] opacity-50 hover:opacity-100 transition-opacity duration-200 active:scale-95"
            >
                <img
                    src={nextModel.imageSrc}
                    alt={nextModel.modelName}
                    className="h-full w-auto object-cover object-[left_center]"
                />
            </button>
        </>
    ) : null;

    return (
        <section className="relative items-stretch bg-gray-200 flex flex-col justify-center min-h-auto min-w-auto">
            <div className="relative h-[66px] min-h-auto min-w-auto md:h-[105px]" />
            <div className="relative box-border flex flex-col justify-center max-w-[1440px] min-h-auto min-w-auto gap-y-[41px] w-[calc(100%_-_35px)] z-[1] mx-auto md:w-[calc(100%_-_87px)]" >
                <div className="box-border flex flex-col min-h-auto min-w-auto gap-y-[28px] md:gap-y-[31px]">
                    {/* Category tabs */}
                    <div
                        role="tablist"
                        className="box-border flex ml-[-18px] mr-[-18px] min-h-auto min-w-auto overflow-x-auto gap-y-0 px-[18px] md:ml-[-43px] md:mr-[-43px] md:px-[43px]"
                    >
                        {tabsConfig.map((tab) => (
                            <button
                                key={tab.key}
                                role="tab"
                                aria-selected={activeTab === tab.key}
                                onClick={() => handleTabChange(tab.key)}
                                className="relative bg-transparent border-l-stone-900 border-r-stone-900 border-t-stone-900 block flex-1 min-w-0 -outline-offset-2 text-center px-2 py-5 text-sm border-b border-b-stone-900/20 transition-all duration-200 md:p-6 md:text-base hover:opacity-70"
                            >
                                <span
                                    className={`box-border flow-root transition-all duration-200 ${activeTab === tab.key ? "font-bold" : "opacity-70"}`}
                                >
                                    {tab.label}
                                </span>
                                <span
                                    className={`absolute bg-stone-900 block h-[1.5px] w-full left-0 bottom-0 transition-transform duration-300 origin-center ${activeTab === tab.key ? "scale-x-100" : "scale-x-0"}`}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Model carousel */}
                    <div className="box-border flex flex-col min-h-auto min-w-auto gap-y-[28px] md:gap-y-[31px]">
                        <div className="box-border ml-[-18px] mr-[-18px] min-h-auto min-w-auto overflow-x-clip px-[18px] md:ml-[-43px] md:mr-[-43px] md:px-[43px]">
                            <div className="relative mt-16">
                                {/* Single model display */}
                                {visibleModel && (
                                    <div key={`${activeTab}-${carouselIdx}`} className={`z-[10] ${direction === 'prev' ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                                        <div className="w-full">
                                            <ModelCard
                                                navContent={navContent}
                                                modelName={visibleModel.modelName}
                                                subTitle={visibleModel.subTitle}
                                                imageSrc={visibleModel.imageSrc}
                                                trimName={visibleModel.trimName}
                                                transmission={visibleModel.transmission}
                                                motor={visibleModel.motor}
                                                potencia={visibleModel.potencia}
                                                torque={visibleModel.torque}
                                                fichaTecnicaHref={visibleModel.fichaTecnicaHref}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Dot indicators */}
                                {currentModels.length > 1 && (
                                    <div className="flex justify-center gap-2 mt-6">
                                        {currentModels.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setModel(activeTab, i)}
                                                aria-label={`Ver modelo ${i + 1}`}
                                                className="p-2 -m-2"
                                            >
                                                <span
                                                    className={`block h-1.5 rounded-full transition-all duration-300 ${i === carouselIdx ? "w-8 bg-stone-900" : "w-2 bg-stone-900/30 hover:bg-stone-900/60"}`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[66px] min-h-auto min-w-auto md:h-[105px]" />
            <div className="absolute h-full pointer-events-none w-full inset-0" />
        </section>
    );
};
