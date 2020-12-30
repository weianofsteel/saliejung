import React from 'react';
import { Header } from '../../../component/Public/Header.js';
import { Footer } from '../../../component/Public/Footer.js';
import styles from '../../../css/Work.module.css';
import { AgodaDesign } from '../../../component/Work/AgodaDesign.js';
import { Drawer } from '../../../component/Public/Drawer.js';
import { BottomNavbar } from '../../../component/Public/BottomNavbar.js';
import { Scrollup } from '../../../component/Public/Scrollup.js';
import Grid from '@material-ui/core/Grid';

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

            {drawer == false ?
                <React.Fragment>
                    <div className={styles.header}>
                        <Header
                            handleDrawerOpen={handleDrawerOpen}
                        />
                    </div>

                    <Grid container style={{top:'70%',position:'fixed'}}>
                        <Grid item xs={4} md={7}></Grid>
                        <Grid item xs={5} md={4}>
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