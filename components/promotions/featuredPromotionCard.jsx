import CardRoundedShadow from "../cardRoundedShadow";
import Link from 'next/link';

export default function FeaturedPromotionCard(props) {

    return (
        <CardRoundedShadow className="overflow-hidden wrapper" roundXl>

                <div className="relative">
                    <div className="h-32 w-full overflow-hidden">
                        <img src={props.image.url}  alt={props.name} className="object-cover w-full min-h-full" />
                    </div>

                    <div className="flex absolute left-8 -bottom-4">
                        <div className="border border-gray-100 shadow-lightblue rounded-xl bg-white h-24 flex items-center p-1">
                            <img className="max-h-16" src={props.logo.url} alt="" />
                        </div>
                    </div>
                </div>
                
                <div className="p-3 space-y-3 m-4">
                    
                    <div className="flex flex-grow mt-4 font-medium ">
                        <div className="w-full">{props.previewTitle}</div>
                    </div>
                    <div className="flex justify-between flex-row flex-grow mt-4 font-medium text-center">
                        <div className="mt-4 text-sm text-center">{props.date}</div>
                        <div className="mt-4 text-center">
                        <Link href={"/promociones/" + props.slug}>
                            <a className="link">Ver mas</a>
                        </Link>
                        </div>
                    </div>
                    
                </div>

        </CardRoundedShadow>
    )
}