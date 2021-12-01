export default function CardItem(props) {
    return (
        <div className="flex items-center mt-4">
            <img className="w-2/12" src={props.img} alt="" />
            <p className="pl-8 text">{props.text}</p>
        </div>
    );
}
