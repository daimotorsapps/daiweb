export type DealerCardVariant = 'hero' | 'card';

export interface DealerCardData {
  id: string;
  label: string;
  image: string;
  variant: DealerCardVariant;
  colStart: number;
  rowStart: number;
  colSpan: number;
  rowSpan: number;
}

export const dealerCards: readonly DealerCardData[] = [
  {
    id: 'frente',
    label: 'Fachada',
    image: '/img/galery/frente.jpeg',
    variant: 'hero',
    colStart: 1,
    rowStart: 1,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: 'showroom',
    label: 'Showroom',
    image: '/img/galery/showroom.jfif',
    variant: 'card',
    colStart: 3,
    rowStart: 1,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 'servicio',
    label: 'Servicio',
    image: '/img/galery/servicio.jfif',
    variant: 'card',
    colStart: 4,
    rowStart: 1,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 'repuestos',
    label: 'Repuestos',
    image: '/img/galery/repuesto.jfif',
    variant: 'card',
    colStart: 3,
    rowStart: 2,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 'taller',
    label: 'Taller',
    image: '/img/galery/taller2.jfif',
    variant: 'card',
    colStart: 4,
    rowStart: 2,
    colSpan: 1,
    rowSpan: 1,
  },
] as const;



/* Player                        Goals

Erling Haaland - Norway         7

Kylian Mbappé - France          7

Lionel Messi - Argentina        7

Harry Kane - England            6

Ismaïla Sarr - Senegal          4

Jude Bellingham - England       4

Julián Quiñones - Mexico        4

Mikel Oyarzabal - Spain         4

Ousmane Dembélé - France        4

Vinícius Júnior - Brazil        4 */

