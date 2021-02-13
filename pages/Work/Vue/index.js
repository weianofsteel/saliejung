import React from 'react';
import { Header } from '../../../component/Public/Header.js';
import { Footer } from '../../../component/Public/Footer.js';
import { Drawer } from '../../../component/Public/Drawer.js';
import { BottomNavbar } from '../../../component/Public/BottomNavbar.js';
import { Scrollup } from '../../../component/Public/Scrollup.js';
import styles from '../../../css/Work.module.css';
import Grid from '@material-ui/core/Grid';
import { Vue01 } from '../../../component/Work/Vue/Vue01';
import { Vue02 } from '../../../component/Work/Vue/Vue02';
import { Vue03 } from '../../../component/Work/Vue/Vue03';
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
                title="VUE Movie Database | Salie Chien — Product Designer"
                description="As a product based in Taiwan, the object turns out to curate the largest movie database in Mandarin, the IMDb in Asia. We also aim to create a better UI & UX design comparing to IMDb 90s style."
                openGraph={{
                    url: 'https://saliejung.com/Work/Vue',
                    title: 'VUE Movie Database | Salie Chien — Product Designer',
                    description: "As a product based in Taiwan, the object turns out to curate the largest movie database in Mandarin, the IMDb in Asia. We also aim to create a better UI & UX design comparing to IMDb 90s style.",
                    images: [
                      {
                        url: '/vue/vue-header.png',
                        width: 800,
                        height: 600,
                        alt: 'VUE Movie Database',
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
                        <Vue01/>
                    </div>

                    <div>
                        <Vue02/>
                    </div>

                    <div>
                        <Vue03/>
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