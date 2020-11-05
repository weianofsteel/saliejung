import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    
    render(){
        return(
            <Html>
                <Head>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" 
                        rel="stylesheet">
                    </link>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Anton&display=swap" 
                        rel="stylesheet">
                    </link>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" 
                        rel="stylesheet">
                    </link>
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