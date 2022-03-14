import StepsSection from '../components/home/StepsSection/StepsSection';

export default {
    component: StepsSection,
    title: 'Cards/StepsSection',
};

const Template = args => <div className="w-full"><StepsSection {...args} /></div>

export const Default = Template.bind({});
Default.args = {
    content: {
        title: "Cómo ser parte de Ualá",
        stepsItems: [
            {
                copy: "Descargá la app desde Play Store o App Store en tu celular.",
                icon: "pasos-envio-1",
                index: 0
            },
            {
                copy: "Completá el registro con tus datos desde la app y obtené tu tarjeta virtual.",
                icon: "pasos-envio-2",
                index: 1
            },
            {
                copy: "Recibí tu tarjeta Ualá dentro de los 15 días hábiles, gratis y en todo el país.",
                icon: "pasos-envio-3",
                index: 2
            },
            {
                copy: "¡Activá tu tarjeta desde la app y cargá saldo para empezar a usarla!",
                icon: "pasos-envio-4",
                index: 3
            }
        ]
    }
};
