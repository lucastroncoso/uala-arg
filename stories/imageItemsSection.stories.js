import ImageItemsSection from '../components/imageItemsSection';
import CardItem from '../components/cardItem';
import { fetchContent } from '../utils/contentful';


export async function getStaticProps() {
  const response = await fetchContent(`
  {hero(id:"5heqceHl93l4CyAQBi4soT"){
      title,
        image{
          url
        },
        subtitle,
        sectionText
    },
navbar(id:"54t2hNBpg49j62QEf8zNa7"){
      content
    },
    footer(id:"5Sc89LH5uef92QnulVQTBc"){
      content
    },
      moduloCollection(where:{
      section:{name:"HomeUalabisMx"}}, 
      order:sys_publishedAt_ASC){
      items{
        title,
        subtitle,
        image{
          url,
          height,
          width
        },
        image2{
          url,
          height,
          width
        },
        cta
      }
      },
      cardCollection(where:{
      section:{name:"Nosotr@sCorp"}}, 
      order:sys_publishedAt_ASC){
        items{
        title,
        subtitle,
        image{
          url,
          height,
          width
        }
      }
      }
  }
  `);

  return {
    props: { response },
    revalidate: 10
  }
}

export default {
    component: ImageItemsSection,
    title: 'ImageItemSection/ImageItemsSection',
};

const Template = args => <ImageItemsSection {...args} />

export const Default = Template.bind({});
Default.args = {
    bg:"",
    title:"La tarjeta",
    subtitle:"Una tarjeta prepaga Mastercard internacional diseñada para tener la mejor experiencia de compra.",
    img:(<img src="/assets/images/tarjeta/compras-tarjeta.jpg" alt="my image" />),
    items:[
        <CardItem text="Al registrarte contarás con una tarjeta digital para hacer compras online. "
            img="/assets/images/tarjeta/Icono compras.png" />,
        <CardItem text="Con chip, para que tu información esté más protegida que nunca."
            img="/assets/images/tarjeta/Icono chip.png" />,
        <CardItem text="Con tecnología contactless para que tus compras sean mucho más seguras."
            img="/assets/images/tarjeta/Icono contactless.png" />]
}


export const Argentina = Template.bind({});
Argentina.args = {
    bg:"",
    title:"La tarjeta",
    subtitle:"Una tarjeta prepaga Mastercard internacional diseñada para tener la mejor experiencia de compra.",
    img:(<img src="/assets/images/tarjeta/compras-tarjeta.jpg" alt="my image" />),
    items:[
        <CardItem text="Al registrarte contarás con una tarjeta digital para hacer compras online. "
            img="/assets/images/tarjeta/Icono compras.png" />,
        <CardItem text="Con chip, para que tu información esté más protegida que nunca."
            img="/assets/images/tarjeta/Icono chip.png" />,
        <CardItem text="Con tecnología contactless para que tus compras sean mucho más seguras."
            img="/assets/images/tarjeta/Icono contactless.png" />]
}

export const MexicoUalabis = Template.bind({});
MexicoUalabis.args = {
    bg:"",
    title:"La tarjeta",
    subtitle:"Una tarjeta prepaga Mastercard internacional diseñada para tener la mejor experiencia de compra.",
    img:(<img src="/assets/images/tarjeta/compras-tarjeta.jpg" alt="my image" />),
    items:[
        <CardItem text="Al registrarte contarás con una tarjeta digital para hacer compras online. "
            img="/assets/images/tarjeta/Icono compras.png" />,
        <CardItem text="Con chip, para que tu información esté más protegida que nunca."
            img="/assets/images/tarjeta/Icono chip.png" />,
        <CardItem text="Con tecnología contactless para que tus compras sean mucho más seguras."
            img="/assets/images/tarjeta/Icono contactless.png" />]
}
