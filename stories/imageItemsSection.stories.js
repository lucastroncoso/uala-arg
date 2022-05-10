import ImageItemsSection from '../components/imageItemsSection';
import CardItem from '../components/cardItem';
import Button from "../components/StoryBookComps/Button-story";



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
            img="/assets/images/tarjeta/Icono chip.png" />
       ]
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
            img="/assets/images/tarjeta/Icono chip.png" />]
}

export const ArgentinaReversed = Template.bind({});
ArgentinaReversed.args = {
  reverse: true,
    bg:"",
    title:"La tarjeta",
    subtitle:"Una tarjeta prepaga Mastercard internacional diseñada para tener la mejor experiencia de compra.",
    img:(<img src="/assets/images/tarjeta/compras-tarjeta.jpg" alt="my image" />),
    items:[
        <CardItem text="Al registrarte contarás con una tarjeta digital para hacer compras online. "
            img="/assets/images/tarjeta/Icono compras.png" />,
        <CardItem text="Con chip, para que tu información esté más protegida que nunca."
            img="/assets/images/tarjeta/Icono chip.png" />]
}

export const MexicoUalabis = Template.bind({});
MexicoUalabis.args = {
   bg:"mb-20",
    title:"Ofrece meses sin intereses a tus clientes",
    subtitle:"Pueden ser de 3, 6, 9, 12 y 18 meses sin intereses.__¡Acepta todas las tarjetas!__",
    img:(<img width={1389} height={1134} src="https://images.ctfassets.net/t5yal6u1wvnw/5c1p2zG4dggwCqY6jI2qH0/d022996ec5dc9a86bcc587141ab7fadb/Foto_MSI-Ajustada.webp" alt="my image" />),
    items: [
            <div className="w-6/12 mt-1">
                    <img
                src="https://images.ctfassets.net/t5yal6u1wvnw/38w8e5z64LcnzeCdpyWLuL/6e8f5cf76f3d2795ec1e6a64ca7e1125/Logos.png"
                width={855}
                height={180} />
        
            </div>
            ,
            <div className="mt-3 mb-8 md:mb-0 w-48">
              <Button
                href="https://onboarding.prod.adquirencia.mx.ua.la/?utm_source=web&utm_medium=ualabismx"
                text="Empieza ahora"
              /> 
            </div>
          ]
}

    
       
