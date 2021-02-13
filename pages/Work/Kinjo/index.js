import React from 'react';
import { Header } from '../../../component/Public/Header.js';
import { Footer } from '../../../component/Public/Footer.js';
import { Drawer } from '../../../component/Public/Drawer.js';
import { BottomNavbar } from '../../../component/Public/BottomNavbar.js';
import { Scrollup } from '../../../component/Public/Scrollup.js';
import styles from '../../../css/Work.module.css';
import Grid from '@material-ui/core/Grid';
import { Kinjo01 } from '../../../component/Work/Kinjo/Kinjo01';
import { Kinjo02 } from '../../../component/Work/Kinjo/Kinjo02';
import { Kinjo03 } from '../../../component/Work/Kinjo/Kinjo03';
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
                title="KINJO Jewelry | Salie Chien — Product Designer"
                description="With a 12-year history, KINJO is the top metalworking & workshop brand in Taiwan. The goal of this project is to build an e-commerce site. To collect customer data, manage orders, and reserve workshop online. Also, reshape their digital branding to improve the efficiency of their marketing strategy and sales."
                openGraph={{
                    url: 'https://saliejung.com/Work/Kinjo',
                    title: 'KINJO Jewelry | Salie Chien — Product Designer',
                    description: 'With a 12-year history, KINJO is the top metalworking & workshop brand in Taiwan. The goal of this project is to build an e-commerce site. To collect customer data, manage orders, and reserve workshop online. Also, reshape their digital branding to improve the efficiency of their marketing strategy and sales.',
                    images: [
                      {
                        url: '/kinjo/kinjo-header.jpg',
                        width: 800,
                        height: 600,
                        alt: 'KINJO Jewelry',
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
                        <Kinjo01/>
                    </div>

                    <div>
                        <Kinjo02/>
                    </div>

                    <div>
                        <Kinjo03/>
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