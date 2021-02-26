import React from 'react';
import styles from '../../css/Work.module.css';
import { Header } from '../../component/Public/Header.js';
import { Footer } from '../../component/Public/Footer.js';
import { Showcase } from '../../component/Work/Showcase.js';  
import { Drawer } from '../../component/Public/Drawer.js';
import { PageLoader } from '../../component/Public/PageLoader.js';
import { NextSeo } from 'next-seo';

const Work = () => {

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
                title="Portfolio | Salie Chien — Product Designer"
                description="Salie Chien is a product designer currently working at Agoda based in Bangkok. She has created digital products since 2016, striving to make people enjoy the digital world through memorable, useful, and friendly experiences. She worked on Agoda Flights for the next level and curating a better experience for Product Marketing."
                openGraph={{
                    url: 'https://saliejung.com/Work',
                    title: 'Portfolio | Salie Chien — Product Designer', 
                    description: 'Salie Chien is a product designer currently working at Agoda based in Bangkok. She has created digital products since 2016, striving to make people enjoy the digital world through memorable, useful, and friendly experiences. She worked on Agoda Flights for the next level and curating a better experience for Product Marketing.',
                    images: [
                      {
                        url: 'https://raw.githubusercontent.com/weianofsteel/saliejung/master/public/open-graph.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Salie Chien — Product Designer',
                      }
                    ],
                    site_name: 'Salie Chien — Product Designer',
                  }}
            />

            {drawer == false ?
                <React.Fragment>
                    
                    <PageLoader/>
                    
                    <div>
                        <Header
                            handleDrawerOpen={handleDrawerOpen}
                        />
                    </div>

                    <div className={styles.main}>
                        
                        <h1 className={styles.title}>
                            Work
                        </h1>
                        
                        <div style={{marginTop:"6%"}}>
                            <Showcase/>
                        </div>

                    </div>

                    <div className={styles.footer}>
                        <Footer/>
                    </div>
                </React.Fragment>
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

export default Work;