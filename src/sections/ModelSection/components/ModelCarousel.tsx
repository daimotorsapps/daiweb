import { ModelCard } from "@/sections/ModelSection/components/ModelCard";
import { CarouselNavigation } from "@/sections/ModelSection/components/CarouselNavigation";
export type ModelCarouselProps = {
    variant: "full" | "sedans" | "suvs" | "vans";
    listTranslateClass?: string;
    firstTabPanelClass?: string;
};
export const ModelCarousel = (props: ModelCarouselProps) => {
    const {
        variant,
        listTranslateClass = "",
        firstTabPanelClass = "relative box-border caret-transparent hidden w-full mt-16",
    } = props;
    if (variant === "full") {
        return (
            <div className="box-border caret-transparent gap-x-[28.1964px] flex flex-col min-h-[auto] min-w-[auto] gap-y-[28.1964px] md:gap-x-[31.4286px] md:gap-y-[31.4286px]">
                <div className="box-border caret-transparent ml-[-17.5714px] mr-[-17.5714px] min-h-[auto] min-w-[auto] overflow-x-clip px-[17.5714px] md:ml-[-43.4286px] md:mr-[-43.4286px] md:px-[43.4286px]" >
                    <div className="box-border caret-transparent flex relative gap-x-[41.1786px] flex-col gap-y-[41.1786px] md:gap-x-[60.5714px] md:gap-y-[60.5714px]">
                        <div
                            role="tabpanel"
                            className="relative box-border caret-transparent min-h-[auto] min-w-[auto] w-full mt-16"
                        >
                            <div className="relative box-border caret-transparent w-full z-0">
                                <div
                                    role="list"
                                    className={`box-border caret-transparent flex h-full ${listTranslateClass || "translate-x-[-2172px] md:translate-x-[-7158.84px]"}`}
                                >
                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        subTitle="GLS"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GLS-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GLS"
                                        transmission="A/T 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965436d61dbfd3b2e09b1d1_FICHAS TÉCNICAS GRAND i10 GLS.pdf"
                                    />
                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        modelNameInnerClass="opacity-0 translate-y-[115.0%]"
                                        subTitle="GL A/T"
                                        subTitleInnerClass="opacity-0 translate-y-[115.0%]"
                                        imageSrc="../public/img/hatchback/Grandi10-Hatchback-GL-Plata.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GL A/T"
                                        transmission="A/T 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965420d060d242c90234d4d_FICHAS TÉCNICAS GRAND i10 GL.pdf"
                                        showExtraDiv={false}
                                    />

                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        subTitle="GL M/T"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GL-Azul.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GL M/T"
                                        transmission="M/T 5 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695e83883da1f5d2f346e8b7_FICHAS TÉCNICAS GRAND i10 GL AT_compressed.pdf"
                                        showExtraDiv={false}
                                    />
                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        modelNameInnerClass="opacity-0 translate-y-[115.0%]"
                                        subTitle="GLS"
                                        subTitleInnerClass="opacity-0 translate-y-[115.0%]"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GLS-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GLS"
                                        transmission="A/T 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965436d61dbfd3b2e09b1d1_FICHAS TÉCNICAS GRAND i10 GLS.pdf"
                                    />
                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        modelNameInnerClass="opacity-0 translate-y-[115.0%]"
                                        subTitle="GL A/T"
                                        subTitleInnerClass="opacity-0 translate-y-[115.0%]"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GL-Plata.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GL A/T"
                                        transmission="A/T 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965420d060d242c90234d4d_FICHAS TÉCNICAS GRAND i10 GL.pdf"
                                        showExtraDiv={false}
                                    />


                                    <ModelCard
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GL-Azul.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GL M/T"
                                        transmission="M/T 5 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695e83883da1f5d2f346e8b7_FICHAS TÉCNICAS GRAND i10 GL AT_compressed.pdf"
                                        showExtraDiv={false}
                                    />
                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        subTitle="GLS"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GLS-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GLS"
                                        transmission="A/T 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965436d61dbfd3b2e09b1d1_FICHAS TÉCNICAS GRAND i10 GLS.pdf"
                                    />
                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        modelNameInnerClass="opacity-0 translate-y-[115.0%]"
                                        subTitle="GL A/T"
                                        subTitleInnerClass="opacity-0 translate-y-[115.0%]"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GL-Plata.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GL A/T"
                                        transmission="A/T 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965420d060d242c90234d4d_FICHAS TÉCNICAS GRAND i10 GL.pdf"
                                    />


                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        modelNameInnerClass="opacity-0 translate-y-[115.0%]"
                                        subTitle="GL M/T"
                                        subTitleInnerClass="opacity-0 translate-y-[115.0%]"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GL-Azul.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GL M/T"
                                        transmission="M/T 5 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695e83883da1f5d2f346e8b7_FICHAS TÉCNICAS GRAND i10 GL AT_compressed.pdf"
                                    />
                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        modelNameInnerClass="opacity-0 translate-y-[115.0%]"
                                        subTitle="GLS"
                                        subTitleInnerClass="opacity-0 translate-y-[115.0%]"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GLS-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GLS"
                                        transmission="A/T 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965436d61dbfd3b2e09b1d1_FICHAS TÉCNICAS GRAND i10 GLS.pdf"
                                    />
                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        modelNameInnerClass="opacity-0 translate-y-[115.0%]"
                                        subTitle="GL A/T"
                                        subTitleInnerClass="opacity-0 translate-y-[115.0%]"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GL-Plata.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GL A/T"
                                        transmission="A/T 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965420d060d242c90234d4d_FICHAS TÉCNICAS GRAND i10 GL.pdf"
                                        showExtraDiv={false}
                                    />

                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        modelNameInnerClass="opacity-0 translate-y-[115.0%]"
                                        subTitle="GL M/T"
                                        subTitleInnerClass="opacity-0 translate-y-[115.0%]"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GL-Azul.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GL M/T"
                                        transmission="M/T 5 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695e83883da1f5d2f346e8b7_FICHAS TÉCNICAS GRAND i10 GL AT_compressed.pdf"
                                    />
                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        modelNameInnerClass="opacity-0 translate-y-[115.0%]"
                                        subTitle="GLS"
                                        subTitleInnerClass="opacity-0 translate-y-[115.0%]"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GLS-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GLS"
                                        transmission="A/T 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965436d61dbfd3b2e09b1d1_FICHAS TÉCNICAS GRAND i10 GLS.pdf"
                                        showExtraDiv={false}
                                    />
                                    <ModelCard
                                        rootClass=""
                                        modelName="Grand i10"
                                        modelNameInnerClass="opacity-0 translate-y-[115.0%]"
                                        subTitle="GL A/T"
                                        subTitleInnerClass="opacity-0 translate-y-[115.0%]"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GL-Plata.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GL A/T"
                                        transmission="A/T 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965420d060d242c90234d4d_FICHAS TÉCNICAS GRAND i10 GL.pdf"
                                        showExtraDiv={false}
                                    />


                                    <ModelCard
                                        subTitle="GL M/T"
                                        subTitleInnerClass="opacity-0 translate-y-[115.0%]"
                                        imageSrc="./public/img/hatchback/Grandi10-Hatchback-GL-Azul.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="GL M/T"
                                        transmission="M/T 5 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695e83883da1f5d2f346e8b7_FICHAS TÉCNICAS GRAND i10 GL AT_compressed.pdf"
                                        showExtraDiv={false}
                                    />
                                </div>
                            </div>
                            <CarouselNavigation
                                prevWrapperClass="box-border caret-transparent min-h-[auto] min-w-[auto]"
                                prevButtonClass="items-start bg-transparent caret-transparent flex flex-col justify-center ml-[-17px] outline-offset-[3px] p-0 md:-ml-12"
                                prevSpanClass=""
                                prevImageSrc="./public/img/hatchback/Grandi10-Hatchback-GL-Azul.png"
                                prevImageClass=""
                                nextWrapperClass="box-border caret-transparent min-h-[auto] min-w-[auto]"
                                nextButtonClass="items-end bg-transparent caret-transparent flex flex-col justify-center mr-[-17px] outline-offset-[3px] p-0 md:-mr-12"
                                nextSpanClass="-scale-100"
                                nextImageSrc="./public/img/hatchback/Grandi10-Hatchback-GL-Plata.png"
                                nextImageClass=""
                            />
                        </div>
                        <div
                            role="tabpanel"
                            className="relative box-border caret-transparent hidden w-full mt-16"
                        >
                            <div className="relative box-border caret-transparent w-full z-0">
                                <div
                                    role="list"
                                    className="box-border caret-transparent flex h-full"
                                >



                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Elantra"
                                        imageSrc="./public/img/sedan/Elantra-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Elantra"
                                        transmission="A/T 6 IVT"
                                        motor="2.0 L"
                                        potencia="156 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6964ff69390704cd92b6c2de_FICHAS TÉCNICAS ELANTRA_compressed.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Accent"
                                        imageSrc="./public/img/sedan/Accent-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Accent"
                                        transmission="A/T 6 IVT"
                                        motor="1.5L"
                                        potencia="113 HP"
                                        torque="144 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69614662638775eb48fa50b2_FICHAS TÉCNICAS ACCENT_compressed.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Grand i10"
                                        subTitle="Sedán"
                                        imageSrc="./public/img/sedan/Grandi10-Sedan.png"
                                        trimName="Sedán"
                                        transmission="Automática de 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d76f581248231e1ed4ac5_F.T GRAND i10 SEDÁN.pdf"
                                        showExtraDiv={true}
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Elantra"
                                        imageSrc="./public/img/sedan/Elantra-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Elantra"
                                        transmission="A/T 6 IVT"
                                        motor="2.0 L"
                                        potencia="156 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6964ff69390704cd92b6c2de_FICHAS TÉCNICAS ELANTRA_compressed.pdf"
                                        showExtraDiv={true}
                                    />


                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Accent"
                                        imageSrc="./public/img/sedan/Accent-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Accent"
                                        transmission="A/T 6 IVT"
                                        motor="1.5L"
                                        potencia="113 HP"
                                        torque="144 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69614662638775eb48fa50b2_FICHAS TÉCNICAS ACCENT_compressed.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Grand i10"
                                        subTitle="Sedán"
                                        imageSrc="./public/img/sedan/Grandi10-Sedan.png"
                                        trimName="Sedán"
                                        transmission="Automática de 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d76f581248231e1ed4ac5_F.T GRAND i10 SEDÁN.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Elantra"
                                        imageSrc="./public/img/sedan/Elantra-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Elantra"
                                        transmission="A/T 6 IVT"
                                        motor="2.0 L"
                                        potencia="156 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6964ff69390704cd92b6c2de_FICHAS TÉCNICAS ELANTRA_compressed.pdf"
                                        showExtraDiv={true}
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Accent"
                                        imageSrc="./public/img/sedan/Accent-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Accent"
                                        transmission="A/T 6 IVT"
                                        motor="1.5L"
                                        potencia="113 HP"
                                        torque="144 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69614662638775eb48fa50b2_FICHAS TÉCNICAS ACCENT_compressed.pdf"
                                    />



                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Grand i10"
                                        subTitle="Sedán"
                                        imageSrc="./public/img/sedan/Grandi10-Sedan.png"
                                        trimName="Sedán"
                                        transmission="Automática de 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d76f581248231e1ed4ac5_F.T GRAND i10 SEDÁN.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Elantra"
                                        imageSrc="./public/img/sedan/Elantra-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Elantra"
                                        transmission="A/T 6 IVT"
                                        motor="2.0 L"
                                        potencia="156 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6964ff69390704cd92b6c2de_FICHAS TÉCNICAS ELANTRA_compressed.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Accent"
                                        imageSrc="./public/img/sedan/Accent-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Accent"
                                        transmission="A/T 6 IVT"
                                        motor="1.5L"
                                        potencia="113 HP"
                                        torque="144 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69614662638775eb48fa50b2_FICHAS TÉCNICAS ACCENT_compressed.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Grand i10"
                                        subTitle="Sedán"
                                        imageSrc="./public/img/sedan/Grandi10-Sedan.png"
                                        trimName="Sedán"
                                        transmission="Automática de 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d76f581248231e1ed4ac5_F.T GRAND i10 SEDÁN.pdf"
                                    />




                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Elantra"
                                        imageSrc="./public/img/sedan/Elantra-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Elantra"
                                        transmission="A/T 6 IVT"
                                        motor="2.0 L"
                                        potencia="156 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6964ff69390704cd92b6c2de_FICHAS TÉCNICAS ELANTRA_compressed.pdf"
                                        showExtraDiv={true}
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Accent"
                                        imageSrc="./public/img/sedan/Accent-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Accent"
                                        transmission="A/T 6 IVT"
                                        motor="1.5L"
                                        potencia="113 HP"
                                        torque="144 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69614662638775eb48fa50b2_FICHAS TÉCNICAS ACCENT_compressed.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Grand i10"
                                        subTitle="Sedán"
                                        imageSrc="./public/img/sedan/Grandi10-Sedan.png"
                                        trimName="Sedán"
                                        transmission="Automática de 4 vel"
                                        motor="1.2L"
                                        potencia="82 HP"
                                        torque="114 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d76f581248231e1ed4ac5_F.T GRAND i10 SEDÁN.pdf"
                                    />
                                </div>
                            </div>
                            <CarouselNavigation
                                prevImageSrc="./public/img/sedan/Grandi10-Sedan.png"
                                nextImageSrc="./public/img/sedan/Accent-Blanco.png"
                            />
                        </div>



                        <div
                            role="tabpanel"
                            className="relative box-border caret-transparent hidden w-full mt-16"
                        >
                            <div className="relative box-border caret-transparent w-full z-0">
                                <div
                                    role="list"
                                    className="box-border caret-transparent flex h-full"
                                >
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Creta"
                                        imageSrc="./public/img/suv/Creta-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Creta"
                                        transmission="A/T 6 vel"
                                        motor="1.5L"
                                        potencia="113 HP"
                                        torque="144 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6996436f4dba3b7522f49d72_FT CRETA.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Tucson"
                                        subTitle="Premium"
                                        imageSrc="./public/img/suv/Tucson-Premium-Azul.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Premium"
                                        transmission="A/T 6 vel"
                                        motor="2.0 L"
                                        potencia="154 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69651ecab9674f3fa0762a6f_FICHAS TÉCNICAS ACTUALIZADAS-9.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Tucson"
                                        subTitle="Limited"
                                        imageSrc="./public/img/suv/Tucson-Limited-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Limited"
                                        transmission="A/T 6 vel"
                                        motor="2.0 L"
                                        potencia="154 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/696510595cc79a834f5d416d_FICHAS TÉCNICAS TUCSON LIMITED.pdf"
                                    />



                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Palisade"
                                        imageSrc="./public/img/suv/Palisade-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Palisade"
                                        transmission="Automática de 8 vel"
                                        motor="3.8L"
                                        potencia="291 HP"
                                        torque="355 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d8177a4bdd38b9b878f83_FICHAS TÉCNICAS PALISADE.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Creta"
                                        imageSrc="./public/img/suv/Creta-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Creta"
                                        transmission="A/T 6 vel"
                                        motor="1.5L"
                                        potencia="113 HP"
                                        torque="144 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6996436f4dba3b7522f49d72_FT CRETA.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Tucson"
                                        subTitle="Premium"
                                        imageSrc="./public/img/suv/Tucson-Premium-Azul.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Premium"
                                        transmission="A/T 6 vel"
                                        motor="2.0 L"
                                        potencia="154 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69651ecab9674f3fa0762a6f_FICHAS TÉCNICAS ACTUALIZADAS-9.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Tucson"
                                        subTitle="Limited"
                                        imageSrc="./public/img/suv/Tucson-Limited-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Limited"
                                        transmission="A/T 6 vel"
                                        motor="2.0 L"
                                        potencia="154 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/696510595cc79a834f5d416d_FICHAS TÉCNICAS TUCSON LIMITED.pdf"
                                        showExtraDiv={true}
                                    />


                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Palisade"
                                        imageSrc="./public/img/suv/Palisade-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Palisade"
                                        transmission="Automática de 8 vel"
                                        motor="3.8L"
                                        potencia="291 HP"
                                        torque="355 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d8177a4bdd38b9b878f83_FICHAS TÉCNICAS PALISADE.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Creta"
                                        imageSrc="./public/img/suv/Creta-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Creta"
                                        transmission="A/T 6 vel"
                                        motor="1.5L"
                                        potencia="113 HP"
                                        torque="144 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6996436f4dba3b7522f49d72_FT CRETA.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Tucson"
                                        subTitle="Premium"
                                        imageSrc="./public/img/suv/Tucson-Premium-Azul.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Premium"
                                        transmission="A/T 6 vel"
                                        motor="2.0 L"
                                        potencia="154 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69651ecab9674f3fa0762a6f_FICHAS TÉCNICAS ACTUALIZADAS-9.pdf"
                                        showExtraDiv={true}
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Tucson"
                                        subTitle="Limited"
                                        imageSrc="./public/img/suv/Tucson-Limited-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Limited"
                                        transmission="A/T 6 vel"
                                        motor="2.0 L"
                                        potencia="154 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/696510595cc79a834f5d416d_FICHAS TÉCNICAS TUCSON LIMITED.pdf"
                                    />


                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Palisade"
                                        imageSrc="./public/img/suv/Palisade-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Palisade"
                                        transmission="Automática de 8 vel"
                                        motor="3.8L"
                                        potencia="291 HP"
                                        torque="355 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d8177a4bdd38b9b878f83_FICHAS TÉCNICAS PALISADE.pdf"
                                        showExtraDiv={true}
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Creta"
                                        imageSrc="./public/img/suv/Creta-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Creta"
                                        transmission="A/T 6 vel"
                                        motor="1.5L"
                                        potencia="113 HP"
                                        torque="144 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6996436f4dba3b7522f49d72_FT CRETA.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Tucson"
                                        subTitle="Premium"
                                        imageSrc="./public/img/suv/Tucson-Premium-Azul.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Premium"
                                        transmission="A/T 6 vel"
                                        motor="2.0 L"
                                        potencia="154 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69651ecab9674f3fa0762a6f_FICHAS TÉCNICAS ACTUALIZADAS-9.pdf"
                                    />

                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Tucson"
                                        subTitle="Limited"
                                        imageSrc="./public/img/suv/Tucson-Limited-Blanco.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Limited"
                                        transmission="A/T 6 vel"
                                        motor="2.0 L"
                                        potencia="154 HP"
                                        torque="192 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/696510595cc79a834f5d416d_FICHAS TÉCNICAS TUCSON LIMITED.pdf"
                                        showExtraDiv={true}
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Palisade"
                                        imageSrc="./public/img/suv/Palisade-Rojo.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Palisade"
                                        transmission="Automática de 8 vel"
                                        motor="3.8L"
                                        potencia="291 HP"
                                        torque="355 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d8177a4bdd38b9b878f83_FICHAS TÉCNICAS PALISADE.pdf"
                                    />
                                </div>
                            </div>
                            <CarouselNavigation
                                prevImageSrc="./public/img/suv/Palisade-Rojo.png"
                                nextImageSrc="./public/img/suv/Tucson-Premium-Azul.png"
                                prevButtonClass="items-start bg-transparent caret-transparent flex flex-col justify-center ml-[-17px] outline-offset-[3px] p-0 md:-ml-12"
                                nextButtonClass="items-end bg-transparent caret-transparent flex flex-col justify-center mr-[-17px] outline-offset-[3px] p-0 md:-mr-12"
                                prevWrapperClass="box-border caret-transparent"
                                nextWrapperClass="box-border caret-transparent"
                                prevSpanClass=""
                                nextSpanClass=""
                                prevImageClass=""
                                nextImageClass=""
                            />
                        </div>
                        <div
                            role="tabpanel"
                            className="relative box-border caret-transparent hidden w-full mt-16"
                        >
                            <div className="relative box-border caret-transparent w-full z-0">
                                <div
                                    role="list"
                                    className="box-border caret-transparent flex h-full"
                                >
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria VAN"
                                        imageSrc="./public/img/mvp/Staria-VAN.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Con capacidad de carga"
                                        transmission="A/T 8 vel"
                                        motor="3.5L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653a929d64b60954a2bc9e_FICHAS TÉCNICAS STARIA VAN.pdf"
                                        showExtraDiv={true}
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria Wagon"
                                        imageSrc="./public/img/mvp/Staria-WAGON.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="11P"
                                        transmission="A/T 8 vel"
                                        motor="3.5 L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653942e616d5d723ddbee6_FICHAS TÉCNICAS STARIA WAGON 11P.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria Wagon"
                                        imageSrc="./public/img/mvp/Staria-WAGON.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="7P"
                                        transmission="A/T 8 vel"
                                        motor="3.5 L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965305b1f1155e3f70d3894_FICHAS TÉCNICAS STARIA WAGON 7P.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria VAN"
                                        imageSrc="./public/img/mvp/Staria-VAN.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Con capacidad de carga"
                                        transmission="A/T 8 vel"
                                        motor="3.5L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653a929d64b60954a2bc9e_FICHAS TÉCNICAS STARIA VAN.pdf"
                                        showExtraDiv={true}
                                    />

                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria Wagon"
                                        imageSrc="./public/img/mvp/Staria-WAGON.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="11P"
                                        transmission="A/T 8 vel"
                                        motor="3.5 L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653942e616d5d723ddbee6_FICHAS TÉCNICAS STARIA WAGON 11P.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria Wagon"
                                        imageSrc="./public/img/mvp/Staria-WAGON.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="7P"
                                        transmission="A/T 8 vel"
                                        motor="3.5 L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965305b1f1155e3f70d3894_FICHAS TÉCNICAS STARIA WAGON 7P.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria VAN"
                                        imageSrc="./public/img/mvp/Staria-VAN.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Con capacidad de carga"
                                        transmission="A/T 8 vel"
                                        motor="3.5L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653a929d64b60954a2bc9e_FICHAS TÉCNICAS STARIA VAN.pdf"
                                        showExtraDiv={true}
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria Wagon"
                                        imageSrc="./public/img/mvp/Staria-WAGON.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="11P"
                                        transmission="A/T 8 vel"
                                        motor="3.5 L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653942e616d5d723ddbee6_FICHAS TÉCNICAS STARIA WAGON 11P.pdf"
                                    />

                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria Wagon"
                                        imageSrc="./public/img/mvp/Staria-WAGON.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="7P"
                                        transmission="A/T 8 vel"
                                        motor="3.5 L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965305b1f1155e3f70d3894_FICHAS TÉCNICAS STARIA WAGON 7P.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria VAN"
                                        imageSrc="./public/img/mvp/Staria-VAN.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Con capacidad de carga"
                                        transmission="A/T 8 vel"
                                        motor="3.5L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653a929d64b60954a2bc9e_FICHAS TÉCNICAS STARIA VAN.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria Wagon"
                                        imageSrc="./public/img/mvp/Staria-WAGON.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="11P"
                                        transmission="A/T 8 vel"
                                        motor="3.5 L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653942e616d5d723ddbee6_FICHAS TÉCNICAS STARIA WAGON 11P.pdf"
                                        showExtraDiv={true}
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria Wagon"
                                        imageSrc="./public/img/mvp/Staria-WAGON.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="7P"
                                        transmission="A/T 8 vel"
                                        motor="3.5 L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965305b1f1155e3f70d3894_FICHAS TÉCNICAS STARIA WAGON 7P.pdf"
                                    />

                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria VAN"
                                        imageSrc="./public/img/mvp/Staria-VAN.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="Con capacidad de carga"
                                        transmission="A/T 8 vel"
                                        motor="3.5L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653a929d64b60954a2bc9e_FICHAS TÉCNICAS STARIA VAN.pdf"
                                        showExtraDiv={true}
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria Wagon"
                                        imageSrc="./public/img/mvp/Staria-WAGON.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="11P"
                                        transmission="A/T 8 vel"
                                        motor="3.5 L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653942e616d5d723ddbee6_FICHAS TÉCNICAS STARIA WAGON 11P.pdf"
                                    />
                                    <ModelCard
                                        rootClass="outline-offset-[3px]"
                                        modelName="Staria Wagon"
                                        imageSrc="./public/img/mvp/Staria-WAGON.png"
                                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                                        trimName="7P"
                                        transmission="A/T 8 vel"
                                        motor="3.5 L"
                                        potencia="268 HP"
                                        torque="331 Nm"
                                        /* cotizarHref="/cotizar" */
                                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965305b1f1155e3f70d3894_FICHAS TÉCNICAS STARIA WAGON 7P.pdf"
                                    />
                                </div>
                            </div>

                            <CarouselNavigation
                                prevImageSrc="./public/img/mvp/Staria-WAGON.png"
                                nextImageSrc="./public/img/mvp/Staria-WAGON.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (variant === "sedans") {
        return (
            <div role="tabpanel" className={firstTabPanelClass}>
                <div className="relative box-border caret-transparent w-full z-0">
                    <div role="list" className="box-border caret-transparent flex h-full">
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Elantra"
                            imageSrc="./public/img/sedan/Elantra-Rojo.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Elantra"
                            transmission="A/T 6 IVT"
                            motor="2.0 L"
                            potencia="156 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6964ff69390704cd92b6c2de_FICHAS TÉCNICAS ELANTRA_compressed.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Accent"
                            imageSrc="./public/img/sedan/Accent-Blanco.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Accent"
                            transmission="A/T 6 IVT"
                            motor="1.5L"
                            potencia="113 HP"
                            torque="144 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69614662638775eb48fa50b2_FICHAS TÉCNICAS ACCENT_compressed.pdf"
                        />

                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Grand i10"
                            subTitle="Sedán"
                            imageSrc="./public/img/sedan/Grandi10-Sedan.png"
                            trimName="Sedán"
                            transmission="Automática de 4 vel"
                            motor="1.2L"
                            potencia="82 HP"
                            torque="114 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d76f581248231e1ed4ac5_F.T GRAND i10 SEDÁN.pdf"
                            showExtraDiv={true}
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Elantra"
                            imageSrc="./public/img/sedan/Elantra-Rojo.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Elantra"
                            transmission="A/T 6 IVT"
                            motor="2.0 L"
                            potencia="156 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6964ff69390704cd92b6c2de_FICHAS TÉCNICAS ELANTRA_compressed.pdf"
                            showExtraDiv={true}
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Accent"
                            imageSrc="./public/img/sedan/Accent-Blanco.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Accent"
                            transmission="A/T 6 IVT"
                            motor="1.5L"
                            potencia="113 HP"
                            torque="144 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69614662638775eb48fa50b2_FICHAS TÉCNICAS ACCENT_compressed.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Grand i10"
                            subTitle="Sedán"
                            imageSrc="./public/img/sedan/Grandi10-Sedan.png"
                            trimName="Sedán"
                            transmission="Automática de 4 vel"
                            motor="1.2L"
                            potencia="82 HP"
                            torque="114 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d76f581248231e1ed4ac5_F.T GRAND i10 SEDÁN.pdf"
                        />

                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Elantra"
                            imageSrc="./public/img/sedan/Elantra-Rojo.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Elantra"
                            transmission="A/T 6 IVT"
                            motor="2.0 L"
                            potencia="156 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6964ff69390704cd92b6c2de_FICHAS TÉCNICAS ELANTRA_compressed.pdf"
                            showExtraDiv={true}
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Accent"
                            imageSrc="./public/img/sedan/Accent-Blanco.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Accent"
                            transmission="A/T 6 IVT"
                            motor="1.5L"
                            potencia="113 HP"
                            torque="144 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69614662638775eb48fa50b2_FICHAS TÉCNICAS ACCENT_compressed.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Grand i10"
                            subTitle="Sedán"
                            imageSrc="./public/img/sedan/Grandi10-Sedan.png"
                            trimName="Sedán"
                            transmission="Automática de 4 vel"
                            motor="1.2L"
                            potencia="82 HP"
                            torque="114 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d76f581248231e1ed4ac5_F.T GRAND i10 SEDÁN.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Elantra"
                            imageSrc="./public/img/sedan/Elantra-Rojo.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Elantra"
                            transmission="A/T 6 IVT"
                            motor="2.0 L"
                            potencia="156 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6964ff69390704cd92b6c2de_FICHAS TÉCNICAS ELANTRA_compressed.pdf"
                        />

                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Accent"
                            imageSrc="./public/img/sedan/Accent-Blanco.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Accent"
                            transmission="A/T 6 IVT"
                            motor="1.5L"
                            potencia="113 HP"
                            torque="144 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69614662638775eb48fa50b2_FICHAS TÉCNICAS ACCENT_compressed.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Grand i10"
                            subTitle="Sedán"
                            imageSrc="./public/img/sedan/Grandi10-Sedan.png"
                            trimName="Sedán"
                            transmission="Automática de 4 vel"
                            motor="1.2L"
                            potencia="82 HP"
                            torque="114 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d76f581248231e1ed4ac5_F.T GRAND i10 SEDÁN.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Elantra"
                            imageSrc="./public/img/sedan/Elantra-Rojo.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Elantra"
                            transmission="A/T 6 IVT"
                            motor="2.0 L"
                            potencia="156 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6964ff69390704cd92b6c2de_FICHAS TÉCNICAS ELANTRA_compressed.pdf"
                            showExtraDiv={true}
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Accent"
                            imageSrc="./public/img/sedan/Accent-Blanco.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Accent"
                            transmission="A/T 6 IVT"
                            motor="1.5L"
                            potencia="113 HP"
                            torque="144 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69614662638775eb48fa50b2_FICHAS TÉCNICAS ACCENT_compressed.pdf"
                        />

                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Grand i10"
                            subTitle="Sedán"
                            imageSrc="./public/img/sedan/Grandi10-Sedan.png"
                            trimName="Sedán"
                            transmission="Automática de 4 vel"
                            motor="1.2L"
                            potencia="82 HP"
                            torque="114 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d76f581248231e1ed4ac5_F.T GRAND i10 SEDÁN.pdf"
                        />
                    </div>
                </div>
                <CarouselNavigation
                    prevImageSrc="./public/img/sedan/Grandi10-Sedan.png"
                    nextImageSrc="./public/img/sedan/Accent-Blanco.png"
                />
            </div>
        );
    }

    if (variant === "suvs") {
        return (
            <div role="tabpanel" className={firstTabPanelClass}>
                <div className="relative box-border caret-transparent w-full z-0">
                    <div role="list" className="box-border caret-transparent flex h-full">
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Creta"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/699dc30fedebb4b0d6d72a19_Creta_Blanco_.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Creta"
                            transmission="A/T 6 vel"
                            motor="1.5L"
                            potencia="113 HP"
                            torque="144 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6996436f4dba3b7522f49d72_FT CRETA.pdf"
                        />

                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Tucson"
                            subTitle="Premium"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69651ebc37abd4c7b56c5c58_Tucson-premium-Azul_.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Premium"
                            transmission="A/T 6 vel"
                            motor="2.0 L"
                            potencia="154 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69651ecab9674f3fa0762a6f_FICHAS TÉCNICAS ACTUALIZADAS-9.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Tucson"
                            subTitle="Limited"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69823c97ec17a7e03309284f_Tucson-blanco.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Limited"
                            transmission="A/T 6 vel"
                            motor="2.0 L"
                            potencia="154 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/696510595cc79a834f5d416d_FICHAS TÉCNICAS TUCSON LIMITED.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Palisade"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/695f0af617714685f4d6adc9_Palisade-rojo.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Palisade"
                            transmission="Automática de 8 vel"
                            motor="3.8L"
                            potencia="291 HP"
                            torque="355 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d8177a4bdd38b9b878f83_FICHAS TÉCNICAS PALISADE.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Creta"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/699dc30fedebb4b0d6d72a19_Creta_Blanco_.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Creta"
                            transmission="A/T 6 vel"
                            motor="1.5L"
                            potencia="113 HP"
                            torque="144 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6996436f4dba3b7522f49d72_FT CRETA.pdf"
                        />

                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Tucson"
                            subTitle="Premium"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69651ebc37abd4c7b56c5c58_Tucson-premium-Azul_.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Premium"
                            transmission="A/T 6 vel"
                            motor="2.0 L"
                            potencia="154 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69651ecab9674f3fa0762a6f_FICHAS TÉCNICAS ACTUALIZADAS-9.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Tucson"
                            subTitle="Limited"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69823c97ec17a7e03309284f_Tucson-blanco.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Limited"
                            transmission="A/T 6 vel"
                            motor="2.0 L"
                            potencia="154 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/696510595cc79a834f5d416d_FICHAS TÉCNICAS TUCSON LIMITED.pdf"
                            showExtraDiv={true}
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Palisade"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/695f0af617714685f4d6adc9_Palisade-rojo.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Palisade"
                            transmission="Automática de 8 vel"
                            motor="3.8L"
                            potencia="291 HP"
                            torque="355 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d8177a4bdd38b9b878f83_FICHAS TÉCNICAS PALISADE.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Creta"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/699dc30fedebb4b0d6d72a19_Creta_Blanco_.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Creta"
                            transmission="A/T 6 vel"
                            motor="1.5L"
                            potencia="113 HP"
                            torque="144 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6996436f4dba3b7522f49d72_FT CRETA.pdf"
                        />

                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Tucson"
                            subTitle="Premium"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69651ebc37abd4c7b56c5c58_Tucson-premium-Azul_.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Premium"
                            transmission="A/T 6 vel"
                            motor="2.0 L"
                            potencia="154 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69651ecab9674f3fa0762a6f_FICHAS TÉCNICAS ACTUALIZADAS-9.pdf"
                            showExtraDiv={true}
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Tucson"
                            subTitle="Limited"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69823c97ec17a7e03309284f_Tucson-blanco.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Limited"
                            transmission="A/T 6 vel"
                            motor="2.0 L"
                            potencia="154 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/696510595cc79a834f5d416d_FICHAS TÉCNICAS TUCSON LIMITED.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Palisade"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/695f0af617714685f4d6adc9_Palisade-rojo.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Palisade"
                            transmission="Automática de 8 vel"
                            motor="3.8L"
                            potencia="291 HP"
                            torque="355 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d8177a4bdd38b9b878f83_FICHAS TÉCNICAS PALISADE.pdf"
                            showExtraDiv={true}
                        />

                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Creta"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/699dc30fedebb4b0d6d72a19_Creta_Blanco_.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Creta"
                            transmission="A/T 6 vel"
                            motor="1.5L"
                            potencia="113 HP"
                            torque="144 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6996436f4dba3b7522f49d72_FT CRETA.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Tucson"
                            subTitle="Premium"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69651ebc37abd4c7b56c5c58_Tucson-premium-Azul_.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Premium"
                            transmission="A/T 6 vel"
                            motor="2.0 L"
                            potencia="154 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69651ecab9674f3fa0762a6f_FICHAS TÉCNICAS ACTUALIZADAS-9.pdf"
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Tucson"
                            subTitle="Limited"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69823c97ec17a7e03309284f_Tucson-blanco.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Limited"
                            transmission="A/T 6 vel"
                            motor="2.0 L"
                            potencia="154 HP"
                            torque="192 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/696510595cc79a834f5d416d_FICHAS TÉCNICAS TUCSON LIMITED.pdf"
                            showExtraDiv={true}
                        />
                        <ModelCard
                            rootClass="outline-offset-[3px]"
                            modelName="Palisade"
                            imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/695f0af617714685f4d6adc9_Palisade-rojo.png"
                            imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                            trimName="Palisade"
                            transmission="Automática de 8 vel"
                            motor="3.8L"
                            potencia="291 HP"
                            torque="355 Nm"
                            /* cotizarHref="/cotizar" */
                            fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/695d8177a4bdd38b9b878f83_FICHAS TÉCNICAS PALISADE.pdf"
                        />
                    </div>
                </div>

                <CarouselNavigation
                    prevImageSrc="./public/img/suv/Palisade-rojo.png"
                    nextImageSrc="./public/img/suv/Tucson-premium-Azul.png"
                    prevButtonClass="items-start bg-transparent caret-transparent flex flex-col justify-center ml-[-17px] outline-offset-[3px] p-0 md:-ml-12"
                    nextButtonClass="items-end bg-transparent caret-transparent flex flex-col justify-center mr-[-17px] outline-offset-[3px] p-0 md:-mr-12"
                    prevWrapperClass="box-border caret-transparent"
                    nextWrapperClass="box-border caret-transparent"
                    prevSpanClass=""
                    nextSpanClass=""
                    prevImageClass=""
                    nextImageClass=""
                />
            </div>
        );
    }

    return (
        <div role="tabpanel" className={firstTabPanelClass}>
            <div className="relative box-border caret-transparent w-full z-0">
                <div role="list" className="box-border caret-transparent flex h-full">
                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria VAN"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69653d3ab065e06e71cb14bd_Staria-Van.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="Con capacidad de carga"
                        transmission="A/T 8 vel"
                        motor="3.5L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653a929d64b60954a2bc9e_FICHAS TÉCNICAS STARIA VAN.pdf"
                        showExtraDiv={true}
                    />
                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria Wagon"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="11P"
                        transmission="A/T 8 vel"
                        motor="3.5 L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653942e616d5d723ddbee6_FICHAS TÉCNICAS STARIA WAGON 11P.pdf"
                    />

                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria Wagon"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="7P"
                        transmission="A/T 8 vel"
                        motor="3.5 L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965305b1f1155e3f70d3894_FICHAS TÉCNICAS STARIA WAGON 7P.pdf"
                    />
                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria VAN"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69653d3ab065e06e71cb14bd_Staria-Van.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="Con capacidad de carga"
                        transmission="A/T 8 vel"
                        motor="3.5L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653a929d64b60954a2bc9e_FICHAS TÉCNICAS STARIA VAN.pdf"
                        showExtraDiv={true}
                    />
                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria Wagon"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="11P"
                        transmission="A/T 8 vel"
                        motor="3.5 L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653942e616d5d723ddbee6_FICHAS TÉCNICAS STARIA WAGON 11P.pdf"
                    />
                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria Wagon"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="7P"
                        transmission="A/T 8 vel"
                        motor="3.5 L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965305b1f1155e3f70d3894_FICHAS TÉCNICAS STARIA WAGON 7P.pdf"
                    />

                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria VAN"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69653d3ab065e06e71cb14bd_Staria-Van.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="Con capacidad de carga"
                        transmission="A/T 8 vel"
                        motor="3.5L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653a929d64b60954a2bc9e_FICHAS TÉCNICAS STARIA VAN.pdf"
                        showExtraDiv={true}
                    />
                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria Wagon"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="11P"
                        transmission="A/T 8 vel"
                        motor="3.5 L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653942e616d5d723ddbee6_FICHAS TÉCNICAS STARIA WAGON 11P.pdf"
                    />
                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria Wagon"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="7P"
                        transmission="A/T 8 vel"
                        motor="3.5 L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965305b1f1155e3f70d3894_FICHAS TÉCNICAS STARIA WAGON 7P.pdf"
                    />

                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria VAN"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69653d3ab065e06e71cb14bd_Staria-Van.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="Con capacidad de carga"
                        transmission="A/T 8 vel"
                        motor="3.5L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653a929d64b60954a2bc9e_FICHAS TÉCNICAS STARIA VAN.pdf"
                    />
                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria Wagon"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="11P"
                        transmission="A/T 8 vel"
                        motor="3.5 L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653942e616d5d723ddbee6_FICHAS TÉCNICAS STARIA WAGON 11P.pdf"
                        showExtraDiv={true}
                    />
                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria Wagon"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="7P"
                        transmission="A/T 8 vel"
                        motor="3.5 L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965305b1f1155e3f70d3894_FICHAS TÉCNICAS STARIA WAGON 7P.pdf"
                    />
                    <ModelCard
                        rootClass="outline-offset-[3px]"
                        modelName="Staria VAN"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/69653d3ab065e06e71cb14bd_Staria-Van.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="Con capacidad de carga"
                        transmission="A/T 8 vel"
                        motor="3.5L"
                        potencia="268 HP"
                        torque="331 Nm"
                        /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653a929d64b60954a2bc9e_FICHAS TÉCNICAS STARIA VAN.pdf"
                        showExtraDiv={true}
                    />

                    <ModelCard
                        rootClass="outline-offset-[3px]" modelName="Staria Wagon"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="11P"
                        transmission="A/T 8 vel" motor="3.5 L" potencia="268 HP"
                        torque="331 Nm" /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/69653942e616d5d723ddbee6_FICHAS TÉCNICAS STARIA WAGON 11P.pdf"
                    />
                    <ModelCard
                        rootClass="outline-offset-[3px]" modelName="Staria Wagon"
                        imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/696538854f30d525b5e71656_Staria-WAGON.png"
                        imageSizes="(max-width: 767px) 100vw, 700px, 100vw"
                        trimName="7P"
                        transmission="A/T 8 vel" motor="3.5 L" potencia="268 HP"
                        torque="331 Nm" /* cotizarHref="/cotizar" */
                        fichaTecnicaHref="https://cdn.prod.website-files.com/695d3a709b2e0524dd305631/6965305b1f1155e3f70d3894_FICHAS TÉCNICAS STARIA WAGON 7P.pdf"
                    />
                </div>
            </div>
            <CarouselNavigation
                prevImageSrc="./public/mvp/img/Staria-WAGON.png" nextImageSrc="./public/mvp/img/Staria-WAGON.png"
            />
        </div>
    );
};

