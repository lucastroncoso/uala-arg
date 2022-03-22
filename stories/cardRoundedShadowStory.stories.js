import CardRoundedShadowStory from '../components/cardRoundedShadowStory';

export default {
  component: CardRoundedShadowStory,
  title: 'Cards/CardRoundedShadowStory',
};

const Template = (args) => <CardRoundedShadowStory {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '80',
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
  width: '80',
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

export const OneRow = Template.bind({});
OneRow.args = {
  width: '1/2',
  showImage: true,
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
  width: '1/2',
  showImage: true,
  titleText: 'Esto es un titular que ocupa 2 líneas de texto',
  flexColumns: false,
  hasTitle: true,
  hasText: false,
  hasLink: false,
  shadowColor: 'lightblue',
  roundXl: true,
  className: 'p-6',
};
