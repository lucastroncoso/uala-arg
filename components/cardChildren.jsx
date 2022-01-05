import parser from 'bbcode-to-react';

export default function CardChildren(props) {
    return (
        <div className="bg-white rounded-3xl flex flex-wrap py-4 pl-10 pr-6 shadow-lightblue">
            <img style={{ width: "90px", height: "90px" }} className="object-cover my-2 " src={props.img} alt="" />
            <div className="min-h-full">
                <h2 className="title-3 my-2 w-full self-start">{props.title}</h2>
                {/* <p className="text lg:text-base mt-2 mb-4 ">{parser.toReact(props.text)}</p> */}
                <div>{props.children}</div>
            </div>

        </div>
    );
}
