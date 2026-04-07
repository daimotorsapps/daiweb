import { InfoCard } from "@/sections/InfoGrid/components/InfoCard";
export const InfoGrid = () => {
 return (
 <div className="box-border caret-transparent gap-x-0 flex min-h-[auto] min-w-[auto] gap-y-0 w-full">
 <div
 role="none"
className="box-border caret-transparent gap-x-0 grid flex-col auto-cols-[minmax(0px,1fr)] grid-cols-[repeat(1,minmax(0px,1fr))] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-0 w-full md:grid-cols-[repeat(4,minmax(0px,1fr))]"
 >
 <InfoCard
 eyebrowText="Eyebrow Text Here"
title="Todos los modelos"
linkHref="/modelos"
linkLabel="Ver más"
imgSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/695e9cb2dd6a1e5e272323f5_SVGRepo_iconCarrier.svg"
 />
<InfoCard
 eyebrowText="Eyebrow Text Here"
title="Financiamiento"
linkHref="/financiamiento"
linkLabel="Nosotros"
imgSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/695e9cb2dd6a1e5e272323f5_SVGRepo_iconCarrier.svg"
 />
<InfoCard
 eyebrowText="Eyebrow Text Here"
title="Cotiza aquí ahora"
linkHref="/cotizar"
linkLabel="Cotizar"
imgSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/695e9cb2dd6a1e5e272323f5_SVGRepo_iconCarrier.svg"
 />
<InfoCard
 eyebrowText="Eyebrow Text Here"
title="Últimas noticias"
linkHref="/noticias"
linkLabel="Ver más"
imgSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/695e9cb2dd6a1e5e272323f5_SVGRepo_iconCarrier.svg"
 />
 </div>
 </div>
 );
};