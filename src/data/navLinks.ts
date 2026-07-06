export const mobileNavLinks = [
    { to: "/#modelos", label: "Modelos" },
    { to: "/#modelos", label: "Comparar" },
    { to: "/#inicio", label: "Financiamiento" },
    { to: "/#noticias", label: "Noticias" },
    { to: "/#inicio", label: "Nosotros" },
    { to: "/#concesionarios", label: "Concesionarios" },
];

export const desktopNavLinks = [
    { to: "/calendario", label: "Calendario" },
    { to: "/#nosotros", label: "Nosotros" },
    { to: "/#novedades", label: "Contáctanos" },
];

export interface ModelItem {
    label: string;
    variant: string;
    transmission: string;
    categoryKey: string;
    index: number;
    imageSrc: string;
}

export interface CategoryItem {
    category: string;
    models: ModelItem[];
}

export const modelosDropdown: CategoryItem[] = [
    {
        category: "Hatchback",
        models: [
            { label: "Grand i10", variant: "GLS", transmission: "A/T 4 vel", categoryKey: "hatchback", index: 0, imageSrc: "/img/hatchback/Grandi10-Hatchback-GLS-Rojo.png" },
            { label: "Grand i10", variant: "GL A/T", transmission: "A/T 4 vel", categoryKey: "hatchback", index: 1, imageSrc: "/img/hatchback/Grandi10-Hatchback-GL-Plata.png" },
            { label: "Grand i10", variant: "GL M/T", transmission: "M/T 5 vel", categoryKey: "hatchback", index: 2, imageSrc: "/img/hatchback/Grandi10-Hatchback-GL-Azul.png" },
        ],
    },
    {
        category: "Sedán",
        models: [
            { label: "Elantra", variant: "", transmission: "A/T 6 IVT", categoryKey: "sedan", index: 0, imageSrc: "/img/sedan/Elantra-Rojo.png" },
            { label: "Accent", variant: "", transmission: "A/T 6 IVT", categoryKey: "sedan", index: 1, imageSrc: "/img/sedan/Accent-Blanco.png" },
            { label: "Grand i10", variant: "Sedán", transmission: "A/T 4 vel", categoryKey: "sedan", index: 2, imageSrc: "/img/sedan/Grandi10-Sedan.png" },
        ],
    },
    {
        category: "SUV",
        models: [
            { label: "Creta", variant: "", transmission: "A/T 6 vel", categoryKey: "suv", index: 0, imageSrc: "/img/suv/Creta-Blanco.png" },
            { label: "Tucson", variant: "Premium", transmission: "A/T 6 vel", categoryKey: "suv", index: 1, imageSrc: "/img/suv/Tucson-Premium-Azul.png" },
            { label: "Tucson", variant: "Limited", transmission: "A/T 6 vel", categoryKey: "suv", index: 2, imageSrc: "/img/suv/Tucson-Limited-Blanco.png" },
            { label: "Palisade", variant: "", transmission: "A/T 8 vel", categoryKey: "suv", index: 3, imageSrc: "/img/suv/Palisade-Rojo.png" },
        ],
    },
    {
        category: "MPV",
        models: [
            { label: "Staria VAN", variant: "Capacidad de carga", transmission: "A/T 8 vel", categoryKey: "mpv", index: 0, imageSrc: "/img/mvp/Staria-VAN.png" },
            { label: "Staria Wagon", variant: "11P", transmission: "A/T 8 vel", categoryKey: "mpv", index: 1, imageSrc: "/img/mvp/Staria-WAGON.png" },
            { label: "Staria Wagon", variant: "7P", transmission: "A/T 8 vel", categoryKey: "mpv", index: 2, imageSrc: "/img/mvp/Staria-WAGON.png" },
        ],
    },
];
