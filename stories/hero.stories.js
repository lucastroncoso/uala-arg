import Hero from '../components/hero';

export default {
    component: Hero,
    title: 'Hero',
};

const Template = args => <Hero {...args} />

export const Default = Template.bind({});
Default.args = {
    containerStyles: '',
    section: 'Sección',
    title: 'Título',
    subtitle: 'Subtítulo de la página. Subtítulo de la página.',
    img: (<img src="/assets/images/costos/hero-costos.jpg" alt="my image" />),
    reversed: false
}

export const Costos = Template.bind({});
Costos.args = {
    containerStyles: '',
    section: 'Costos',
    title: 'Disfrutá sin costos ocultos',
    subtitle: 'No tenemos letra chica ni costos ocultos.',
    img: (<img src="/assets/images/costos/hero-costos.jpg" alt="my image" />),
    reversed: false
}

export const Reversed = Template.bind({});
Reversed.args = {
    containerStyles: '',
    section: 'Costos',
    title: 'Disfrutá sin costos ocultos',
    subtitle: 'No tenemos letra chica ni costos ocultos.',
    img: (<img src="/assets/images/costos/hero-costos.jpg" alt="my image" />),
    reversed: true
}