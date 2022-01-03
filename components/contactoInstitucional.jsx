import Container from "./container";

export default function ContactoInstitucional(props) {
    return (
      <Container className='bg-blue-150 py-16 lg:py-28 mt-32'>
        <h3 className="title-2">Contacto institucional</h3>
        <p className="text">Si sos periodista y querés contactarnos <a className="link" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdKURPSgRSYF2DueqsrIOhC73qgJVQNY_UAdM3oUEHUDX1LSA/viewform">dejanos tus datos acá</a> y nos comunicaremos con vos.</p>
        <p className="text">Si querés invitar a una persona de Ualá a dar una conferencia/charla, <a target="_blank" href="https://docs.google.com/forms/d/1J4d8XK3gZwHjcml5kjJvuMHAqKKpTQFH21aN1xFii_w/edit" className="link">dejanos los detalles acá</a>.</p>
      </Container>
    );
  }
  