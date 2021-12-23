import Document, { Html, Head, Main, NextScript } from 'next/document'
class WebDocument extends Document {
    render() {
        return (
            <Html lang="en-US">

                <Head>
                    <meta name="description" content="El Lado Bueno de tu Plata" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></link>


                </Head>
                <body>
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MPZ7RRW"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default WebDocument