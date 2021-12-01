import Container from "./container";



export default function VideoTitle(props) {
    return (
        <Container className="md:my-24 my-12">
            <h2 className="title-3 text-center mb-12">{props.title}</h2>
            <div className="hidden md:block">{props.imgDesktop}</div>
            <div className=" md:hidden">{props.imgMobile}</div>
        </Container>
    );
}
