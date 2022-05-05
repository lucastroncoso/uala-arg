import CardRoundedShadow from "../cardRoundedShadow";
import Link from 'next/link';

export default function PromotionCard(props) {

    return (
        <CardRoundedShadow className="p-4 bg-white" roundXl>
            <div className="flex justify-center ">
                <div>
                    <img className="max-h-16" src={props.logo ? props.logo.url : ''} alt="" />
                </div>
            </div>
            <div className="flex items-center flex-grow mt-4 font-medium text-center">
                <div className="w-full">{props.previewTitle}</div>
            </div>
            <div className="mt-4 text-sm text-center">{props.date}</div>
            <div className="mt-4 text-center">
                <Link href={"/gamingpass/" + props.slug}>
                    <a className="link" onClick={() => dataLayer.push(
                        {
                            event: 'trackEvent',
                            eventCategory: 'Web Arg',
                            eventAction: 'Pagina Promociones',
                            eventLabel: 'Boton Ver Mas'
                        })}>Ver mas</a>
                </Link>
            </div>
        </CardRoundedShadow>
    )
}