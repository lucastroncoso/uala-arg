import parser from 'bbcode-to-react';

export default function Card(props) {
    return (
        <div className={props.className + " bg-white rounded-3xl flex flex-wrap md:flex-nowrap  py-4 pl-6 md:pl-10 pr-6 shadow-lightblue"}>
            <img style={{ width: "75px", height: "75px" }} className="object-cover my-4 mr-6 " src={props.img} alt="" />
            <div className="md:h-full content-center flex flex-wrap		">
                <h2 className="title-3  w-full self-start text-blue-250">{props.title}</h2>
                <p className="text  ">{parser.toReact(props.text)}</p>
                <div>{props.children}</div>
            </div>

        </div>
    );
}
