import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    
    render(){
        return(
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;