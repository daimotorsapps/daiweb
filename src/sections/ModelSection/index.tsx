import { useEffect, useState } from "react";
import { ModelCard } from "./components/ModelCard";
import { useModelos } from "../../hooks/useModelos";
import { tabsConfig, type Tab } from "./modelsData";

export const ModelSection = () => {
    const [activeTab, setActiveTab] = useState<Tab>("hatchback");
    const [carouselIdx, setCarouselIdx] = useState(0);
    const [direction, setDirection] = useState<'prev' | 'next' | null>(null);
    const { model, modelIndex, setModel } = useModelos(s => s)

    const currentModels = tabsConfig.find((t) => t.key === activeTab)?.models ?? [];
    const visibleModel = currentModels[carouselIdx];

    const handleTabChange = (key: Tab) => {
        setDirection('next');
        setActiveTab(key);
        setCarouselIdx(0);
        setModel(key)
    }

    const prev = () => {
        setDirection('prev');
        setCarouselIdx((i) => (i - 1 + currentModels.length) % currentModels.length);
    }
    const next = () => {
        setDirection('next');
        setCarouselIdx((i) => (i + 1) % currentModels.length);
    }

    const prevIdx = (carouselIdx - 1 + currentModels.length) % currentModels.length;
    const nextIdx = (carouselIdx + 1) % currentModels.length;
    const prevModel = currentModels[prevIdx];
    const nextModel = currentModels[nextIdx];

    useEffect(() => {
        if (!model) return
        const tabExists = tabsConfig.some(t => t.key === model)
        if (tabExists) {
            setActiveTab(model)
            setCarouselIdx(modelIndex)
        }
    }, [model, modelIndex])

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
                                className="relative bg-transparent border-l-stone-900 border-r-stone-900 border-t-stone-900 block min-h-auto min-w-40 -outline-offset-2 text-center w-full p-5 border-b border-b-stone-900/20 transition-all duration-200 md:p-6 hover:opacity-70"
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
                                        <div className="box-border flex w-full md:w-full">
                                            <ModelCard
                                                rootClass="w-full mr-0"
                                                modelName={visibleModel.modelName}
                                                subTitle={visibleModel.subTitle}
                                                imageSrc={visibleModel.imageSrc}
                                                imageSizes={visibleModel.imageSizes}
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
                                                onClick={() => setCarouselIdx(i)}
                                                aria-label={`Ver modelo ${i + 1}`}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${i === carouselIdx ? "w-8 bg-stone-900" : "w-2 bg-stone-900/30 hover:bg-stone-900/60"}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Carousel nav - behind ModelCard, peeking 30% */}
                            {currentModels.length > 1 && prevModel && nextModel && (
                                <div className="absolute flex justify-between items-center w-full z-[5] top-[240px] md:top-[270px]">
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
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[66px] min-h-auto min-w-auto md:h-[105px]" />
            <div className="absolute h-full pointer-events-none w-full inset-0" />
        </section>
    );
};
