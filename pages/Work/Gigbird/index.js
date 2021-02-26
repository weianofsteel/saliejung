import React from 'react';
import { Header } from '../../../component/Public/Header.js';
import { Footer } from '../../../component/Public/Footer.js';
import { Drawer } from '../../../component/Public/Drawer.js';
import { BottomNavbar } from '../../../component/Public/BottomNavbar.js';
import { Scrollup } from '../../../component/Public/Scrollup.js';
import styles from '../../../css/Work.module.css';
import Grid from '@material-ui/core/Grid';
import { PageLoader } from '../../../component/Public/PageLoader.js';
import { Gigbird01 } from '../../../component/Work/Gigbird/Gigbird01';
import { Gigbird02 } from '../../../component/Work/Gigbird/Gigbird02';
import { Gigbird03 } from '../../../component/Work/Gigbird/Gigbird03';
import gigbirdHeader from '../../../public/gigbird/gigbird-header.png';
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
                title="Gig Bird | Salie Chien — Product Designer"
                description="Gig Bird is a music event calendar iOS app in Taiwan. As the lead designer, my job is not only to make the logo or design layouts. I spent more time sharing and discussing my idea with the team. Besides, I took this chance to practice my UX skills and methods, learn by doing."
                openGraph={{
                    url: 'https://saliejung.com/Work/Gigbird',
                    title: 'Gig Bird | Salie Chien — Product Designer',
                    description: 'Gig Bird is a music event calendar iOS app in Taiwan. As the lead designer, my job is not only to make the logo or design layouts. Besides, I took this chance to practice my UX skills and methods, learn by doing.',
                    images: [
                      {
                        url: 'https://raw.githubusercontent.com/weianofsteel/saliejung/master/public/gigbird/gigbird-header.png',
                        width: 800,
                        height: 600,
                        alt: 'Gig Bird',
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

                    <Grid container className={styles.img01}>
                
                        <Grid item xs={12} style={{textAlign:'center'}}>
                            <img src={gigbirdHeader} className={styles.bannerImg}/>
                        </Grid>
                        
                    </Grid>

                    <Grid container style={{top:'90%',position:'fixed'}}>
                        <Grid item xs={8} sm={9} md={9} lg={10} xl={10}></Grid>
                        <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
                            <Scrollup/>
                        </Grid>
                    </Grid>

                    <div>
                        <Gigbird01/>
                    </div>

                    <div>
                        <Gigbird02/>
                    </div>

                    <div>
                        <Gigbird03/>
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