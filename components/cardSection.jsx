import Container from "./container";



export default function CardSection(props) {
    return (
        <Container className={props.className + " py-12"}>
            <div className={`w-full grid lg:grid-cols-3 gap-8 gap-y-14 ${ !!props.noStretch ? 'items-start' : ''}`}>
                {props.children}
            </div>
        </Container>
    );
}
