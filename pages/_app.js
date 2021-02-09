import '../css/main.css'
import Head from 'next/head'
import og from '../public/open-graph.jpg'

const App = ({ Component, pageProps }) => {
    
    return (
        <React.Fragment>

            <Head>
                <title>Salie Chien | UX Designer</title>

                <meta property="og:title" content={og} key="ogtitle" />

            </Head>
    
            <Component {...pageProps} />
        
        </React.Fragment>
    )
}

export default App