export default function PromotionCard(props) {

    return (
        <div className="grid">
            <div className="flex flex-col p-4 m-4 border border-gray-100 shadow-lightblue rounded-3xl">
                <div className="flex justify-center">
                    <div>
                        <img className="max-h-16" src={props.logo.url} alt="" />
                    </div>
                </div>
                <div className="flex items-center flex-grow mt-4 font-medium text-center">
                    <div className="w-full">{props.previewTitle}</div>
                </div>
                <div className="mt-4 text-sm text-center">{props.date}</div>
                <div className="mt-4 text-center"><a href={"/promociones/" + props.slug} className="link">Ver mas</a></div>
            </div>
        </div>
    )
}