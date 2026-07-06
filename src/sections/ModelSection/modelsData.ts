export type Tab = "hatchback" | "sedan" | "suv" | "mpv";

export type CarModel = {
    modelName: string;
    subTitle?: string;
    imageSrc: string;
    imageSizes?: string;
    trimName: string;
    transmission: string;
    motor: string;
    potencia: string;
    torque: string;
    fichaTecnicaHref: string;
};

export const hatchbackModels: CarModel[] = [
    {
        modelName: "Grand i10",
        subTitle: "GLS",
        imageSrc: "./public/img/hatchback/Grandi10-Hatchback-GLS-Rojo.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "GLS",
        transmission: "A/T 4 vel",
        motor: "1.2L",
        potencia: "82 HP",
        torque: "114 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/hatchback/GRAND-i10-GLS.pdf",
    },
    {
        modelName: "Grand i10",
        subTitle: "GL A/T",
        imageSrc: "./public/img/hatchback/Grandi10-Hatchback-GL-Plata.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "GL A/T",
        transmission: "A/T 4 vel",
        motor: "1.2L",
        potencia: "82 HP",
        torque: "114 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/hatchback/GRAND-i10-GL-AT.pdf",
    },
    {
        modelName: "Grand i10",
        subTitle: "GL M/T",
        imageSrc: "./public/img/hatchback/Grandi10-Hatchback-GL-Azul.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "GL M/T",
        transmission: "M/T 5 vel",
        motor: "1.2L",
        potencia: "82 HP",
        torque: "114 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/hatchback/GRAND-i10-GL-MT.pdf",
    },
];

export const sedanModels: CarModel[] = [
    {
        modelName: "Elantra",
        imageSrc: "./public/img/sedan/Elantra-Rojo.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "Elantra",
        transmission: "A/T 6 IVT",
        motor: "2.0 L",
        potencia: "156 HP",
        torque: "192 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/sedan/FICHA-TECNICA-ELANTRA.pdf",
    },
    {
        modelName: "Accent",
        imageSrc: "./public/img/sedan/Accent-Blanco.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "Accent",
        transmission: "A/T 6 IVT",
        motor: "1.5L",
        potencia: "113 HP",
        torque: "144 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/sedan/FICHA-TECNICA-ACCENT.pdf",
    },
    {
        modelName: "Grand i10",
        subTitle: "Sedán",
        imageSrc: "./public/img/sedan/Grandi10-Sedan.png",
        trimName: "Sedán",
        transmission: "Automática de 4 vel",
        motor: "1.2L",
        potencia: "82 HP",
        torque: "114 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/sedan/FICHA-TECNICA-GRAND-i10-SEDAN.pdf",
    },
];

export const suvModels: CarModel[] = [
    {
        modelName: "Creta",
        imageSrc: "./public/img/suv/Creta-Blanco.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "Creta",
        transmission: "A/T 6 vel",
        motor: "1.5L",
        potencia: "113 HP",
        torque: "144 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/suv/FICHA-TECNICA-CRETA.pdf",
    },
    {
        modelName: "Tucson",
        subTitle: "Premium",
        imageSrc: "./public/img/suv/Tucson-Premium-Azul.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "Premium",
        transmission: "A/T 6 vel",
        motor: "2.0 L",
        potencia: "154 HP",
        torque: "192 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/suv/FICHA-TECNICA-TUCSON-PREMIUM.pdf",
    },
    {
        modelName: "Tucson",
        subTitle: "Limited",
        imageSrc: "./public/img/suv/Tucson-Limited-Blanco.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "Limited",
        transmission: "A/T 6 vel",
        motor: "2.0 L",
        potencia: "154 HP",
        torque: "192 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/suv/FICHA-TECNICA-TUCSON-LIMITED.pdf",
    },
    {
        modelName: "Palisade",
        imageSrc: "./public/img/suv/Palisade-Rojo.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "Palisade",
        transmission: "Automática de 8 vel",
        motor: "3.8L",
        potencia: "291 HP",
        torque: "355 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/suv/FICHA-TECNICA-PALISADE.pdf",
    },
];

export const mpvModels: CarModel[] = [
    {
        modelName: "Staria VAN",
        imageSrc: "./public/img/mvp/Staria-VAN.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "Con capacidad de carga",
        transmission: "A/T 8 vel",
        motor: "3.5L",
        potencia: "268 HP",
        torque: "331 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/mvp/FICHA-TECNICA-STARIA-VAN.pdf",
    },
    {
        modelName: "Staria Wagon",
        imageSrc: "./public/img/mvp/Staria-WAGON.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "11P",
        transmission: "A/T 8 vel",
        motor: "3.5 L",
        potencia: "268 HP",
        torque: "331 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/mvp/FICHA-TECNICA-STARIA-WAGON-11P.pdf",
    },
    {
        modelName: "Staria Wagon",
        imageSrc: "./public/img/mvp/Staria-WAGON.png",
        imageSizes: "(max-width: 767px) 100vw, 700px, 100vw",
        trimName: "7P",
        transmission: "A/T 8 vel",
        motor: "3.5 L",
        potencia: "268 HP",
        torque: "331 Nm",
        fichaTecnicaHref: "./public/fichas-tecnicas/mvp/FICHA-TECNICA-STARIA-WAGON-7P.pdf",
    },
];

export const tabsConfig: { key: Tab; label: string; models: CarModel[] }[] = [
    { key: "hatchback", label: "Hatchback", models: hatchbackModels },
    { key: "sedan", label: "Sedán", models: sedanModels },
    { key: "suv", label: "SUV", models: suvModels },
    { key: "mpv", label: "MPV", models: mpvModels },
];
