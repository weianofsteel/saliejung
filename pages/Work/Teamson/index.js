import React from 'react';
import { Header } from '../../../component/Public/Header.js';
import { Footer } from '../../../component/Public/Footer.js';
import { Drawer } from '../../../component/Public/Drawer.js';
import { BottomNavbar } from '../../../component/Public/BottomNavbar.js';
import { Scrollup } from '../../../component/Public/Scrollup.js';
import styles from '../../../css/Work.module.css';
import Grid from '@material-ui/core/Grid';
import { Teamson01 } from '../../../component/Work/Teamson/Teamson01';
import { Teamson02 } from '../../../component/Work/Teamson/Teamson02';
import { Teamson03 } from '../../../component/Work/Teamson/Teamson03';
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
                title="Teamson Furniture | Salie Chien — Product Designer"
                description="As a famous design furniture brand based in the U.S.A, Teamson has a great market portion on Amazon and Wayfair since 1997. To launch an ambitious new online experience, they decided to combine all of their brands by meeting their 10th anniversary."
                openGraph={{
                    url: 'https://saliejung.com/Work/Teamson',
                    title: 'Teamson Furniture | Salie Chien — Product Designer',
                    description: 'As a famous design furniture brand based in the U.S.A, Teamson has a great market portion on Amazon and Wayfair since 1997. To launch an ambitious new online experience, they decided to combine all of their brands by meeting their 10th anniversary.',
                    images: [
                      {
                        url: 'https://raw.githubusercontent.com/weianofsteel/saliejung/master/public/teamson/teamson-header.png',
                        width: 800,
                        height: 600,
                        alt: 'Teamson Furniture',
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
                        <Teamson01/>
                    </div>
                    
                    <div>
                        <Teamson02/>
                    </div>

                    <div>
                        <Teamson03/>
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