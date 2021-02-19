import React from 'react';
import { Header } from '../../../component/Public/Header.js';
import { Footer } from '../../../component/Public/Footer.js';
import styles from '../../../css/Work.module.css';
import { AgodaMk01 } from '../../../component/Work/Agoda-product-marketing/AgodaMk01.js';
import { Drawer } from '../../../component/Public/Drawer.js';
import { BottomNavbar } from '../../../component/Public/BottomNavbar.js';
import { Scrollup } from '../../../component/Public/Scrollup.js';
import Grid from '@material-ui/core/Grid';
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
                title="Agoda Product Marketing - Secret Deals | Salie Chien — Product Designer"
                description="This project is an enhancement project based on an existing feature, which we offer a super valuable offer without identifying the hotel name and room details. With the new deal with some hotels, we can display more information to help customers decide, and expect having more bookings."
                openGraph={{
                    url: 'https://saliejung.com/Work/Agoda-product-marketing',
                    title: 'Agoda Product Marketing - Secret Deals | Salie Chien — Product Designer',
                    description: 'This project is an enhancement project based on an existing feature, which we offer a super valuable offer without identifying the hotel name and room details. With the new deal with some hotels, we can display more information to help customers decide, and expect having more bookings.',
                    images: [
                      {
                        url: '/agodaMk/agodaMk-header.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Agoda-product-marketing',
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
                        <AgodaMk01/>
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