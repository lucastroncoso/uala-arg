import ImageItemsSection from '../components/imageItemsSection';
import CardItem from '../components/cardItem';

export default {
    component: ImageItemsSection,
    title: 'ImageItemsSection',
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
