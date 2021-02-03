import '../css/main.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
    return (
        <React.Fragment>

            <Head>
                <title>Salie Chien | UX Designer</title>
            </Head>
    
            <Component {...pageProps} />
        
        </React.Fragment>
    )
}

export default App