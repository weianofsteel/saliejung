import React from 'react';
import styles from '../../css/Work.module.css';
import { Header } from '../../component/Public/Header.js';
import { Footer } from '../../component/Public/Footer.js';
import { Showcase } from '../../component/Work/Showcase.js';  
import { Drawer } from '../../component/Public/Drawer.js';
import { PageLoader } from '../../component/Public/PageLoader.js';

const Work = () => {

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
                    
                    <PageLoader/>
                    
                    <div>
                        <Header
                            handleDrawerOpen={handleDrawerOpen}
                        />
                    </div>

                    <div className={styles.main}>
                        
                        <h1 className={styles.title}>
                            Work
                        </h1>
                        
                        <div style={{marginTop:"6%"}}>
                            <Showcase/>
                        </div>

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

export default Work;