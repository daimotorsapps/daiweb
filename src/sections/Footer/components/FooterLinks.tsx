import { FooterColumn } from "@/sections/Footer/components/FooterColumn"; export const FooterLinks = () => {
return ( <div className="box-border caret-transparent gap-x-[16.7857px] flex col-end-[span_8] min-h-[auto] min-w-[auto] gap-y-[36.5893px] w-full md:gap-x-[29.7143px] md:gap-y-[46.2857px]">
<div
role="navigation" className="box-border caret-transparent gap-x-[16.7857px] grid flex-col auto-cols-[minmax(0px,1fr)] grid-cols-[repeat(2,minmax(0px,1fr))] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-[36.5893px] w-full md:gap-x-[29.7143px] md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-[46.2857px]" >
<FooterColumn
title="Modelos"
links={[ { href: "/modelos/creta", label: "Creta" }, { href: "/modelos/staria-van", label: "Staria VAN" }, { href: "/modelos/staria-wagon", label: "Staria Wagon" }, { href: "/modelos/tucson", label: "Tucson" }, { href: "/modelos/elantra", label: "Elantra" }, { href: "/modelos/accent", label: "Accent" }, { href: "/modelos/hyundai-palisade", label: "Palisade" }, { href: "/modelos/hyundai-grand-i10", label: "Grand i10" }, ]}
/>
<FooterColumn
title="Contacto"
links={[ { href: "/cotizar", label: "Cotizar" }, { href: "/financiamiento", label: "Financiación" }, ]}
/>
<FooterColumn
title="Búscanos"
links={[ {href: "https://www.hyundaivenezuela.com/concesionarios?tipo=Concesionarios", label: "Concesionarios", }, {href: "https://www.hyundaivenezuela.com/concesionarios?tipo=Talleres", label: "Talleres autorizados", }, ]}
/>
</div>
</div>
);};