export default function OutlinedButton(props) {
    return (
        <a href={props.href} className="rounded-full mt-8 inline-block border border-blue-250 text-blue-250 py-3 px-12 text-center no-underline">
            {props.text}
        </a>
    )
}