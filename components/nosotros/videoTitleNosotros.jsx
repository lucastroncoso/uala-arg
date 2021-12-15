import Container from "./../container";



export default function VideoTitleNosotros(props) {
    return (
        <Container className={props.className + " " + "md:my-24 py-12"}>
            <div className="max-w-lg mx-auto">
                <h2 className="title-2 text-center mb-4">{props.title}</h2>
                <h3 className="subtitle-3 text-center mb-12">{props.subtitle}</h3>
            </div>

            <a className="flex " href={props.href} target="_blank">
                <div className="flex bg-blue-150 rounded-3xl shadow-lightblue">{props.imgDesktop}</div>
            </a>
        </Container>
    );
}
