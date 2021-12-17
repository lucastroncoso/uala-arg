export default function CardRoundedShadow(props) {

    return (
        <div className={`flex flex-col m-4 border border-gray-100 shadow-lightblue ${ props.roundXl ? 'rounded-3xl' : 'rounded-xl' } ${props.className} `}>
            { props.children }
        </div>
    )
}