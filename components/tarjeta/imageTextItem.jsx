
export default function VideoTitle(props) {
    return (

        <div className="flex">
            <div className="w-1/12"><img src={props.img} alt="" /></div>
            <div className="w-10/12 pl-6">
                <h3 className="title-4">{props.title}</h3>
                {props.children}
            </div>
        </div>

    );
}
