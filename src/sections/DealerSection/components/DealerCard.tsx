import { type DealerCardData } from '../dealersData';

interface DealerCardProps {
  data: DealerCardData;
  index: number;
}

export const DealerCard = ({ data, index }: DealerCardProps) => {
  const isHero = data.variant === 'hero';

  const placementClasses = (() => {
    if (isHero) return 'md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2';
    const key = `${data.colStart}-${data.rowStart}`;
    const map: Record<string, string> = {
      '3-1': 'md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1',
      '4-1': 'md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-1',
      '3-2': 'md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1',
      '4-2': 'md:col-start-4 md:row-start-2 md:col-span-1 md:row-span-1',
    };
    return map[key] ?? '';
  })();

  return (
    <article
      className={`
        relative group rounded-xl overflow-hidden opacity-0 animate-fade-in-up
        ${isHero ? '' : 'aspect-[3/4]'}
        ${isHero ? 'min-h-[500px] md:min-h-[700px]' : 'min-h-[350px] md:min-h-[400px]'}
        ${placementClasses}
      `}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <img
        src={data.image}
        alt={data.label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent
          transition-opacity duration-300 group-hover:from-stone-900/80 group-hover:via-stone-900/40"
        aria-hidden="true"
      />

      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-white/70 mb-1">
          {data.label}
        </span>

        {isHero && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {data.label}
          </h2>
        )}
      </div>
    </article>
  );
};