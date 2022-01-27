import Slider from "react-slick";
import CardRoundedShadow from "../cardRoundedShadow";

export const BenefitsSlider = ({settings}) => {
    const benefits = [
        { title: "Desarrollo profesional", list: ["Subsidio para clases de inglés"] },
        { title: "Compensaciones y obra social", list: ["Prestaciones de ley.", "Cobertura médica.", "Premio por referidos.", "Política de ajuste por inflación.", "Préstamos con tasa diferencial."] },
        { title: "Flexibilidad y descanso", list: ["Política de home office.", "15 días de vacaciones.", "Horario Flexible.", "Día de cumpleaños libre."] },
        { title: "Bienestar", list: ["Subsidio para gimnasio.", "Pago de servicio de internet.", "Pago de Netflix y Spotify."] },
        { title: "Maternidad y paternidad", list: ["Extensión de licencia de maternidad y paternidad.", "Apoyo a escolaridad para padres con niños."] },
    ];
    
    return (
        <Slider {...settings}>
            {
                benefits.map((benefit, index) => (
                        <CardRoundedShadow key={ benefit.title } className={`m-4 ${ index === 0 ? 'ml-16' : '' } `}>
                            <div className="bg-white h-72 md:h-80 p-6 rounded-2xl" >
                                <div className="text-gray-250 font-bold text-lg">{benefit.title}</div>
                                <div className="flex flex-col">{
                                    benefit.list.map(option => (
                                    <div key={option} className="mt-4 flex flex-row text-sm">
                                        <div><i className="fas fa-chevron-right mr-4 text-blue-250"></i></div>
                                        <div className="text-gray-250 ">{option}</div>
                                        
                                    </div>))
                                }</div>
                            </div>
                        </CardRoundedShadow>
                    ))
            }
        </Slider>
    );
}