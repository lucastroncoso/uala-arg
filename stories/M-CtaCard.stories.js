import MCtaCard from '../components/home/M-CtaCard/MCtaCard.js';

export default {
  component: MCtaCard,
  title: 'Cards/Card3ColConLink',
};

const Template = (args) => <MCtaCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: true,
  content: {
    icon: 'iconExample',
    title: 'Titular',
    copy: 'Bajada en texto. Puede contener hasta 5 línas de texto. Bajada en texto. Puede contener hasta 5 línas de texto.',
    ctaCopy: 'Cta con enlace',
    url: '/transferencias',
  },
};
