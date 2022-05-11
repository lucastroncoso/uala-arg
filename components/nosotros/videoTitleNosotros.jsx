import Container from './../container';

export default function VideoTitleNosotros(props) {
  return (
    <Container className={props.className + ' ' + 'md:my-24 py-12'}>
      <div className="max-w-lg mx-auto">
        <h2 className="title-2 text-center mb-4">{props.title}</h2>
        <h3 className="subtitle-3 text-center mb-12">{props.subtitle}</h3>
      </div>

      <a data-animation="video-button" className="flex relative" href={props.href} target="_blank">
        <div className="flex bg-blue-150 rounded-3xl shadow-lightblue">{props.imgDesktop}</div>
        <img
          style={{}}
          src="/assets/images/icono-play.png"
          alt=""
          className="absolute w-20 md:w-28 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-2/4"
        />
      </a>
    </Container>
  );
}
