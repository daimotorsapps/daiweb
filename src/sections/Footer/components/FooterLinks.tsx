import { FooterColumn } from "@/sections/Footer/components/FooterColumn"; export const FooterLinks = () => {
    return (<div className="box-border caret-transparent gap-x-[16.7857px] flex col-end-[span_8] min-h-[auto] min-w-[auto] gap-y-[36.5893px] w-full md:gap-x-[29.7143px] md:gap-y-[46.2857px]">
        <div
            role="navigation" className="box-border caret-transparent gap-x-[16.7857px] grid flex-col auto-cols-[minmax(0px,1fr)] grid-cols-[repeat(2,minmax(0px,1fr))] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-[36.5893px] w-full md:gap-x-[29.7143px] md:grid-cols-[repeat(4,minmax(0px,1fr))] md:gap-y-[46.2857px]" >
            <FooterColumn
                title="MODELOS"
                links={[{ href: "/modelos/creta", label: "Creta" }, { href: "/modelos/staria-van", label: "Staria VAN" }, { href: "/modelos/staria-wagon", label: "Staria Wagon" }, { href: "/modelos/tucson", label: "Tucson" }, { href: "/modelos/elantra", label: "Elantra" }, { href: "/modelos/accent", label: "Accent" }, { href: "/modelos/hyundai-palisade", label: "Palisade" }, { href: "/modelos/hyundai-grand-i10", label: "Grand i10" },]}
            />
            <FooterColumn
                title="CONTACTO"
                links={[{ href: "/cotizar", label: "Cotizar" }, { href: "/financiamiento", label: "Financiación" },]}
            />
            <FooterColumn
                title="ENCUÉNTRANOS"
                links={[{ href: "https://maps.app.goo.gl/K6h3bZhmiyK1rFEM8", label: "Av. Las Delicias, Edif. Dai Motors" },]}
            />


            {/* Columna de Ubicación con Mapa */}
            <div className="flex flex-col gap-y-[16px]">
                <h2 className="font-bold text-[16px] uppercase tracking-wide">
                    Ubicación
                </h2>

                <div className="w-full h-[180px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <iframe
                        title="Ubicación Dai Motors"
                        src="https://maps.app.goo.gl/K6h3bZhmiyK1rFEM8"
                        width="100%"
                        height="100%"
                        allowFullScreen={false}
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <p className="text-[14px] text-gray-500 leading-tight">
                    Av. 15 Las Delicias, Maracaibo.
                </p>
            </div>







        </div>
    </div>
    );
};