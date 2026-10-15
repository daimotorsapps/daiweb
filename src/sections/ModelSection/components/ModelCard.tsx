import type { ReactNode } from "react";

export type ModelCardProps = {
    modelName: string;
    subTitle?: string;
    imageSrc: string;
    trimName: string;
    transmission: string;
    motor: string;
    potencia: string;
    torque: string;
    fichaTecnicaHref: string;
    navContent?: ReactNode;
};

function SpecCell({ label, value, isLast }: { label: string; value: string; isLast?: boolean }) {
    return (
        <div className="relative text-white/60 flex flex-col items-center justify-center text-center px-5 py-4 md:px-7 md:py-6">
            <p className="font-medium text-base leading-6 mb-5 md:mb-6">
                {label}
            </p>
            <p className="text-white text-[28px] font-medium leading-[31px] md:text-[31px] md:leading-[35px]">
                {value}
            </p>
            {!isLast && (
                <div className="absolute bg-white/30 h-px w-full left-0 bottom-0 md:h-[60px] md:w-px md:left-auto md:right-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2" />
            )}
        </div>
    );
}

export const ModelCard = (props: ModelCardProps) => {
    return (
        <div
            role="listitem"
            className="relative shrink-0 list-none w-full"
        >
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-center w-full">
                    <div className="w-fit">
                        <h4 className="relative text-zinc-300 text-[64px] italic font-bold tracking-[-5.4px] leading-[67px] text-center uppercase w-full md:text-[180px] md:leading-[189px]">
                            <span className="text-[64px] inline-block leading-[67px] md:text-[180px] md:leading-[189px]">
                                {props.modelName}
                            </span>
                        </h4>
                        {props.subTitle && (
                            <div className="relative text-zinc-300 text-[32px] italic font-bold tracking-[-5.4px] leading-[34px] uppercase text-right w-full md:text-[64px] md:leading-[67px]">
                                <span className="text-[32px] inline-block leading-[34px] md:text-[64px] md:leading-[67px]">
                                    {props.subTitle}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative flex justify-center w-full -mt-8 md:-mt-28">
                    <img
                        src={props.imageSrc}
                        alt={`${props.modelName} ${props.subTitle ?? ""}`}
                        width={700}
                        height={492}
                        loading="lazy"
                        className="relative max-w-[480px] object-cover align-bottom w-full z-[3] md:max-w-screen-sm"
                    />
                    {props.navContent && (
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full flex justify-between items-center z-[1]">
                            {props.navContent}
                        </div>
                    )}
                </div>
                <div className="relative bg-stone-900 grid grid-cols-1 md:grid-cols-5 max-w-[1048px] w-full z-[10] -mt-4 md:-mt-20">
                    <div className="bg-white flex flex-col items-end justify-between text-right p-5 md:p-6">
                        <p className="text-[22px] font-medium leading-[24px] uppercase mb-5 md:text-[24px] md:leading-[26px] md:mb-6 w-full text-center md:text-right">
                            <span className="block w-full md:text-right">
                                {props.trimName}
                            </span>
                        </p>
                        <p className="text-sm font-medium leading-[21px] w-full text-center md:text-right">
                            <span className="block w-full md:text-right">
                                {props.transmission}
                            </span>
                        </p>
                    </div>
                    <SpecCell label="Motor" value={props.motor} />
                    <SpecCell label="Potencia" value={props.potencia} />
                    <SpecCell label="Torque" value={props.torque} isLast />
                    <div className="relative text-white/60 flex flex-col items-center justify-center text-center px-5 py-4 md:px-7 md:py-6">
                        <a
                            href={props.fichaTecnicaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex h-full w-full items-center justify-center
                                font-weight-bold
                                rounded-md bg-stone-900 px-6 py-3
                                text-white font-medium text-sm leading-6
                                transition-colors duration-200
                                hover:bg-stone-700
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900
                                active:bg-stone-800
                            "
                            aria-label={`Descargar ficha tecnica ${props.modelName} ${props.trimName}`}
                        >
                            Ficha técnica
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};