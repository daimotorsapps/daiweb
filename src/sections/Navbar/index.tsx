import { DesktopNavbar } from "@/sections/Navbar/components/DesktopNavbar";
import { MobileNavbar } from "@/sections/Navbar/components/MobileNavbar"; 

export const Navbar = () => {
return ( <div className="sticky text-white bg-stone-900 box-border pointer-events-auto z-[1000] top-0 inset-x-0 transition-shadow duration-300">
{/* <a href="#main" className="absolute text-stone-900 bg-gray-200 box-border block max-w-50 -outline-offset-2 pointer-events-auto -translate-x-[200%] focus:translate-x-0 z-[2] m-2 p-2 rounded-lg left-0 top-0 transition-transform duration-200" >
<div className="text-sm box-border leading-[21px]">
Skip to main content </div>
</a> */}
<DesktopNavbar />
<MobileNavbar />
</div>
);};