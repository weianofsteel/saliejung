import React from 'react';
import styles from '../../css/Work.module.css';
import { Header } from '../../component/Home/Header.js';
import { Footer } from '../../component/Home/Footer.js';
import { Showcase } from '../../component/Work/Showcase.js';  
import Grid from '@material-ui/core/Grid';

const Work = () => {
    return(
        <React.Fragment>

            <div>
                <Header/>
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
    )
}

export default Work;