import Document, { Html, Head, Main, NextScript } from 'next/document'
class WebDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>

                    {/* <script dangerouslySetInnerHTML={{
                        __html:
                            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-MPZ7RRW');`}}>
                    </script> */}
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></link>

                </Head>
                <body>
                    {/* <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MPZ7RRW"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript> */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default WebDocument