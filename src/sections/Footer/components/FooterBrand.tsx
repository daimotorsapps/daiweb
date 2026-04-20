/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; */
export const FooterBrand = () => {
    /* const socials = [
        {
            ariaLabel: "Facebook",
            href: "https://www.facebook.com/profile.php?id=100090385504775",
            icon: faFacebook
        },
        {
            ariaLabel: "Instagram",
            href: "https://www.instagram.com/daimotorsmcbo/",
            icon: faInstagram
        },
        {
            ariaLabel: "Mail",
            href: "mailto:ventas@daimotors.com.ve",
            icon: faEnvelope
        },
        {
            ariaLabel: "Telefono",
            href: "tel:+582617000485",
            icon: faPhone
        },

             
         { ariaLabel: "Facebook", href: "https://www.facebook.com/profile.php?id=100090385504775", src: "./public/svg/facebook.svg" },
         { ariaLabel: "Instagram", href: "https://www.instagram.com/daimotorsmcbo/", src: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-11.svg" },
         { ariaLabel: "Telefono", href: "tel+582617000485", src: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-11.svg" },
         { ariaLabel: "Mail", href: "https://www.instagram.com/daimotorsmcbo/", src: "./public/svg/envelope-solid-full.svg" },
         


         { ariaLabel: "LinkedIn", href: "https://www.linkedin.com/company/hyundai-venezuela/", src: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-12.svg" },
        { ariaLabel: "YouTube", href: "https://www.youtube.com/channel/UCIAbqA6etu_dbObAhJhR3wQ", src: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-13.svg" },
        { ariaLabel: "X", href: "https://twitter.com/Hyundai_Vzla", src: "https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-14.svg" }, 
    ]; */


    /* HTML */
    return (
        <div className="box-border gap-x-[16.7857px] grid grow auto-cols-[1fr] col-start-[span_1] grid-cols-[repeat(auto-fit,minmax(min(100%,288px),1fr))] grid-rows-[1] h-full min-h-auto min-w-auto gap-y-[41.1786px] md:gap-x-[29.7143px] md:gap-y-[60.5714px]" >
            <a
                aria-label="Go to the homepage"
                href="#inicio"
                className="self-start box-border block max-w-full min-h-auto min-w-auto outline-offset-[3px] w-32 transition-opacity duration-200 hover:opacity-80"
            >
                <div className="box-border max-w-50">
                    {/* <img
 src="https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-9.svg"
 alt="Hyundai Venezuela"
 className="box-border inline align-baseline w-full"
 /> */}

                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 129 81" fill="none"><path d="M128.073 61.657H128.296V80.5929H123.879V61.657H128.073ZM115.161 65.7573H108.075C107.951 65.7579 107.827 65.7834 107.712 65.8322C107.597 65.8811 107.493 65.9524 107.406 66.0419C107.318 66.1315 107.249 66.2376 107.203 66.354C107.157 66.4704 107.134 66.5949 107.136 66.7203V70.6361H115.161V65.7573ZM106.518 61.657H119.575V80.5929H115.161V74.7363H107.136V80.5929H102.722V65.5304C102.722 64.3486 103.07 63.397 103.746 62.7033C104.425 62.008 105.356 61.657 106.518 61.657ZM94.4026 66.7399C94.4026 66.1719 94.0126 65.7573 93.4324 65.7573H86.3806V76.4926H93.46C94.0337 76.4926 94.4026 76.0242 94.4026 75.5133V66.7399ZM95.0234 61.657C96.1822 61.657 97.115 62.008 97.796 62.7017C98.4753 63.3937 98.8231 64.3454 98.8231 65.5304V76.7228C98.8231 77.9062 98.4753 78.8562 97.796 79.5499C97.1183 80.242 96.1854 80.5945 95.0234 80.5945H81.965V61.6554L95.0234 61.657ZM74.0731 61.657C75.2318 61.657 76.1647 62.008 76.8473 62.7017C77.525 63.3937 77.8663 64.3454 77.8663 65.5304V80.5929H73.4522V66.7105C73.4551 66.5859 73.4329 66.4619 73.3871 66.346C73.3413 66.2301 73.2728 66.1247 73.1857 66.0359C73.0985 65.9472 72.9944 65.8769 72.8797 65.8293C72.765 65.7817 72.6419 65.7578 72.5177 65.7589H65.427V80.5962H61.0098V61.6554L74.0731 61.657ZM52.4986 61.657H56.9159V76.7228C56.9159 77.9062 56.5714 78.8562 55.8936 79.5499C55.2127 80.242 54.2798 80.5945 53.1162 80.5945H40.0626V61.6554H44.4767V76.491H51.5625C51.6872 76.4928 51.8109 76.4693 51.9263 76.4217C52.0416 76.3742 52.1462 76.3037 52.2337 76.2145C52.3212 76.1252 52.3898 76.0191 52.4353 75.9025C52.4808 75.7859 52.5024 75.6613 52.4986 75.5361V61.657ZM33.0678 61.657H38.2798L30.6544 74.0345V80.5929H26.2371V74.0345L18.6052 61.657H23.8221L28.4458 69.154L33.0678 61.657ZM12.4409 61.657H16.8598V80.5929H12.4392V72.9784H4.4189V80.5945H0V61.657H4.41727V68.8716H12.4409V61.657ZM45.9605 5.90389C29.806 9.25002 18.5061 16.8906 18.5061 25.7897C18.5061 30.7175 21.9726 35.2585 27.8119 38.9C28.2995 39.1987 28.6213 39.2591 28.8521 39.2428C29.2746 39.2151 29.5135 38.9555 29.6874 38.6405C29.7979 38.4381 29.9426 38.1329 30.0888 37.8228C31.9903 33.3536 38.6926 17.8635 47.4898 7.36803C47.701 7.11666 47.8148 6.9518 47.9221 6.76409C48.1203 6.41642 48.0781 6.1373 47.9253 5.97081C47.6815 5.70312 46.9941 5.70312 45.9605 5.90389ZM54.9738 12.5994C50.0299 24.244 59.3959 22.7962 61.9247 22.2542C66.225 21.3288 70.34 19.7471 73.6261 18.4723C83.0035 14.8438 87.9766 11.2022 89.6294 9.8001C89.8277 9.63361 89.9756 9.50139 90.0845 9.39693C90.3152 9.16351 90.4875 8.91378 90.4875 8.5808C90.4875 8.19722 90.1527 7.88872 89.488 7.66673C89.396 7.63531 89.3049 7.60101 89.215 7.5639C82.056 5.35708 73.5156 4.07086 64.3333 4.07086C64.2569 4.07086 64.083 4.0627 63.8343 4.07086C62.7341 4.1035 61.5103 4.34181 60.5141 4.84292C57.2344 6.4915 55.801 10.6521 54.9738 12.5994ZM98.698 12.9308C98.5826 13.1299 98.438 13.4335 98.2949 13.7453C96.3935 18.2095 89.6895 33.6997 80.8907 44.2C80.6795 44.4514 80.5657 44.6162 80.4617 44.7974C80.2618 45.15 80.3057 45.4291 80.4601 45.5972C80.7038 45.8633 81.3816 45.8649 82.4233 45.6625C98.5745 42.3229 109.876 34.6823 109.876 25.7848C109.876 20.8521 106.406 16.3096 100.57 12.6696C100.083 12.3693 99.7674 12.3105 99.5285 12.3268C99.1092 12.353 98.8654 12.6157 98.698 12.9308ZM73.5562 38.9327C78.5001 27.2947 69.1357 28.736 66.6085 29.2779C62.3099 30.2001 58.1965 31.7866 54.9072 33.0582C45.533 36.6818 40.5567 40.3315 38.9039 41.732C38.7089 41.8985 38.5528 42.0307 38.4553 42.1336C38.2164 42.367 38.0441 42.6183 38.0441 42.9529C38.0441 43.3333 38.3822 43.6385 39.0469 43.8638C39.0989 43.8801 39.2582 43.9486 39.3134 43.9698C46.4789 46.1734 55.0209 47.4613 64.2016 47.4613C64.2731 47.4613 64.4503 47.4678 64.6924 47.4613C65.7976 47.4286 67.0295 47.187 68.0127 46.6892C71.3005 45.0357 72.7258 40.8767 73.5562 38.9327ZM64.1951 51.5794C36.7229 51.5794 14.4447 40.0345 14.4447 25.7946C14.4431 11.5401 36.7229 0 64.1951 0C91.6755 0 113.947 11.5417 113.947 25.7946C113.947 40.0345 91.6755 51.5794 64.1951 51.5794Z" fill="white"></path></svg>
                </div>
            </a>

            {/* <div className="box-border min-h-auto min-w-auto mt-auto">
                <h3 className="text-[16.0982px] font-medium box-border flow-root leading-[17.708px] mb-[20.1964px] md:text-[17.7143px] md:leading-[19.4857px] md:mb-[23.4286px]">
                    Síguenos
                </h3>
                <div
                    role="list"
                    className="content-center items-center box-border flex flex-wrap justify-start -m-2"
                >
                    {socials.map((s) => (
                        <div key={s.ariaLabel} role="listitem" className="box-border min-h-auto min-w-auto">
                            <a
                                aria-label={s.ariaLabel}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="box-border block max-w-full outline-offset-[3px] w-10 p-2 transition-all duration-200 hover:opacity-70 hover:-translate-y-0.5"
                            >

                                <FontAwesomeIcon icon={s.icon} className="box-border h-full align-baseline w-full" />

                            </a>
                        </div>
                    ))}
                </div>
            </div> */}


        </div>



    );
};