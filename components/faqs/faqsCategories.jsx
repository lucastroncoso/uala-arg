import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import Container from "../container"

export default function FacCategories({ categories, faqs }) {
    const [selected, setSelected] = useState({
        category: 0,
        faq: null
    })

    return (
        <Container>
            <div className="px-4 pt-8 mb-32 border border-gray-100 shadow-lg rounded-2xl lg:px-12 ">
                {
                    categories.map(category =>

                        <div className="pb-4 mb-6  border-b border-gray-300 faqs" key={category.faqCategoryId}>
                            <span className="flex  cursor-pointer title-3" onClick={() => setSelected({ category: selected.category == category.faqCategoryId ? 0 : category.faqCategoryId, faq: null })}><div className="flex-grow">{category.name}</div><div className="flex items-center text-xl text-gray-400"><i className={`fas ${selected.category == category.faqCategoryId ? 'fa-chevron-up text-blue-500 pb-4' : 'fa-chevron-right'}`}></i></div></span>
                            <div className="">
                                {
                                    selected.category == category.faqCategoryId && faqs.filter(faq => faq.categoryId.faqCategoryId == selected.category).map(faq =>
                                        <div className="pt-4 mt-4 border-t border-gray-200" key={faq.id}>
                                            <div className="flex text-base font-medium text-gray-500 cursor-pointer lg:text-xl " onClick={() => setSelected({ ...selected, faq: selected.faq == faq.id ? 0 : faq.id })}><div className="flex-grow">{faq.question}</div><div className="flex items-center text-gray-400"><i className={`fas ${selected.faq == faq.id ? 'fa-chevron-up' : 'fa-chevron-right'}`}></i></div></div>
                                            {
                                                selected.faq == faq.id && <div className="mt-4 text-gray-500 whitespace-pre-line lg:mx-8" >
                                                    <ReactMarkdown>{faq.answer}</ReactMarkdown>
                                                </div>
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </Container>
    )
}