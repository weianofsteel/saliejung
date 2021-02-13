import React from 'react';
import { Header } from '../../../component/Public/Header.js';
import { Footer } from '../../../component/Public/Footer.js';
import { Drawer } from '../../../component/Public/Drawer.js';
import { BottomNavbar } from '../../../component/Public/BottomNavbar.js';
import { Scrollup } from '../../../component/Public/Scrollup.js';
import styles from '../../../css/Work.module.css';
import Grid from '@material-ui/core/Grid';
import { Moxa01 } from '../../../component/Work/Moxa/Moxa01';
import { Moxa02 } from '../../../component/Work/Moxa/Moxa02';
import { Moxa03 } from '../../../component/Work/Moxa/Moxa03';
import { PageLoader } from '../../../component/Public/PageLoader.js';
import { NextSeo } from 'next-seo';

const Page = () => {

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
                title="MOXA Technologies | Salie Chien — Product Designer"
                description="Founded in Taiwan for more than 30 years, Moxa is a leading provider of industrial networking to help customers enable connectivity for the IIoT. The goal for this project is to revamp the original website, integrating all the information, products, and PR content. We aim to give the brand a new digital image with consistent language and improve the experience to fulfill customers' needs to increase the conversion rate."
                openGraph={{
                    url: 'https://saliejung.com/Work/Moxa',
                    title: 'MOXA Technologies | Salie Chien — Product Designer',
                    description: "Founded in Taiwan for more than 30 years, Moxa is a leading provider of industrial networking to help customers enable connectivity for the IIoT. The goal for this project is to revamp the original website, integrating all the information, products, and PR content. We aim to give the brand a new digital image with consistent language and improve the experience to fulfill customers' needs to increase the conversion rate.",
                    images: [
                      {
                        url: '/moxa/moxa-header.png',
                        width: 800,
                        height: 600,
                        alt: 'MOXA Technologies',
                      }
                    ],
                    site_name: 'Salie Chien — Product Designer',
                  }}
            />
            
            {drawer == false ?
                <React.Fragment>
                    
                    <PageLoader/>
                    
                    <div className={styles.header}>
                        <Header
                            handleDrawerOpen={handleDrawerOpen}
                        />
                    </div>

                    <Grid container style={{top:'90%',position:'fixed'}}>
                        <Grid item xs={8} sm={9} md={9} lg={10} xl={10}></Grid>
                        <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
                            <Scrollup/>
                        </Grid>
                    </Grid>

                    <div>
                        <Moxa01/>
                    </div>

                    <div>
                        <Moxa02/>
                    </div>

                    <div>
                        <Moxa03/>
                    </div>

                    <div style={{marginTop:'6%'}}>
                        <BottomNavbar/>    
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

export default Page;