import { NavbarLogo } from "./NavbarLogo";

export const MobileNavbar = () => {
    return (
        <div
            role="banner"
            className="relative block z-[1] md:hidden"
        >
            <div className="max-w-[1440px] w-[calc(100%_-_35.1429px)] mx-auto">
                <div className="relative flex h-20 justify-center items-center pointer-events-auto w-full z-[2] mx-auto px-[28.1964px]">
                    <NavbarLogo
                        anchorClassName="min-h-auto min-w-auto w-40"
                        divClassName="min-h-auto min-w-auto"
                    />
                </div>
            </div>
        </div>
    );
};
