import React from 'react';
import styles from '../../css/Writing.module.css';
import { Header } from '../../component/Public/Header.js'; 
import { Footer } from '../../component/Home/Footer.js';
import Article from '../../component/Writing/Article.js';
import { Drawer } from '../../component/Public/Drawer.js';

const Writing = () => {
    
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
                <div style={{backgroundColor:"#E5E5E5", margin:-10}}>
                    <div style={{backgroundColor:"#E5E5E5", margin:0}}>

                        <div>
                            <Header
                                handleDrawerOpen={handleDrawerOpen}
                            /> 
                        </div>

                        <div className={styles.main} style={{overflow:'hidden'}}>
                            
                            <span className={styles.title}>
                                Writings
                            </span>

                            <Article/>

                        </div>

                        <div className={styles.footer}>
                            <Footer/>
                        </div>

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

export default Writing;
