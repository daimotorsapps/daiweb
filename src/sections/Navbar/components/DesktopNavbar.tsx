import { DesktopNavMenu } from "@/sections/Navbar/components/DesktopNavMenu";
import { NavbarLogo } from "./NavbarLogo";

export const DesktopNavbar = () => {
    return (
        <header className="relative hidden z-[1] md:block">
            <div className="max-w-[1440px] w-[calc(100%_-_86.8571px)] mx-auto px-[31.4286px]">
                <div className="flex h-20 justify-between max-w-[1440px] pointer-events-auto w-full mx-auto gap-x-[15.7143px]">
                    <NavbarLogo
                        anchorClassName="min-h-0 min-w-0 w-52 md:min-h-[auto] md:min-w-[auto]"
                        divClassName="min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                    />
                    <DesktopNavMenu />
                </div>
            </div>
        </header>
    );
};
