import parser from 'bbcode-to-react';

export default function CardItem(props) {
    return (
        <div className="flex items-center mt-6">
            <img style={props.width ? { width: props.width } : { width: "55px" }} src={props.img} alt="" />
            <p className={props.textSize ? `pl-8 ${props.textSize}` : "pl-8 subtitle-2"}>{parser.toReact(props.text)}</p>
        </div>
    );
}
