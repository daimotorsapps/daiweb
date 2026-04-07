export type ModelCardProps = {
 rootClass: string;
 modelName: string;
 modelNameInnerClass?: string;
 subTitle?: string;
 subTitleInnerClass?: string;
 imageSrc: string;
 imageSizes?: string;
 trimName: string;
 transmission: string;
 motor: string;
 potencia: string;
 torque: string;
 cotizarHref: string;
 fichaTecnicaHref: string;
 showExtraDiv?: boolean;
};
export const ModelCard = (props: ModelCardProps) => {
 return (
 <div
 role="listitem"
className={`relative box-border caret-transparent shrink-0 list-none w-[330px] mr-8 md:w-full md:mr-0 ${props.rootClass}`}
 >
 <div className="items-center box-border caret-transparent flex flex-col justify-center w-full">
 <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto]">
 <h4 className="relative text-zinc-300 text-[64px] italic font-bold box-border caret-transparent tracking-[-5.4px] leading-[67.2px] text-center uppercase w-full z-[1] md:text-[180px] md:leading-[189px] before:accent-auto before:box-border before:caret-transparent before:text-zinc-300 before:table before:text-[64px] before:italic before:normal-nums before:font-bold before:tracking-[-5.4px] before:leading-[67.2px] before:list-outside before:list-none before:mb-[-12.4738px] before:pointer-events-auto before:text-center befor e:no-underline before:indent-[0px] before:uppercase before:visible before:border-separate before:font-hyundai_sans before:md:text-[180px] before:md:leading-[189px] before:md:mb-[-35.1px] after:accent-auto after:box-border after:caret-transparent after:text-zinc-300 after:table after:text-[64px] after:italic after:normal-nums after:font-bold after:tracking-[-5.4px] after:leading-[67.2px] after:list-outside after:list-none after:mb-[-9.27375px] after:pointer-events-auto after:text-center after:no-underline af ter:indent-[0px] after:uppercase after:visible after:border-separate after:font-hyundai_sans after:md:text-[180px] after:md:leading-[189px] after:md:mb-[-26.1px] min-h-[auto] min-w-[auto]" >
 <span className="text-[64px] box-border caret-transparent inline-block leading-[67.2px] md:text-[180px] md:leading-[189px]">
 <span
 className={`text-[64px] box-border caret-transparent inline-block leading-[67.2px] md:text-[180px] md:leading-[189px]${props.modelNameInnerClass ? ` ${props.modelNameInnerClass}` : ""}`}
 >
 {props.modelName}
 </span>
 </span>
 </h4>
{props.subTitle && (
 <div className="relative text-zinc-300 text-[32px] italic font-bold box-border caret-transparent tracking-[-5.4px] leading-[33.6px] text-right uppercase w-full z-[1] md:text-[64px] md:leading-[67.2px] min-h-[auto] min-w-[auto]" >
 <span className="text-[32px] box-border caret-transparent inline-block leading-[33.6px] md:text-[64px] md:leading-[67.2px]">
 <span
 className={`text-[32px] box-border caret-transparent inline-block leading-[33.6px] md:text-[64px] md:leading-[67.2px]${props.subTitleInnerClass ? ` ${props.subTitleInnerClass}` : ""}`}
 >
 {props.subTitle}
 </span>
 </span>
 </div>
 )}
 </div>
<img
 src={props.imageSrc}
 alt=""
{...(props.imageSizes ? { sizes: props.imageSizes } : {})}
 className="relative box-border caret-transparent max-w-[480px] object-cover align-bottom w-full z-[3] -mt-8 md:max-w-screen-sm md:-mt-28 min-h-[auto] min-w-[auto]"
 />

 <div className="relative bg-stone-900 box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] max-w-[1048px] gap-y-0 w-full z-[99] -mt-4 md:grid-cols-[1fr_1fr_1fr_1fr_1fr] md:-mt-20 min-h-[auto] min-w-[auto]" >
 <div className="items-center bg-white box-border caret-transparent flex flex-col justify-between text-center p-[20.1964px] md:items-end md:text-right md:p-[23.4286px] min-h-[auto] min-w-[auto]" >
 <p className="text-[22.0982px] font-medium items-center box-border caret-transparent flow-root flex-col justify-center leading-[24.308px] min-w-full text-center uppercase mb-[20.1964px] md:text-[23.7143px] md:items-end md:leading-[26.0857px] md:text-right md:mb-[23.4286px] before:accent-auto before:box-border before:caret-transparent before:text-stone-900 before:table before:text-[22.0982px] before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[24.308px] before:list-outside bef ore:list-none before:mb-[-4.85603px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:uppercase before:visible before:border-separate before:font-hyundai_sans before:md:text-[23.7143px] before:md:leading-[26.0857px] before:md:mb-[-5.20554px] before:md:text-right after:accent-auto after:box-border after:caret-transparent after:text-stone-900 after:table after:text-[22.0982px] after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading -[24.308px] after:list-outside after:list-none after:mb-[-3.75112px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:uppercase after:visible after:border-separate after:font-hyundai_sans after:md:text-[23.7143px] after:md:leading-[26.0857px] after:md:mb-[-4.01982px] after:md:text-right min-h-[auto]" >
 <span className="text-[22.0982px] box-border caret-transparent leading-[24.308px] text-center w-full md:text-[23.7143px] md:leading-[26.0857px] md:text-right">
 {props.trimName}
 </span>
 </p>
<p className="text-sm font-medium items-center box-border caret-transparent flex flex-col justify-center leading-[21px] min-w-full text-center md:items-end md:text-right before:accent-auto before:box-border before:caret-transparent before:text-stone-900 before:table before:text-sm before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[21px] before:list-outside before:list-none before:mb-[-5.88px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0p x] before:normal-case before:visible before:border-separate before:font-hyundai_sans before:md:text-right after:accent-auto after:box-border after:caret-transparent after:text-stone-900 after:table after:text-sm after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-[21px] after:list-outside after:list-none after:mb-[-5.18px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-h yundai_sans after:md:text-right min-h-[auto] before:min-h-[auto] before:min-w-[auto] after:min-h-[auto] after:min-w-[auto]">
 <span className="box-border caret-transparent block text-center w-full md:text-right min-h-[auto] min-w-[auto]">
 {props.transmission}
 </span>
 </p>
 </div>
<div className="relative text-white/60 items-center box-border caret-transparent flex flex-col justify-center text-center px-[28.1964px] py-[20.1964px] md:px-[31.4286px] md:py-[23.4286px] min-h-[auto] min-w-[auto]" >
 <p className="font-medium items-center box-border caret-transparent flex flex-col justify-center min-w-full mb-[20.1964px] md:mb-[23.4286px] before:accent-auto before:box-border before:caret-transparent before:text-white/60 before:table before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:mb-[-6.72px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visi ble before:border-separate before:font-hyundai_sans after:accent-auto after:box-border after:caret-transparent after:text-white/60 after:table after:text-base after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:mb-[-5.92px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans min-h-[auto] before:min-h-[auto] before:min-w- [auto] after:min-h-[auto] after:min-w-[auto]">
 <span className="box-border caret-transparent block w-full min-h-[auto] min-w-[auto]">
 Motor
 </span>
 </p>
<p className="text-white text-[28.1964px] font-medium items-center bg-stone-900 box-border caret-transparent flow-root flex-col justify-center leading-[31.0161px] min-w-full md:text-[31.4286px] md:leading-[34.5714px] before:accent-auto before:box-border before:caret-transparent before:text-white before:table before:text-[28.1964px] before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[31.0161px] before:list-outside before:list-none before:mb-[-6.19518px] before:pointer-events-a uto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans before:md:text-[31.4286px] before:md:leading-[34.5714px] before:md:mb-[-6.90982px] after:accent-auto after:box-border after:caret-transparent after:text-white after:table after:text-[28.1964px] after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-[31.0161px] after:list-outside after:list-none after:mb-[-4.78536px] after:pointer -events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans after:md:text-[31.4286px] after:md:leading-[34.5714px] after:md:mb-[-5.33839px] min-h-[auto]" >
 <span className="text-[28.1964px] box-border caret-transparent leading-[31.0161px] w-full md:text-[31.4286px] md:leading-[34.5714px]">
 {props.motor}
 </span>
 </p>
<div className="absolute bg-white/30 box-border caret-transparent h-[60px] w-[0.5px] right-0"></div>
 </div>
<div className="relative text-white/60 items-center box-border caret-transparent flex flex-col justify-center text-center px-[28.1964px] py-[20.1964px] md:px-[31.4286px] md:py-[23.4286px] min-h-[auto] min-w-[auto]" >
 <p className="font-medium items-center box-border caret-transparent flex flex-col justify-center min-w-full mb-[20.1964px] md:mb-[23.4286px] before:accent-auto before:box-border before:caret-transparent before:text-white/60 before:table before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:mb-[-6.72px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visi ble before:border-separate before:font-hyundai_sans after:accent-auto after:box-border after:caret-transparent after:text-white/60 after:table after:text-base after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:mb-[-5.92px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans min-h-[auto] before:min-h-[auto] before:min-w- [auto] after:min-h-[auto] after:min-w-[auto]">
 <span className="box-border caret-transparent block w-full min-h-[auto] min-w-[auto]">
 Potencia
 </span>
 </p>
<p className="text-white text-[28.1964px] font-medium items-center bg-stone-900 box-border caret-transparent flow-root flex-col justify-center leading-[31.0161px] min-w-full md:text-[31.4286px] md:leading-[34.5714px] before:accent-auto before:box-border before:caret-transparent before:text-white before:table before:text-[28.1964px] before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[31.0161px] before:list-outside before:list-none before:mb-[-6.19518px] before:pointer-events-a uto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans before:md:text-[31.4286px] before:md:leading-[34.5714px] before:md:mb-[-6.90982px] after:accent-auto after:box-border after:caret-transparent after:text-white after:table after:text-[28.1964px] after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-[31.0161px] after:list-outside after:list-none after:mb-[-4.78536px] after:pointer -events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans after:md:text-[31.4286px] after:md:leading-[34.5714px] after:md:mb-[-5.33839px] min-h-[auto]" >
 <span className="text-[28.1964px] box-border caret-transparent leading-[31.0161px] w-full md:text-[31.4286px] md:leading-[34.5714px]">
 {props.potencia}
 </span>
 </p>
<div className="absolute bg-white/30 box-border caret-transparent h-[60px] w-[0.5px] right-0"></div>
 </div>
<div className="relative text-white/60 items-center box-border caret-transparent flex flex-col justify-center text-center px-[28.1964px] py-[20.1964px] md:px-[31.4286px] md:py-[23.4286px] min-h-[auto] min-w-[auto]" >
 <p className="font-medium items-center box-border caret-transparent flex flex-col justify-center min-w-full mb-[20.1964px] md:mb-[23.4286px] before:accent-auto before:box-border before:caret-transparent before:text-white/60 before:table before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:mb-[-6.72px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visi ble before:border-separate before:font-hyundai_sans after:accent-auto after:box-border after:caret-transparent after:text-white/60 after:table after:text-base after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:mb-[-5.92px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans min-h-[auto] before:min-h-[auto] before:min-w- [auto] after:min-h-[auto] after:min-w-[auto]">
 <span className="box-border caret-transparent block w-full min-h-[auto] min-w-[auto]">
 Torque
 </span>
 </p>

 <p className="text-white text-[28.1964px] font-medium items-center bg-stone-900 box-border caret-transparent flow-root flex-col justify-center leading-[31.0161px] min-w-full md:text-[31.4286px] md:leading-[34.5714px] before:accent-auto before:box-border before:caret-transparent before:text-white before:table before:text-[28.1964px] before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[31.0161px] before:list-outside before:list-none before:mb-[-6.19518px] before:pointer-events-a uto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans before:md:text-[31.4286px] before:md:leading-[34.5714px] before:md:mb-[-6.90982px] after:accent-auto after:box-border after:caret-transparent after:text-white after:table after:text-[28.1964px] after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-[31.0161px] after:list-outside after:list-none after:mb-[-4.78536px] after:pointer -events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans after:md:text-[31.4286px] after:md:leading-[34.5714px] after:md:mb-[-5.33839px] min-h-[auto]" >
 <span className="text-[28.1964px] box-border caret-transparent leading-[31.0161px] w-full md:text-[31.4286px] md:leading-[34.5714px]">
 {props.torque}
 </span>
 </p>
<div className="absolute bg-white/30 box-border caret-transparent h-[60px] w-[0.5px] right-0"></div>
 </div>
<div className="relative text-white/60 items-center box-border caret-transparent flex flex-col justify-center text-center px-[28.1964px] py-[20.1964px] md:px-[31.4286px] md:py-[23.4286px] min-h-[auto] min-w-[auto]" >
 <div className="relative box-border caret-transparent w-full mb-[10.0982px] md:mb-[11.7143px] min-h-[auto] min-w-[auto]">
 <div className="absolute box-border caret-transparent h-full w-full z-[3] inset-[0%]">
 <a
 href={props.cotizarHref}
 className="absolute box-border caret-transparent block h-full max-w-full outline-offset-[3px] w-full inset-[0%]"
 ></a>
<button
 type="button"
className="absolute bg-transparent caret-transparent hidden h-full outline-offset-[3px] w-full p-0 inset-[0%]"
 ></button>
 </div>
<div className="relative text-[color(srgb_1_1_1)] items-center bg-[color(srgb_0.203922_0.372549_0.658824)] box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 align-middle border px-6 py-[14.4px] border-solid border-[color(srgb_0.054902_0.168627_0.360784)]" >
 <div className="relative box-border caret-transparent flow-root before:accent-auto before:box-border before:caret-transparent before:text-[color(srgb_1_1_1)] before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:mb-[-6.72px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans after:accent-aut o after:box-border after:caret-transparent after:text-[color(srgb_1_1_1)] after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:mb-[-5.92px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans min-h-[auto] min-w-[auto]" >
 Cotizar
 </div>
<div className="items-center aspect-square box-border caret-transparent hidden flex-col shrink-0 justify-center w-[12.8px] -my-2"></div>
 {props.showExtraDiv && (
 <div className="absolute box-border caret-transparent h-[1.504px] pointer-events-none origin-[100%_100%] bottom-[0%] inset-x-[0%]"></div>
 )}
 </div>
 </div>
<div className="relative box-border caret-transparent w-full min-h-[auto] min-w-[auto]">
 <div className="absolute box-border caret-transparent h-full w-full z-[3] inset-[0%]">
 <a
 href={props.fichaTecnicaHref}
 className="absolute box-border caret-transparent block h-full max-w-full outline-offset-[3px] w-full inset-[0%]"
 ></a>
<button
 type="button"
className="absolute bg-transparent caret-transparent hidden h-full outline-offset-[3px] w-full p-0 inset-[0%]"
 ></button>
 </div>
<div className="relative text-[color(srgb_0.121569_0.113725_0.117647)] items-center bg-[color(srgb_1_1_1)] box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 align-middle border px-6 py-[14.4px] border-solid border-[color(srgb_1_1_1)]" >
 <div className="relative box-border caret-transparent flow-root before:accent-auto before:box-border before:caret-transparent before:text-[color(srgb_0.121569_0.113725_0.117647)] before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:mb-[-6.72px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-hyundai_ sans after:accent-auto after:box-border after:caret-transparent after:text-[color(srgb_0.121569_0.113725_0.117647)] after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:mb-[-5.92px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans min-h-[auto] min-w-[auto]" >
 Ficha técnica
 </div>
<div className="items-center aspect-square box-border caret-transparent hidden flex-col shrink-0 justify-center w-[12.8px] -my-2"></div>
 {props.showExtraDiv && (
 <div className="absolute box-border caret-transparent h-[1.504px] pointer-events-none origin-[100%_100%] bottom-[0%] inset-x-[0%]"></div>
 )}
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
};

