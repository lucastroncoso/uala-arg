import parser from 'bbcode-to-react';
import styles from './SeguridadCard.module.css'

export default function SecurityCard(props) {
    return (
        <div className={styles.securityCard + "  py-4 md:py-20  md:pt-0 text-gray-250"}>
            <div className={styles.tab + " border bg-white rounded-2xl col-span-12 col-start-2 shadow-xl"}>
                <div className="border-l-2 border-transparent relative">
                    <input
                        className="w-full absolute z-10 cursor-pointer opacity-0 h-full"
                        type="checkbox"
                        id="chck2"
                    />
                    <div className={styles.tabLabel + " flex justify-between items-center md:p-5 p-2 md:pl-8 pr-8 cursor-pointer select-none "}
                        for="chck2">
                        <div className="inline-flex left">
                            <img src={props.src} className="md:w-20 w-16 h-auto"></img>
                            <h4 className="place-self-center  title-3 pl-4 md:pl-10">
                                {props.title}
                            </h4>
                        </div>
                        <div className="w-7 h-7 flex items-center justify-center test">
                            <svg aria-hidden="true" className="transform -rotate-90" data-reactid="266" fill="none" height="24"
                                stroke="#3E6BFD" stroke-width="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.tabContent + "  flex  pr-8 subtitle-2"}>

                        <div className="md:pl-36 pl-12 pb-8">{props.children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
