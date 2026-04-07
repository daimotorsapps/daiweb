export const MobileNavActions = () => {
    return (
        <ul
            role="list"
            className="box-border caret-transparent flex flex-col shrink-0 list-none pl-0"
        >
            <li className="box-border caret-transparent flex">
                <div className="box-border caret-transparent h-full w-full">
                    <div
                        role="button"
                        className="relative items-center box-border caret-transparent gap-x-[10.0982px] hidden basis-[0%] grow justify-start -outline-offset-2 text-nowrap align-top w-full z-[2] mx-auto py-[10.0982px] md:gap-x-[11.7143px] md:py-[11.7143px]"
                    >
                        <div className="box-border caret-transparent text-nowrap w-[17.6px]">
                            <img
                                src="https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-3.svg"
                                alt="Icon"
                                className="box-border caret-transparent h-full text-nowrap align-baseline w-full"
                            />
                        </div>
                    </div>
                    <nav className="relative box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] min-w-full w-full z-[1] left-[0%] top-[0%]">
                        <div className="relative box-border caret-transparent overflow-hidden">
                            <div className="relative box-border caret-transparent">
                                <div className="relative box-border caret-transparent w-full mx-auto">
                                    <form className="box-border caret-transparent flex mb-[15px] border-t-white border-b-[color(srgb_0.121569_0.113725_0.117647_/_0.2)] border-x-white border-b">
                                        <button
                                            type="submit"
                                            className="items-center bg-transparent caret-transparent flex justify-center -outline-offset-2 -ml-4 px-4 py-0"
                                        >
                                            <img
                                                src="https://c.animaapp.com/mn3k7y61GKB8dL/assets/icon-6.svg"
                                                alt="Icon"
                                                className="box-border caret-transparent align-baseline w-[17.6px]"
                                            />
                                        </button>
                                        <label className="box-border caret-transparent block w-full">
                                            <input
                                                name="query"
                                                placeholder="Buscar..."
                                                type="search"
                                                className="appearance-none bg-transparent box-border caret-transparent block h-[46.4px] leading-[22.8571px] max-w-full outline-offset-[3px] text-start align-middle w-full p-0"
                                            />
                                        </label>
                                        <input
                                            type="submit"
                                            value="Search"
                                            className="bg-blue-500 box-border caret-transparent hidden outline-offset-[3px] text-center text-nowrap px-[15px] py-[9px]"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </li>
            <li className="relative items-start box-border caret-transparent flex flex-col justify-center text-center z-[2]">
                <div className="relative box-border caret-transparent">
                    <div className="absolute box-border caret-transparent h-full w-full z-[3] inset-[0%]">
                        <a
                            href="/cotizar"
                            className="absolute box-border caret-transparent block h-full max-w-full outline-offset-[3px] w-full inset-[0%]"
                        ></a>
                        <button
                            type="button"
                            className="absolute bg-transparent caret-transparent hidden h-full outline-offset-[3px] w-full p-0 inset-[0%]"
                        ></button>
                    </div>
                    <div className="relative text-[color(srgb_1_1_1)] items-center bg-[color(srgb_0.054902_0.168627_0.360784)] box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 align-middle border px-6 py-[14.4px] border-solid border-[color(srgb_0.054902_0.168627_0.360784)]" >
                        <div className="relative box-border caret-transparent flow-root before:accent-auto before:box-border before:caret-transparent before:text-[color(srgb_1_1_1)] before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:mb-[-6.72px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-hyundai_sans after:accent-aut o after:box-border after:caret-transparent after:text-[color(srgb_1_1_1)] after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-none after:mb-[-5.92px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-hyundai_sans" >
                            Cotizar
                        </div>
                        <div className="items-center aspect-square box-border caret-transparent hidden flex-col shrink-0 justify-center w-[12.8px] -my-2"></div>
                        <div className="absolute box-border caret-transparent h-[1.504px] pointer-events-none origin-[100%_100%] bottom-[0%] inset-x-[0%]"></div>
                    </div>
                </div>
            </li>
        </ul>
    );
};