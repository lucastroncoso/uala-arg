import CardRoundedShadow from '../components/cardRoundedShadow';

export default {
    component: CardRoundedShadow,
    title: 'Cards/CardRoundedShadow',
};

const Template = args => <CardRoundedShadow {...args} />

export const Default = Template.bind({});
Default.args = {
    shadowColor: 'lightblue',
    roundXl: true,
    className: 'p-6',
    children: (
        <div>
            <p>Card muy redondeada con sombra celeste</p>
        </div>
    )
}

export const SmallBlue = Template.bind({});
SmallBlue.args = {
    shadowColor: 'blue',
    roundXl: false,
    className: 'p-4',
    children: (
        <div>
            <p>Card redondeada con sombra azul</p>
        </div>
    )
}