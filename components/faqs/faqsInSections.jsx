import { useState } from "react";
import Container from "../container"



export default function FaqsInSections(props) {

    const [selected, setSelected] = useState({
        category: 1,
        faq: null
    });
    const data = props.response.argentinaFaqCollection.items;
    const faqs = data;


    return (
        <>
        <Container>
        <div className="rounded-2xl shadow-blue my-32 py-6 pb-2 px-4 lg:px-12 faq-list">
        <h3 className="title-3 mt-3 mb-6 md:mb-10">{props.title}</h3>
        {
            <div className="text-gray-800 border-b border-gray-300 mb-6 pb-4">
                <div className="">
                    {
                        faqs.filter(faq => faq.section === props.section).map(faq =>
                            <div className="pb-4 mt-4 border-b border-gray-200">
                                <div className="flex text-base font-medium text-gray-500 cursor-pointer lg:text-xl " onClick={() => setSelected({ ...selected, faq: selected.faq == faq.id ? 0 : faq.id })}><h3 className="flex-grow">{faq.question}</h3><div className="flex items-center text-gray-400"><i class={`fas ${selected.faq == faq.id ? 'fa-chevron-up' : 'fa-chevron-right'}`}></i></div></div>
                                {
                                    selected.faq == faq.id && <div className="mt-4 text-gray-500 whitespace-pre-line lg:mx-8" >
                                        {faq.answer}
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        }
        </div>
        </Container>
    </>
    )

}

