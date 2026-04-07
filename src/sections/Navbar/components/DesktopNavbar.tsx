import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopNavMenu } from "@/sections/Navbar/components/DesktopNavMenu"; export const DesktopNavbar = () => {
return ( <header className="relative box-border caret-transparent hidden z-[1] md:block">
<div className="box-border caret-transparent max-w-[1440px] w-[calc(100%_-_35.1429px)] mx-auto px-[28.1964px] md:w-[calc(100%_-_86.8571px)] md:px-[31.4286px]">
<div className="box-border caret-transparent gap-x-[14.0982px] flex h-20 justify-between max-w-[1440px] pointer-events-auto w-full mx-auto md:gap-x-[15.7143px]">
<NavbarLogo
anchorClassName="min-h-0 min-w-0 w-52 md:min-h-[auto] md:min-w-[auto]" divClassName="min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
/>
<DesktopNavMenu />
</div>
</div>
</header>
);};