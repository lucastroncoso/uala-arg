export default function CardItem(props) {
    return (
        <div className="flex items-center mt-6">
            <img style={{ width: "55px" }} src={props.img} alt="" />
            <p className="pl-8 subtitle-2">{props.text}</p>
        </div>
    );
}
