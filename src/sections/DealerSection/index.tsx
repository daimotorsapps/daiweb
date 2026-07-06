import { DealerCard } from './components/DealerCard';
import { dealerCards } from './dealersData';

export const DealerSection = () => {
  return (
    <section className="bg-gray-200 py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 md:grid-rows-[1fr_1fr]">
          {dealerCards.map((card, index) => (
            <DealerCard key={card.id} data={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};