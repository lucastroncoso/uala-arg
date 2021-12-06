import Container from "./container";



export default function VideoTitle(props) {
    return (
        <Container className="md:my-24 my-12">
            <h2 className="title-2 text-center mb-12">{props.title}</h2>

            <a className="flex relative" href="https://www.youtube.com/watch?v=6Bv0IdBFdDc" target="_blank">
                <div className="hidden md:block">{props.imgDesktop}</div>
                <div className=" md:hidden">{props.imgMobile}</div>
                <img style={{}} src="/assets/images/icono-play.png" alt="" className="absolute w-20 md:w-28 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-2/4" />
            </a>
        </Container>
    );
}
