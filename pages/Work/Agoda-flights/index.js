import React from 'react';
import { Footer } from '../../../component/Public/Footer.js';
import styles from '../../../css/Work.module.css';
import Secure from '../../../component/Work/Agoda-flights/Secure.js';
import { Drawer } from '../../../component/Public/Drawer.js';
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
                title="Agoda Flights | Salie Chien — Product Designer"
                description="Seat selection is one of the core features for Agoda Flights. Not to mention that it is a sophisticated project, we also have a high dependency on the supplier to define the scope and confirm the data they could provide. Therefore, we launched the feature with the free selection that certainly reduces the risk of implementation."
                openGraph={{
                    url: 'https://saliejung.com/Work/Agoda-flights',
                    title: 'Agoda Flights | Salie Chien — Product Designer',
                    description: 'Seat selection is one of the core features for Agoda Flights. Not to mention that it is a sophisticated project, we also have a high dependency on the supplier to define the scope and confirm the data they could provide. Therefore, we launched the feature with the free selection that certainly reduces the risk of implementation.',
                    images: [
                      {
                        url: '/agoda-flights/flight-header.png',
                        width: 800,
                        height: 600,
                        alt: 'Agoda Flights',
                      }
                    ],
                    site_name: 'Salie Chien — Product Designer',
                  }}
            />
            
            {drawer == false ?
                <React.Fragment>
                    
                    <PageLoader/>
                    
                    <div>
                        <Secure
                            handleDrawerOpen={handleDrawerOpen}
                        />
                    </div>

                    <Grid container style={{top:'90%',position:'fixed'}}>
                        <Grid item xs={8} sm={9} md={9} lg={10} xl={10}></Grid>
                        <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
                            <Scrollup/>
                        </Grid>
                    </Grid>

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


 