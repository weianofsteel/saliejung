import React from 'react';
import styles from '../../css/Writing.module.css';
import { Header } from '../../component/Public/Header.js'; 
import { Footer } from '../../component/Public/Footer.js';
import { Article } from '../../component/Writing/Article.js';
import { Drawer } from '../../component/Public/Drawer.js';
import { PageLoader } from '../../component/Public/PageLoader.js';
import { NextSeo } from 'next-seo';

const Writings = () => {
    
    const [drawer, setDrawer] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawer(true);
    }

    const handleDrawerClose = () => {
        setDrawer(false);
    }

    return(
        <React.Fragment>
            
            <NextSeo
                title="Writings | Salie Chien — Product Designer"
                description="Before becoming a designer, I was a social media editor that have created hundreds of articles. Now I still enjoy writing about my experience as an expat, designer, and observer. Follow me on Medium to check more updates."
                openGraph={{
                    url: 'https://saliejung.com/Writings',
                    title: 'Writings | Salie Chien — Product Designer',
                    description: 'Before becoming a designer, I was a social media editor that have created hundreds of articles. Now I still enjoy writing about my experience as an expat, designer, and observer. Follow me on Medium to check more updates.',
                    images: [
                      {
                        url: '/open-graph.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Salie Chien — Product Designer',
                      }
                    ],
                    site_name: 'Salie Chien — Product Designer',
                  }}
            />
            
            {drawer == false ?
        
                <div style={{backgroundColor:"#F5F5F5", margin:0}}>

                    <PageLoader/>
                    
                    <div>
                        <Header
                            handleDrawerOpen={handleDrawerOpen}
                        /> 
                    </div>

                    <div className={styles.main} style={{overflow:'hidden'}}>
                            
                        <span className={styles.title}>
                            Writings
                        </span>

                        <Article/>

                    </div>
  
                    <div className={styles.footer}>
                        <Footer/>
                    </div>

                </div>
            :''}

            {drawer == true ?
                <React.Fragment>
                    <div style={{backgroundColor:'#1f1f1f'}}>
                    <Drawer
                        handleDrawerClose={handleDrawerClose} 
                    />
                    </div>
                </React.Fragment>
            :''}

        </React.Fragment>
    )
}

export default Writings;
