import parser from 'bbcode-to-react';

export default function ContactCard(props) {
    return (
        <div>
            <div className="flex items-center" >
                <img className="mr-8 w-2/12" src={props.href} alt="" />
                <p className="text-3xl font-semibold text-gray-250">
                    {props.title}
                </p>
            </div>
            <div>
                <p className="text-xl text-gray-250">
                    {props.subtitle}
                </p>
            </div>
        </div>
    );
}
