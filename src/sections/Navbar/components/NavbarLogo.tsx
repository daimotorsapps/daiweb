export type NavbarLogoProps = {
    anchorClassName: string;
    divClassName: string;
};
export const NavbarLogo = (props: NavbarLogoProps) => {
    return (
        <a
            aria-label="Home Page"
            href="/"
            className={`relative items-center box-border caret-transparent flex justify-start max-w-full -outline-offset-2 z-[2] ${props.anchorClassName}`}
        >
            <div
                className={`box-border caret-transparent max-w-full ${props.divClassName}`}
            >
                <img
                    src="https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-1.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-full align-baseline w-full"
                />
            </div>
        </a>
    );
};