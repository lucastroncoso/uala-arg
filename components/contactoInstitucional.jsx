import Container from "./container";

export default function ContactoInstitucional(props) {
    return (
      <Container className='bg-blue-150 py-16 lg:py-28'>
        <h3 className="title-2">Contacto institucional</h3>
        <p className="text">Si sos periodista y querés contactarnos <a className="link" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdKURPSgRSYF2DueqsrIOhC73qgJVQNY_UAdM3oUEHUDX1LSA/viewform">dejanos tus datos acá</a> y nos comunicaremos con vos.</p>
        <p className="text">Si querés invitar a una persona de Ualá a dar una conferencia/charla, <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdVlptYpVITSP0XYCElMOGyZQM0J_bYomdKVBiS-QQec8HfTQ/viewform" className="link">dejanos los detalles acá</a>.</p>
      </Container>
    );
  }
  