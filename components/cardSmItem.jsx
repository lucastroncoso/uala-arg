export default function CardItem(props) {
    return (
        <div className="flex items-center mt-4">
            <img style={{ width: "30px" }} src={props.img} alt="" />
            <p className="pl-8 title-4">{props.text}</p>
        </div>
    );
}
