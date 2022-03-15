import MCtaCard from '../components/home/M-CtaCard/MCtaCard.js';

export default {
  component: MCtaCard,
  title: 'MCtaCard',
};

const Template = (args) => <MCtaCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: '',
  key: '1',
  customClass: { marginLeft: '1px' },
};
