import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const FooterLinks = () => {

    const socials = [
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
    ];


    return (


        <div className="box-border caret-transparent gap-x-[16.7857px] flex col-end-[span_8] min-h-[auto] min-w-[auto] gap-y-[36.5893px] w-full md:gap-x-[29.7143px] md:gap-y-[46.2857px]">



            <div
                role="navigation" className="box-border caret-transparent gap-x-[16.7857px] grid flex-col auto-cols-[minmax(0px,1fr)] grid-cols-[repeat(2,minmax(0px,1fr))] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-[36.5893px] w-full md:gap-x-[29.7143px] md:grid-cols-[repeat(4,minmax(0px,1fr))] md:gap-y-[46.2857px]" >

                <div className="flex flex-col gap-y-[16px]">

                    <div className="box-border min-h-auto min-w-auto mt-auto">
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
            </div>


                </div>



            </div>

        </div>


    );
};
