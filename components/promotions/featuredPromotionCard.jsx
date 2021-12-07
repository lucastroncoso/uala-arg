export default function FeaturedPromotionCard(props) {

    return (
        <div className="grid">
            <div className="flex flex-col m-4 border border-gray-100 shadow-lightblue rounded-3xl overflow-hidden wrapper ">

                <div className="relative">
                    <img src={props.image.url}  alt={props.name}  />

                    <div className="flex absolute left-4 -bottom-4">
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
                        <div className="mt-4 text-center"><a href={"/promociones/" + props.slug} className="link">Ver mas</a></div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}