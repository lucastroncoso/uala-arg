export default function Card(props) {
    return (
        <div className="bg-white rounded-3xl flex flex-wrap py-4 pl-10 pr-6 shadow-lightblue">
            <img style={{ width: "90px", height: "90px" }} className="object-cover my-2 " src={props.img} alt="" />
            <h2 className="title-3 my-2 w-full self-start">{props.title}</h2>
            <p className="text my-2 min-h-full">{props.text}</p>
        </div>
    );
}
