import React from 'react';
import styles from '../../../css/Resume.module.css';
import { Header } from '../../../component/Home/Header.js'; 
import { Footer } from '../../../component/Home/Footer.js'; 
import Secure from '../../../component/Writing/Secure.js';
import Grid from '@material-ui/core/Grid';


const Article01 = () => {
    return(
        <React.Fragment>
            
            <div>
                <Header/>
            </div>

            <div>
                <Secure/>
            </div>
            
            <div className={styles.footer}>
                <Footer/>
            </div>

        </React.Fragment>
    )
}

export default Article01;