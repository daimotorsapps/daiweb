export type FooterColumnLink = {
 href: string;
 label: string;
};
export type FooterColumnProps = {
 title: string;
 links: FooterColumnLink[];
};
export const FooterColumn = (props: FooterColumnProps) => {
    
 return (
 <section className="box-border min-h-auto min-w-auto">
 <h3 className="text-[16.0982px] font-medium box-border flow-root leading-[17.708px] mb-[20.1964px] md:text-[17.7143px] md:leading-[19.4857px] md:mb-[23.4286px]">
 {props.title}
 </h3>
 <div
 role="list"
 className="items-start box-border flex flex-col justify-start"
 >
 {props.links.map((link, index) => (
 <div
 key={index}
 role="listitem"
 className="box-border flex min-h-auto min-w-auto"
 >
 <a
 href={link.href}
 className="box-border block max-w-full min-h-auto min-w-auto outline-offset-[3px] py-[10.0982px] md:py-[11.7143px] transition-all duration-200 hover:opacity-70 hover:translate-x-1"
 >
 <div className="text-sm box-border flow-root leading-[21px]">
 {link.label}
 </div>
 </a>
 </div>
 ))}
 </div>
 </section>
 );
};