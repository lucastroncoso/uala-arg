import Link from "next/link";

export default function Button({href, text, outlined, customClasses, modal, onClick}) {
    const regEx = /^http/;

    const filledButtonClasses = "cursor-pointer text-white text-xl font-medium py-3 px-6 rounded-full bg-blue-250";
    const outlinedButtonClasses = "cursor-pointer rounded-full inline-block border border-blue-250 text-blue-250 py-3 px-12 text-center no-underline";

    let classes = filledButtonClasses;
    if ( !!outlined ) {
        classes = outlinedButtonClasses;
    }
    if ( !!customClasses ) {
        classes = customClasses;
    }

    if( !!modal ) {
        return (
            <div onClick={onClick} className={classes} >
                {text}
            </div>
        );
    }

    return (
    regEx.test(href) 
        ? <a href={href ? href : ""} className={classes} target="_blank" rel="noreferrer">{text}</a>
        : <Link href={href ? href : ""}><span className={classes}>{text}</span></Link> 
    )
}