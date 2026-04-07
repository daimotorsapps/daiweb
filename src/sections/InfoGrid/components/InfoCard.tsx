export type InfoCardProps = {
 eyebrowText: string;
 title: string;
 linkHref: string;
 linkLabel: string;
 imgSrc: string;
};
export const InfoCard = (props: InfoCardProps) => {
 return (
 <a
 href={props.linkHref}
 role="none"
className="group text-white bg-blue-950 box-border flex h-full min-h-auto min-w-auto w-full p-[41.1786px] md:p-[60.5714px] transition-all duration-300 hover:bg-blue-900 cursor-pointer"
 >
 <div className="relative box-border flex min-h-auto min-w-auto w-full">
 <div className="items-stretch box-border gap-x-[20.1964px] flex flex-col min-h-auto min-w-auto gap-y-[20.1964px] w-full md:gap-x-[23.4286px] md:gap-y-[23.4286px]">
 <div className="relative box-border h-[38px] min-h-auto min-w-auto w-[38px] z-[1] transition-transform duration-300 group-hover:scale-110">
 <img
 src={props.imgSrc}
 alt=""
className="absolute box-border max-w-full object-cover w-full inset-0"
 />
 </div>
<div className="relative box-border min-h-auto min-w-auto z-[1]">
 <h3 className="text-[22.0982px] font-medium box-border flow-root leading-[24.308px] mb-[14.0982px] md:text-[23.7143px] md:leading-[26.0857px] md:mb-[15.7143px]">
 {props.title}
 </h3>
<div className="relative box-border inline-block mt-[20.1964px] md:mt-[23.4286px]">
 <div className="relative text-white items-center box-border gap-x-2 flex h-full justify-center gap-y-2 text-center align-middle py-2 border-b border-b-white/20 transition-all duration-200 group-hover:border-b-white" >
 <div className="relative box-border flow-root min-h-auto min-w-auto">
 {props.linkLabel}
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </a>
 );
};