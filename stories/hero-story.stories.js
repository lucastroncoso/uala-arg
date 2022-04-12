import Hero from '../components/StoryBookComps/hero-story';

export default {
  component: Hero,
  title: 'Heros/Hero-story',
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
    callToActionText: null, callToActionLink: "/",
  secondaryLinkText: null,
  secondaryLinkUrl: "/",
  titleColor: "blue-250",
  containerStyles: '',
  section: 'Sección',
  title: 'Título',
  subtitle: 'Subtítulo de la página. Subtítulo de la página.',
  img: <img src="/assets/images/costos/hero-costos.jpg" alt="my image" />,
  reversed: false,
};

export const HeroArgentina = Template.bind({});
HeroArgentina.args = {
  containerStyles: '',
  section: 'Costos',
  title: 'Disfrutá sin costos ocultos',
  subtitle: 'No tenemos letra chica ni costos ocultos.',
  img: <img src="/assets/images/costos/hero-costos.jpg" alt="my image" />,
  reversed: false,
};

export const HeroArgentinaReversed = Template.bind({});
HeroArgentinaReversed.args = {
  containerStyles: '',
  section: 'Costos',
  title: 'Disfrutá sin costos ocultos',
  subtitle: 'No tenemos letra chica ni costos ocultos.',
  img: <img src="/assets/images/costos/hero-costos.jpg" alt="my image" />,
  reversed: true,
};


export const HeroMex = Template.bind({});
HeroMex.args = {
  containerStyles: '',
  section: null,
  title: 'Disfrutá sin costos ocultos',
  subtitle: 'No tenemos letra chica ni costos ocultos.',
  img: <img src="/assets/images/costos/hero-costos.jpg" alt="my image" />,
  reversed: false,
};

export const HeroMexUalabis = Template.bind({});
HeroMexUalabis.args = {
    callToActionText: "Boton", 
  secondaryLinkText: false,
  titleColor: "gray-250",
  containerStyles: '',
  section: null,
  title: 'Disfrutá sin costos ocultos',
  subtitle: 'No tenemos letra chica ni costos ocultos.',
  img: <img src="/assets/images/costos/hero-costos.jpg" alt="my image" />,
  reversed: false,
};

export const HeroMexUalabisSecondaryLink = Template.bind({});
HeroMexUalabisSecondaryLink.args = {
      callToActionText: "Boton", 
  secondaryLinkText: "Link",
  titleColor: "gray-250",
  containerStyles: '',
  section: null,
  title: 'Disfrutá sin costos ocultos',
  subtitle: 'No tenemos letra chica ni costos ocultos.',
  img: <img src="/assets/images/costos/hero-costos.jpg" alt="my image" />,
  reversed: false,
};

