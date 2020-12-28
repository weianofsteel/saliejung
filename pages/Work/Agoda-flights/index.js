import React from 'react';
import { Footer } from '../../../component/Public/Footer.js';
import styles from '../../../css/Work.module.css';
import Secure from '../../../component/Work/Secure.js';
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
                    <div>
                        <Secure
                            handleDrawerOpen={handleDrawerOpen}
                        />
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


 