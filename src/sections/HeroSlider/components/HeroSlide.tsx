export type HeroSlideProps = {
 ariaLabel: string;
 overlayClass: string;
 desktopImageSrc: string;
 mobileImageSrc: string;
 showCta?: boolean;
 ctaHref?: string;
 ctaButtonText?: string;
};
export const HeroSlide = (props: HeroSlideProps) => {
 return (
 <section
 role="group"
aria-label={props.ariaLabel}
 className="relative text-white items-stretch bg-stone-900 box-border caret-transparent flex flex-col shrink-0 justify-end min-h-[700px] min-w-[auto] w-full md:min-h-[1000px]"
 >
 <div
 className={`relative box-border caret-transparent min-h-[auto] min-w-[auto] ${props.overlayClass}`}
 ></div>
<div className="relative items-center box-border caret-transparent gap-x-[41.1786px] flex flex-col justify-center max-w-[1440px] min-h-[auto] min-w-[auto] gap-y-[41.1786px] text-center w-[calc(100%_-_35.1429px)] z-[1] mx-auto md:gap-x-[60.5714px] md:gap-y-[60.5714px] md:w-[calc(100%_-_86.8571px)]" >
 {props.showCta && (
 <div className="box-border caret-transparent contents">
 <div className="items-center box-border caret-transparent justify-center min-h-[auto] min-w-[auto] w-full">
 <div className="relative box-border caret-transparent inline-block">
 <div className="absolute box-border caret-transparent h-full w-full z-[3] inset-[0%]">
 <a
 href={props.ctaHref}
 className="absolute box-border caret-transparent block h-full max-w-full outline-offset-[3px] w-full inset-[0%]"
 ></a>
<button
 type="button"
className="absolute bg-transparent caret-transparent hidden h-full outline-offset-[3px] w-full p-0 inset-[0%]"
 ></button>
 </div>
<div className="relative text-[color(srgb_0.121569_0.113725_0.117647)] items-center bg-[color(srgb_1_1_1)] box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 align-middle border px-6 py-[14.4px] border-solid border-[color(srgb_1_1_1)]" >
 <div className="relative box-border caret-transparent flow-root min-h-[auto] min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-[color(srgb_0.121569_0.113725_0.117647)] before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:mb-[-6.72px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-sep arate before:font-hyundai_sans after:accent-auto after:box-border after:caret-transparent after:text-[color(srgb_0.121569_0.113725_0.117647)] after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:mb-[-5.92px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans" >
 {props.ctaButtonText}
 </div>
<div className="items-center aspect-square box-border caret-transparent hidden flex-col shrink-0 justify-center w-[12.8px] -my-2"></div>
 </div>
 </div>
 </div>
 </div>
 )}
 </div>
<div className="relative box-border caret-transparent h-[66.3571px] min-h-[auto] min-w-[auto] md:h-[105.143px]"></div>
 <div className="absolute box-border caret-transparent h-full pointer-events-none w-full inset-[0%]">
 <div className="absolute bg-[lab(99.9988_0.0188053_-0.00110865_/_0.1)] box-border caret-transparent h-full object-cover w-full overflow-clip left-0 top-0">
 <img
 src={props.desktopImageSrc}
 alt=""
sizes="100vw"
className="absolute box-border caret-transparent h-full max-w-full object-cover w-full z-0 inset-[0%]"
 />
 </div>
<div className="absolute bg-[lab(99.9988_0.0188053_-0.00110865_/_0.1)] box-border caret-transparent block h-full object-cover w-full overflow-clip left-0 top-0 md:hidden">
 <img
 src={props.mobileImageSrc}
 alt=""
sizes="100vw"
className="absolute box-border caret-transparent h-full max-w-full object-cover w-full z-0 inset-[0%]"
 />
 </div>
 </div>
 </section>
 );
};