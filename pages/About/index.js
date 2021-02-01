import React from 'react';
import styles from '../../css/About.module.css';
import Grid from '@material-ui/core/Grid';
import { Header } from '../../component/Public/Header.js'; 
import { Footer } from '../../component/Public/Footer.js';
import { Aboutme } from '../../component/About/Aboutme.js';
import { Drawer } from '../../component/Public/Drawer.js';
import { PageLoader } from '../../component/Public/PageLoader.js';

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