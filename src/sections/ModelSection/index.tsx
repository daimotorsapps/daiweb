import { useState } from "react";
import { ModelCard } from "@/sections/ModelSection/components/ModelCard";
type Tab = "hatchback" | "sedan" | "suv" | "mvp";
type CarModel = {
 modelName: string;
 subTitle?: string;
 imageSrc: string;
 imageSizes?: string;
 trimName: string;
 transmission: string;
 motor: string;
 potencia: string;
 torque: string;
 cotizarHref: string;
 fichaTecnicaHref: string;
};
const hatchbackModels: CarModel[] = [
 {
 modelName: "Grand i10",
 subTitle: "GLS",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/696544b630bc623e59fcb862_Grandi10-Hatchback-GLS-rojo.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "GLS",
 transmission: "A/T 4 vel",
 motor: "1.2L",
 potencia: "82 HP",
 torque: "114 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965436d61dbfd3b2e09b1d1_FICHAS TÉCNICAS GRAND i10 GLS.pdf",
 },
{
 modelName: "Grand i10",
 subTitle: "GL A/T",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69823fe186892428b7a8fab3_Grandi10-Hatchback-GL-Plata.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "GL A/T",
 transmission: "A/T 4 vel",
 motor: "1.2L",
 potencia: "82 HP",
 torque: "114 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965420d060d242c90234d4d_FICHAS TÉCNICAS GRAND i10 GL.pdf",
 },
 {
 modelName: "Grand i10",
 subTitle: "GL M/T",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69856148203811e31988110b_Grandi10-Hatchback-GL-Azul.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "GL M/T",
 transmission: "M/T 5 vel",
 motor: "1.2L",
 potencia: "82 HP",
 torque: "114 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695e83883da1f5d2f346e8b7_FICHAS TÉCNICAS GRAND i10 GL AT_compressed.pdf",
 },
];
const sedanModels: CarModel[] = [
 {
 modelName: "Elantra",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/698561c627e39b93b4031662_Elantra-rojo.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "Elantra",
 transmission: "A/T 6 IVT",
 motor: "2.0 L",
 potencia: "156 HP",
 torque: "192 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6964ff69390704cd92b6c2de_FICHAS TÉCNICAS ELANTRA_compressed.pdf",
 },
{
 modelName: "Accent",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/698561ffedb76e54564e3e20_Accent-blanco.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "Accent",
 transmission: "A/T 6 IVT",
 motor: "1.5L",
 potencia: "113 HP",
 torque: "144 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69614662638775eb48fa50b2_FICHAS TÉCNICAS ACCENT_compressed.pdf",
 },
{
 modelName: "Grand i10",
 subTitle: "Sedán",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/695d6ee0057d4f637c28595b_Grandi10_sedan_fondo_transparente.png",
 trimName: "Sedán",
 transmission: "Automática de 4 vel",
 motor: "1.2L",
 potencia: "82 HP",
 torque: "114 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d76f581248231e1ed4ac5_F.T GRAND i10 SEDÁN.pdf",
 },
];

const suvModels: CarModel[] = [
 {
 modelName: "Creta",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/699dc30fedebb4b0d6d72a19_Creta_Blanco_.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "Creta",
 transmission: "A/T 6 vel",
 motor: "1.5L",
 potencia: "113 HP",
 torque: "144 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6996436f4dba3b7522f49d72_FT CRETA.pdf",
 },
{
 modelName: "Tucson",
 subTitle: "Premium",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69651ebc37abd4c7b56c5c58_Tucson-premium-Azul_.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "Premium",
 transmission: "A/T 6 vel",
 motor: "2.0 L",
 potencia: "154 HP",
 torque: "192 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69651ecab9674f3fa0762a6f_FICHAS TÉCNICAS ACTUALIZADAS-9.pdf",
 },
{
 modelName: "Tucson",
 subTitle: "Limited",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69823c97ec17a7e03309284f_Tucson-blanco.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "Limited",
 transmission: "A/T 6 vel",
 motor: "2.0 L",
 potencia: "154 HP",
 torque: "192 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/696510595cc79a834f5d416d_FICHAS TÉCNICAS TUCSON LIMITED.pdf",
 },
{
 modelName: "Palisade",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/695f0af617714685f4d6adc9_Palisade-rojo.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "Palisade",
 transmission: "Automática de 8 vel",
 motor: "3.8L",
 potencia: "291 HP",
 torque: "355 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d8177a4bdd38b9b878f83_FICHAS TÉCNICAS PALISADE.pdf",
 },
];

const mvpModels: CarModel[] = [
 {
 modelName: "Staria VAN",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/69653d3ab065e06e71cb14bd_Staria-Van.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "Con capacidad de carga",
 transmission: "A/T 8 vel",
 motor: "3.5L",
 potencia: "268 HP",
 torque: "331 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653a929d64b60954a2bc9e_FICHAS TÉCNICAS STARIA VAN.pdf",
 },
{
 modelName: "Staria Wagon",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "11P",
 transmission: "A/T 8 vel",
 motor: "3.5 L",
 potencia: "268 HP",
 torque: "331 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653942e616d5d723ddbee6_FICHAS TÉCNICAS STARIA WAGON 11P.pdf",
 },
{
 modelName: "Staria Wagon",
 imageSrc: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png",
 imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
 trimName: "7P",
 transmission: "A/T 8 vel",
 motor: "3.5 L",
 potencia: "268 HP",
 torque: "331 Nm",
 cotizarHref: "#inicio",
 fichaTecnicaHref: "https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965305b1f1155e3f70d3894_FICHAS TÉCNICAS STARIA WAGON 7P.pdf",
 },
];
const tabsConfig: { key: Tab; label: string; models: CarModel[] }[] = [
 { key: "hatchback", label: "Hatchback", models: hatchbackModels },
 { key: "sedan", label: "Sedán", models: sedanModels },
 { key: "suv", label: "SUV", models: suvModels },
 { key: "mvp", label: "MVP", models: mvpModels },
];

export const ModelSection = () => {
 const [activeTab, setActiveTab] = useState<Tab>("hatchback");
 const [carouselIdx, setCarouselIdx] = useState(0);
 const currentModels = tabsConfig.find((t) => t.key === activeTab)?.models ?? [];
 const handleTabChange = (key: Tab) => {
 setActiveTab(key);
 setCarouselIdx(0);
 };
 const prev = () => setCarouselIdx((i) => Math.max(0, i - 1));
 const next = () => setCarouselIdx((i) => Math.min(currentModels.length - 1, i + 1));
 const visibleModel = currentModels[carouselIdx];
 return (
 <section className="relative items-stretch bg-gray-200 flex flex-col justify-center min-h-auto min-w-auto">
 <div className="relative h-[66.3571px] min-h-auto min-w-auto md:h-[105.143px]" />
 <div className="relative box-border flex flex-col justify-center max-w-[1440px] min-h-auto min-w-auto gap-y-[41.1786px] w-[calc(100%_-_35.1429px)] z-[1] mx-auto md:w-[calc(100%_-_86.8571px)]" >
 <div className="box-border flex flex-col min-h-auto min-w-auto gap-y-[28.1964px] md:gap-y-[31.4286px]">
 {/* Category tabs */}
<div
 role="tablist"
className="box-border flex ml-[-17.5714px] mr-[-17.5714px] min-h-auto min-w-auto overflow-x-auto gap-y-0 px-[17.5714px] md:ml-[-43.4286px] md:mr-[-43.4286px] md:px-[43.4286px]"
 >
 {tabsConfig.map((tab) => (
 <button
 key={tab.key}
 role="tab"
aria-selected={activeTab === tab.key}
 onClick={() => handleTabChange(tab.key)}
 className={`relative bg-transparent border-l-stone-900 border-r-stone-900 border-t-stone-900 block min-h-auto min-w-40 -outline-offset-2 text-center w-full p-[20.1964px] border-b border-b-stone-900/20 transition-all duration-200 md:p-[23.4286px] hover:opacity-70` }
 >
 <span
 className={`box-border flow-root transition-all duration-200 ${activeTab === tab.key ? "font-bold" : "opacity-70"}`}
 >
 {tab.label}
 </span>
<span
 className={`absolute bg-stone-900 block h-[1.5px] w-full left-0 bottom-0 transition-transform duration-300 origin-left ${activeTab === tab.key ? "scale-x-100" : "scale-x-0"}`}
 />
 </button>
 ))}
 </div>

 {/* Model carousel */}
 <div className="box-border flex flex-col min-h-auto min-w-auto gap-y-[28.1964px] md:gap-y-[31.4286px]">
 <div className="box-border ml-[-17.5714px] mr-[-17.5714px] min-h-auto min-w-auto overflow-x-clip px-[17.5714px] md:ml-[-43.4286px] md:mr-[-43.4286px] md:px-[43.4286px]">
 <div className="relative mt-16">
 {/* Single model display */}
{visibleModel && (
 <div key={`${activeTab}-${carouselIdx}`} style={{ animation: "fade-in 0.5s ease-out forwards" }}>
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
 cotizarHref={visibleModel.cotizarHref}
 fichaTecnicaHref={visibleModel.fichaTecnicaHref}
 />
 </div>
 </div>
 )}
 {/* Carousel nav */}
{currentModels.length > 1 && (
 <div className="absolute flex justify-between w-full z-[99]" style={{ top: "160px" }}>
 <button
 onClick={prev}
 disabled={carouselIdx === 0}
 aria-label="Modelo anterior"
className={`items-start bg-white/80 flex flex-col justify-center ml-[-17px] p-0 md:-ml-12 transition-all duration-200 hover:bg-white w-[60px] h-[60px] justify-center items-center ${carouselIdx === 0 ? "opacity-30 cursor-not-allowed" : "hover:shadow-md active:scale-95"}`}
 >
 <span className="block w-full h-full bg-[url('https://cdn.prod.website-files.com/695b182e874dc417335a062b/6984a2a36f9f6b30bbaf92f6_Vector%20%282')] bg-no-repeat bg-center" />
 </button>
<button
 onClick={next}
 disabled={carouselIdx === currentModels.length - 1}
 aria-label="Modelo siguiente"
className={`items-end bg-white/80 flex flex-col justify-center mr-[-17px] p-0 md:-mr-12 transition-all duration-200 hover:bg-white w-[60px] h-[60px] justify-center items-center -scale-x-100 ${carouselIdx === currentModels.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:shadow-md active:scale-95"}`}
 >
 <span className="block w-full h-full bg-[url('https://cdn.prod.website-files.com/695b182e874dc417335a062b/6984a2a36f9f6b30bbaf92f6_Vector%20%282')] bg-no-repeat bg-center" />
 </button>
 </div>
 )}

 {/* Dot indicators */}
{currentModels.length > 1 && ( <div className="flex justify-center gap-2 mt-6">
{currentModels.map((_, i) => ( <button
key={i} onClick={() => setCarouselIdx(i)}
aria-label={`Ver modelo ${i + 1}`}
className={`h-1.5 rounded-full transition-all duration-300 ${i === carouselIdx ? "w-8 bg-stone-900" : "w-2 bg-stone-900/30 hover:bg-stone-900/60"}`}
/>
))} </div>
)}</div>
</div>
</div>
</div>
</div>
<div className="relative h-[66.3571px] min-h-auto min-w-auto md:h-[105.143px]" />
<div className="absolute h-full pointer-events-none w-full inset-0" />
</section>
);};

