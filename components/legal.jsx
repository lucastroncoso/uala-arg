import Container from "./container";



export default function Legal(props) {
    return (
        <Container className="mb-24">
            <div className="text-sm">  {props.main}
            </div>
            <div className="subtitle-2 my-4">{props.secondary}</div>
            <a target="_blank" href=" https://uala.com.ar/informacion-al-usuario-financiero" className="link">Información al usuario financiero</a>
            <a target="_blank" href="http://www.usuariosfinancieros.gob.ar/"><img className="md:w-3/12 my-4" src="/assets/images/image 23.png" alt="" /></a>
        </Container>
    );
}
