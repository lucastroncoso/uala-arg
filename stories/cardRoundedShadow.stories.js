import CardRoundedShadow from '../components/cardRoundedShadow';

export default {
  component: CardRoundedShadow,
  title: 'CardRoundedShadow',
};

const Template = (args) => <CardRoundedShadow {...args} />;

export const Default = Template.bind({});
Default.args = {
  shadowColor: 'lightblue',
  roundXl: true,
  className: 'p-6',
  showImage: false,
  children: (
    <div>
      <p>Card muy redondeada con sombra celeste</p>
    </div>
  ),
};

export const SmallBlue = Template.bind({});
SmallBlue.args = {
  shadowColor: 'blue',
  roundXl: false,
  className: 'p-4',
  showImage: false,
  children: (
    <div>
      <p>Card redondeada con sombra azul</p>
    </div>
  ),
};

export const ThreeRow = Template.bind({});
ThreeRow.args = {
  hasTitle: true,
  hasText: true,
  shadowColor: 'lightblue',
  roundXl: true,
  className: 'p-4',
};

export const ThreeRowLink = Template.bind({});
ThreeRowLink.args = {
  hasTitle: true,
  hasText: true,
  hasLink: true,
  shadowColor: 'blue',
  roundXl: true,
  className: 'p-4',
};

export const OneRow = Template.bind({});
OneRow.args = {
  titleText: 'Esto es un titular de 1 línea',
  flexColumns: false,
  hasTitle: true,
  hasText: false,
  hasLink: false,
  shadowColor: 'lightblue',
  roundXl: true,
  className: 'p-6',
};

export const OneRowTwoLines = Template.bind({});
OneRowTwoLines.args = {
  titleText: 'Esto es un titular que ocupa 2 líneas de texto',
  flexColumns: false,
  hasTitle: true,
  hasText: false,
  hasLink: false,
  shadowColor: 'lightblue',
  roundXl: true,
  className: 'p-6',
};
