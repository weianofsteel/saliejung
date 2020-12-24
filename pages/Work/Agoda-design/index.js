import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Header } from '../../../component/Home/Header.js';
import { Footer } from '../../../component/Home/Footer.js';
import styles from '../../../css/Work.module.css';
import { AgodaDesign } from '../../../component/Work/AgodaDesign.js';
import { Drawer } from '../../../component/Public/Drawer.js';

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

                    <div>
                        <AgodaDesign/>
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