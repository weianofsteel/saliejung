import React from 'react';
import { Header } from '../../../component/Public/Header.js';
import { Footer } from '../../../component/Public/Footer.js';
import styles from '../../../css/Work.module.css';
import { AgodaDesign } from '../../../component/Work/Agoda-design/AgodaDesign.js';
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
                title="Agoda Design | Salie Chien — Product Designer"
                description="Joined the Agoda Design team is not only a career path but also a life-changing experience for me. The opportunities to work with people from many different cultures is challenging but engaging. Other than that, I want to share some memorable stories when I worked here."
                openGraph={{
                    url: 'https://saliejung.com/Work/Agoda-design',
                    title: 'Agoda Design | Salie Chien — Product Designer',
                    description: 'Joined the Agoda Design team is not only a career path but also a life-changing experience for me. The opportunities to work with people from many different cultures is challenging but engaging. Other than that, I want to share some memorable stories when I worked here.',
                    images: [
                      {
                        url: 'https://raw.githubusercontent.com/weianofsteel/saliejung/master/public/agoda-design/design-header.png',
                        width: 800,
                        height: 600,
                        alt: 'Agoda-design',
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
                        <AgodaDesign/>
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