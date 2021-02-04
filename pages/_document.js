import React from 'react';
import { ServerStyleSheets } from '@material-ui/styles';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    
    render(){
        return(
            <Html>
                
                <Head>
                    
                    <link rel="shortcut icon" href="/titleIcon.png"/>

                    {/* Google analytics */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-80550814-1" >
                    </script>
                    <script dangerouslySetInnerHTML={
                        { __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
        
                            gtag('config', 'UA-80550814-1');
                        `}
                    }>
                    </script>
                    {/* Google analytics */}

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
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" 
                        rel="stylesheet">
                    </link>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Rosario&display=swap" 
                        rel="stylesheet">
                    </link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
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

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
  
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
  
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });
  
    const initialProps = await Document.getInitialProps(ctx);
  
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  };