export type DealerCardProps = {
 imageSrc: string;
 eyebrowText: string;
 title: string;
 description?: string;
 buttonText?: string;
 linkHref?: string;
 innerLinkClassName?: string;
 innerButtonClassName?: string;
};
export const DealerCard = (props: DealerCardProps) => {
 return (
 <div
 role="none"
 className="group box-border rounded-xl flex md:h-full min-h-auto min-w-auto w-full cursor-pointer"
 >
 <div className="relative box-border flex min-h-auto min-w-auto w-full">
 <div className="text-white items-stretch rounded-xl bg-stone-900 box-border gap-x-[20.1964px] flex flex-col h-[580px] justify-end min-h-auto min-w-auto gap-y-[20.1964px] w-full px-[20.1964px] py-[28.1964px] md:gap-x-[23.4286px] md:gap-y-[23.4286px] md:p-[46.2857px] overflow-clip" >
 {/* Background image with zoom on hover */}
 <div className="absolute box-border rounded-xl h-full opacity-60 w-full z-[1] overflow-clip inset-0">
 <img
 src={props.imageSrc}
 alt=""
 className="absolute box-border rounded-xl h-full max-w-full object-cover w-full inset-0 transition-transform duration-700 ease-out group-hover:scale-105 overflow-clip"
 />
 </div>
 {/* <div className="relative box-border min-h-auto min-w-auto z-[1]">
 <h3 className="text-[28.1964px] font-medium box-border flow-root leading-[31.0161px] mb-[20.1964px] md:text-[31.4286px] md:leading-[34.5714px] md:mb-[23.4286px]">
 {props.title}
 </h3>
 <div className="box-border">
 <p className="box-border flow-root">
 {props.description}
 </p>
 </div>
 <div className="relative box-border inline-block mt-[20.1964px] md:mt-[23.4286px]">
 <a
 href={props.linkHref}
 className="relative text-stone-900 items-center bg-white box-border gap-x-2 flex h-full justify-center gap-y-2 text-center align-middle border px-6 py-[14.4px] border-solid border-white/20 transition-all duration-200 hover:bg-stone-100 md:text-white md:bg-transparent md:border-white/50 md:hover:bg-white/10 active:scale-95"
 >
 <div className="relative text-stone-900 box-border flow-root min-h-auto min-w-auto md:text-white">
 {props.buttonText}
 </div>
 </a>
 </div>
 </div> */}
 </div>
 </div>
 </div>
 );
};