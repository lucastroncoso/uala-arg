import Slider from "react-slick";
import CardRoundedShadow from "../cardRoundedShadow";

export const BenefitsSlider = ({settings}) => {
    const benefits = [
        { title: "Desarrollo profesional", list: ["Descuentos en Universidades y Code Schools", "Convenio con instituto de Inglés", "Aprendizaje ilimitado en nuestra plataforma interna"] },
        { title: "Compensaciones y obra social", list: ["Bono por performance", "Prepaga médica OSDE", "Préstamos con tasa diferencial ", "Ajustes por inflación", "Premio por referidos"] },
        { title: "Flexibilidad y descanso", list: ["Home office", "Semana extra de vacaciones", "Semana libre de fin de año", "Día de cumpleaños libre.", "Horario flexible", "Licencia de estudio extendida"] },
        { title: "Bienestar", list: ["Descuento en gimnasio", "Pago de servicio de internet.", "Pago de Netflix y Spotify.", "Reintegro por almuerzo", "Programa de Asistencia al empleado"] },
        { title: "Maternidad y paternidad", list: ["Extensión de licencia de maternidad y paternidad.", "Soft Landing", "Kit escolar", "Reintegro por guardería"] },
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