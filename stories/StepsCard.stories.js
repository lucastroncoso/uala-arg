import StepsCard from '../components/home/StepsSection/StepsCard';

export default {
    component: StepsCard,
    title: 'StepsCard',
};

const Template = args => <ul><StepsCard {...args} /></ul>

export const Default = Template.bind({});
Default.args = {
    content: {
        copy: "Descargá la app desde Play Store o App Store en tu celular.",
        icon: "pasos-envio-1",
        index: 0
    }
};

export const Step1 = Template.bind({});
Step1.args = {
    content: {
        copy: "Descargá la app desde Play Store o App Store en tu celular.",
        icon: "pasos-envio-1",
        index: 0
    }
}

export const Step2 = Template.bind({});
Step2.args = {
    content: {
        copy: "Completá el registro con tus datos desde la app y obtené tu tarjeta virtual.",
        icon: "pasos-envio-2",
        index: 1
    }
}

export const Step3 = Template.bind({});
Step3.args = {
    content: {
        copy: "Recibí tu tarjeta Ualá dentro de los 15 días hábiles, gratis y en todo el país.",
        icon: "pasos-envio-3",
        index: 2
    }
}

export const Step4 = Template.bind({});
Step4.args = {
    content: {
        copy: "¡Activá tu tarjeta desde la app y cargá saldo para empezar a usarla!",
        icon: "pasos-envio-4",
        index: 3
    }
}