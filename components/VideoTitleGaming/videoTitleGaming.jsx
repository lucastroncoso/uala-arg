import Container from "../container";



export default function VideoTitle(props) {
    return (
        <Container className="">
            <a className="flex relative" href={props.href} target="_blank">
                <div className="hidden md:block">{props.imgDesktop}</div>
                <div className=" md:hidden">{props.imgMobile}</div>
                <img style={{}} src="/assets/images/icono-play-gris.png" alt="" className="absolute w-10 md:w-14 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-2/4" />
            </a>
        </Container>
    );
}
