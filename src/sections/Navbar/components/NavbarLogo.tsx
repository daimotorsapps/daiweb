import { Link } from "react-router-dom";

export type NavbarLogoProps = {
    anchorClassName: string;
    divClassName: string;
};

export const NavbarLogo = (props: NavbarLogoProps) => {
    return (
        <Link
            to="/"
            aria-label="Home Page"
            className={`relative items-center flex justify-start max-w-full -outline-offset-2 z-[2] ${props.anchorClassName}`}
        >
            <div className={`max-w-full ${props.divClassName}`}>
                <img
                    src="/img/logo-dai.png"
                    alt="Dai Motors"
                    className="h-20 align-baseline w-full"
                />
            </div>
        </Link>
    );
};
