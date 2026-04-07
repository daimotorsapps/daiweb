export const FooterBrand = () => {
 const socials = [
 { ariaLabel: "Facebook", href: "https://www.facebook.com/HyundaiVzla-778794738973344/", src: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-10.svg" },
 { ariaLabel: "Instagram", href: "https://www.instagram.com/hyundaivzla/", src: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-11.svg" },
 { ariaLabel: "LinkedIn", href: "https://www.linkedin.com/company/hyundai-venezuela/", src: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-12.svg" },
 { ariaLabel: "YouTube", href: "https://www.youtube.com/channel/UCIAbqA6etu_dbObAhJhR3wQ", src: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-13.svg" },
 { ariaLabel: "X", href: "https://twitter.com/Hyundai_Vzla", src: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-14.svg" },
 ];
 return (
 <div className="box-border gap-x-[16.7857px] grid grow auto-cols-[1fr] col-start-[span_4] grid-cols-[repeat(auto-fit,minmax(min(100%,288px),1fr))] grid-rows-[auto] h-full min-h-auto min-w-auto gap-y-[41.1786px] md:gap-x-[29.7143px] md:gap-y-[60.5714px]" >
 <a
 aria-label="Go to the homepage"
 href="#inicio"
 className="self-start box-border block max-w-full min-h-auto min-w-auto outline-offset-[3px] w-32 transition-opacity duration-200 hover:opacity-80"
 >
 <div className="box-border max-w-full">
 <img
 src="https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-9.svg"
 alt="Hyundai Venezuela"
 className="box-border inline align-baseline w-full"
 />
 </div>
 </a>
 <div className="box-border min-h-auto min-w-auto mt-auto">
 <h3 className="text-[16.0982px] font-medium box-border flow-root leading-[17.708px] mb-[20.1964px] md:text-[17.7143px] md:leading-[19.4857px] md:mb-[23.4286px]">
 Síguenos
 </h3>
 <div
 role="list"
 className="content-center items-center box-border flex flex-wrap justify-start -m-2"
 >
 {socials.map((s) => (
 <div key={s.ariaLabel} role="listitem" className="box-border min-h-auto min-w-auto">
 <a
 aria-label={s.ariaLabel}
 href={s.href}
 target="_blank"
 rel="noopener noreferrer"
 className="box-border block max-w-full outline-offset-[3px] w-10 p-2 transition-all duration-200 hover:opacity-70 hover:-translate-y-0.5"
 >
 <img
 src={s.src}
 alt={s.ariaLabel}
 className="box-border h-full align-baseline w-full"
 />
 </a>
 </div>
 ))}
 </div>
 </div>
 </div>
 );
};