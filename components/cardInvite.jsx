import parser from 'bbcode-to-react';
import Image from "next/image";

export default function CardInvite(props) {
  return (
    <div
      data-animation="cta-cards"
      className={props.className ? props.className : "bg-white rounded-3xl flex flex-wrap py-4 pl-10 pr-6 shadow-lightblue my-4 grid grid-cols-12"}
    >
        <div className="col-span-4 px-auto">
            <span className="text-9xl text-gray-200">{props.number}</span>
        </div>
        <div className="col-span-8">
            <div>
                <h2 className="title-3 my-2 w-full self-start">{props.title}</h2>
                <p className="text lg:text-base mt-2 mb-4 ">{props.text}</p>

            </div>
            {props.img && (<Image
                width={props.width} 
                height={props.height}
                className="mt-2 "
                src={props.img}
                />
            )}
        </div>
    </div>
  );
}
