import React from 'react';
import styles from '../../css/About.module.css';
import Grid from '@material-ui/core/Grid';
import { Header } from '../../component/Public/Header.js'; 
import { Footer } from '../../component/Public/Footer.js';
import { Aboutme } from '../../component/About/Aboutme.js';
import { Drawer } from '../../component/Public/Drawer.js';
import { PageLoader } from '../../component/Public/PageLoader.js';
import { NextSeo } from 'next-seo';
import Head from 'next/head'

const About = () => {

    const [drawer, setDrawer] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawer(true);
    }

    const handleDrawerClose = () => {
        setDrawer(false);
    }
    
    return(
        <React.Fragment>

            {/* <Head>
                <meta property="og:url" content={'https://saliejung.com/About'} key="ogurl" />
                <meta property="og:image" content={'https://github.com/weianofsteel/saliejung/blob/master/public/open-graph.jpg'} key="ogimage" />
                <meta property="og:site_name" content={'Salie Chien — Product Designer'} key="ogsitename" />
                <meta property="og:title" content={"About2 | Salie Chien — Product Designer"} key="ogtitle" />
                <meta property="og:description" content={"Salie Chien is a product designer currently working at Agoda based in Bangkok. She has created digital products since 2016, striving to make people enjoy the digital world through memorable, useful, and friendly experiences. She worked on Agoda Flights for the next level and curating a better experience for Product Marketing."} key="ogdesc" />
            </Head> */}
            
            <NextSeo
                title="About | Salie Chien — Product Designer"
                description="Salie Chien is a product designer currently working at Agoda based in Bangkok. She has created digital products since 2016, striving to make people enjoy the digital world through memorable, useful, and friendly experiences. She worked on Agoda Flights for the next level and curating a better experience for Product Marketing."
                openGraph={{
                    type: 'website',
                    url: 'https://saliejung.com/About',
                    title: 'About | Salie Chien — Product Designer',
                    description: 'Salie Chien is a product designer currently working at Agoda based in Bangkok. She has created digital products since 2016, striving to make people enjoy the digital world through memorable, useful, and friendly experiences. She worked on Agoda Flights for the next level and curating a better experience for Product Marketing.',
                    images: [
                      {
                        url: 'https://github.com/weianofsteel/saliejung/blob/master/public/open-graph.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Salie Chien — Product Designer',
                      }
                    ],
                    site_name: 'Salie Chien — Product Designer',
                  }}
            />
            
            {drawer == false ?
                <div style={{backgroundColor:'#F5F5F5'}}>
                    
                    <PageLoader/>

                    <div>
                        <Header
                            handleDrawerOpen={handleDrawerOpen}
                        />
                    </div>

                    <div className={styles.main}>

                        <Grid container spacing={1} style={{marginTop:"3%"}}>
                            
                            <Grid item xs={1} sm={2} md={3}></Grid>
                            
                            <Grid item xs={10} sm={8} md={6}>
                                <span className={styles.title}>Hello World.</span>
                                <Aboutme/>
                            </Grid>
                            
                            <Grid item xs={1} sm={2} md={3}></Grid>

                        </Grid>

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

export default About;