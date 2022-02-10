import CardRoundedShadow from '../components/cardRoundedShadow';

export default {
    component: CardRoundedShadow,
    title: 'CardRoundedShadow',
};

const Template = args => <CardRoundedShadow {...args} />

export const Default = Template.bind({});
Default.args = {
    children: <p>test</p>
}