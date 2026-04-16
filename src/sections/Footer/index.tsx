import { FooterBrand } from "./components/FooterBrand";
import { FooterCopyright } from "./components/FooterCopyright";

//import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
export const Footer = () => {
 return (
 <footer className="text-white bg-blue-950 box-border caret-transparent min-h-[auto] min-w-[auto]">
 <div className="relative box-border caret-transparent gap-x-[41.1786px] flex flex-col justify-center max-w-[1440px] gap-y-[41.1786px] w-[calc(100%_-_35.1429px)] z-[1] mx-auto py-[66.3571px] md:gap-x-[60.5714px] md:gap-y-[60.5714px] md:w-[calc(100%_-_86.8571px)] md:py-[105.143px]" >
 <div className="items-stretch box-border caret-transparent gap-x-[16.7857px] flex flex-col auto-cols-[minmax(0px,1fr)] grid-cols-[repeat(12,minmax(0px,1fr))] grid-rows-[auto] justify-between min-h-[auto] min-w-[auto] gap-y-[41.1786px] md:gap-x-[29.7143px] md:grid md:gap-y-[60.5714px]" >
 <FooterBrand />
 {/* <FooterLinks /> */}
 </div>
 </div>
 <FooterCopyright />
 <div className="box-border caret-transparent hidden"></div>
 <a
 href="https://wa.me/+584146582009"
 target="_blank"
 rel="noopener noreferrer"
 aria-label="Contactar por WhatsApp"
 className="fixed items-center bg-green-500 box-border flex h-16 justify-center max-w-full outline-offset-[3px] w-16 z-[999] p-4 rounded-full right-8 bottom-8 shadow-lg transition-all duration-200 hover:bg-green-400 hover:scale-110 active:scale-95"
 >
 <img
 src="./public/img/wslogo.svg"
 alt=""
 className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] object-cover w-full"
 />
 </a>
 </footer>
 );
};