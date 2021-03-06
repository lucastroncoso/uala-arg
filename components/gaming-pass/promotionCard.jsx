import CardRoundedShadow from "../cardRoundedShadow";
import Link from 'next/link';

export default function PromotionCard(props) {

    return (
           
        <CardRoundedShadow className={props.className} roundXl>

               <Link href={"/gaming-pass/" + props.slug}>
                 <div>  <div className="flex justify-center ">
                <div>
                    <img className="max-h-20" src={props.logo ? props.logo.url : ''} alt="" />
                </div>
            </div>
            <div className="flex items-center flex-grow mt-2 font-medium text-center text-blue-250 mx-4">
                <div className="w-full">{props.previewTitle}</div>
            </div>
                <div className="flex items-center flex-grow  font-medium text-center mx-4">
                <div className="w-full">{props.previewTitle2}</div>
            </div>
          
            <div className="mt-8 text-center text-sm items-self-end		">
      
             {props.previewSubtitleReintegro}   
            </div></div>
          
            </Link>
        </CardRoundedShadow>
          
    )
}