import { Navbar } from "@/sections/Navbar";
import { HeroSlider } from "@/sections/HeroSlider";
import { ModelSection } from "@/sections/ModelSection";
import { InfoGrid } from "@/sections/InfoGrid";
import { DealerSection } from "@/sections/DealerSection";
import { NewsSection } from "@/sections/NewsSection";
import { Footer } from "@/sections/Footer";
export const App = () => {
  return (
    <body className="text-stone-900 text-base not-italic normal-nums font-normal accent-auto bg-gray-200 box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-hyundai_sans" >
      <div className="box-border caret-transparent flex flex-col min-h-[1000px] overflow-clip">
        <Navbar />
        <main id="main" className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto]">
          <section id="inicio">
            <HeroSlider />
          </section>
          <section id="modelos">
            <ModelSection />
          </section>
          <InfoGrid />
          <section id="concesionarios">
            <DealerSection />
          </section>
          <section id="novedades">
            <NewsSection />
          </section>
        </main>
        <section id="footer">
          <Footer />
        </section>
        
      </div>
    </body>
  );
};