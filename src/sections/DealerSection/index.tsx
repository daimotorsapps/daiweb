import { DealerCard } from "@/sections/DealerSection/components/DealerCard";
export const DealerSection = () => {
return ( <section className="relative items-stretch bg-gray-200 box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto]">
<div className="relative box-border caret-transparent h-[66.3571px] min-h-[auto] min-w-[auto] md:h-[105.143px]"></div>
<div className="relative box-border caret-transparent gap-x-[41.1786px] flex flex-col justify-center max-w-[1440px] min-h-[auto] min-w-[auto] gap-y-[41.1786px] w-[calc(100%_-_35.1429px)] z-[1] mx-auto md:gap-x-[60.5714px] md:gap-y-[60.5714px] md:w-[calc(100%_-_86.8571px)]">
<div className="box-border caret-transparent gap-x-[16.7857px] flex min-h-[auto] min-w-[auto] gap-y-[16.7857px] w-full md:gap-x-[29.7143px] md:gap-y-[29.7143px]">
<div
role="none" className="box-border caret-transparent gap-x-[16.7857px] flex flex-col auto-cols-[minmax(0px,1fr)] grid-cols-[repeat(4,minmax(0px,1fr))] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-[16.7857px] w-full md:gap-x-[29.7143px] md:grid md:gap-y-[29.7143px]" >
<DealerCard
imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/6984dc8ee1b87aabc3e3e9ec_Concesionario.png" eyebrowText="Eyebrow Text Here"
title="Frente" /* description="Busca nuestros concesionarios oficiales." buttonText="Buscar"
linkHref="https://hyundai-vzla.webflow.io/concesionarios?tipo=Concesionarios"
innerLinkClassName="absolute box-border caret-transparent block h-full max-w-full outline-offset-[3px] w-full inset-[0%]"
innerButtonClassName="absolute bg-transparent caret-transparent hidden h-full outline-offset-[3px] w-full p-0 inset-[0%]" */
/>
<DealerCard
imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/6984dc8e31b8637fd5633033_Talleres.png" eyebrowText="Eyebrow Text Here"
title="Servicio" description="Busca nuestros talleres oficiales." buttonText="Buscar"
linkHref="https://hyundai-vzla.webflow.io/concesionarios?tipo=Talleres"
innerLinkClassName="absolute box-border caret-transparent block h-full max-w-full outline-offset-[3px] w-full inset-[0%]"
innerButtonClassName="absolute bg-transparent caret-transparent hidden h-full outline-offset-[3px] w-full p-0 inset-[0%]"
/>
<DealerCard
imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/6984dc8ed3446610f6afb79d_Comparador.png" eyebrowText="Eyebrow Text Here"
title="Repuesto" description="Compara modelos y descubre cuál cubre tus necesidades." buttonText="Buscar"
linkHref="/comparador"
innerLinkClassName="hidden h-full max-w-full outline-offset-[3px] w-full inset-[0%]"
innerButtonClassName="absolute bg-transparent caret-transparent block h-full outline-offset-[3px] w-full p-0 inset-[0%]"
/>
<DealerCard
imageSrc="https://c.animaapp.com/mn3k7y61GKB8dL/assets/6984dc8ed3446610f6afb79d_Comparador.png" eyebrowText="Eyebrow Text Here"
title="Repuesto" description="Compara modelos y descubre cuál cubre tus necesidades." buttonText="Buscar"
linkHref="/comparador"
innerLinkClassName="hidden h-full max-w-full outline-offset-[3px] w-full inset-[0%]"
innerButtonClassName="absolute bg-transparent caret-transparent block h-full outline-offset-[3px] w-full p-0 inset-[0%]"
/>
</div>
</div>
</div>
<div className="relative box-border caret-transparent h-[66.3571px] min-h-[auto] min-w-[auto] md:h-[105.143px]"></div>
<div className="absolute box-border caret-transparent h-full pointer-events-none w-full inset-[0%]"></div>
</section>
);};