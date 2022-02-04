import { useState } from "react"
import Container from "./container";
import parser from 'bbcode-to-react';





export default function Faqs(props) {
    const [selected, setSelected] = useState({
        category: 1,
        faq: null
    })


    return (
        <Container className="my-24">
            <div className="rounded-2xl  shadow-blue  py-6 pb-2 px-4 lg:px-12 faq-list">
                {

                    <div className="text-gray-800  pb-4">
                        <div className="">
                            {
                                props.faqs.map(faq =>
                                    <div className="mt-4 pb-4 border-b border-gray-200">
                                        <div className="text-base lg:text-xl font-medium text-gray-500 cursor-pointer flex " onClick={() => setSelected({ ...selected, faq: selected.faq == faq.faqsid ? 0 : faq.faqsid })}><div className="flex-grow">{faq.question}</div><div className="flex items-center text-gray-400"><i class={`fas ${selected.faq == faq.faqsid ? 'fa-chevron-up' : 'fa-chevron-right'}`}></i></div></div>
                                        {
                                            selected.faq == faq.faqsid && <div className=" lg:mx-8 text-gray-500 mt-4 whitespace-pre-line reactMarkdown">{parser.toReact(faq.answer)}</div>
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>

                }
            </div>
        </Container>
    );
}
