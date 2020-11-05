import React from 'react';
import styles from '../../css/Writing.module.css';
import { Header } from '../../component/Home/Header.js'; 
import { Footer } from '../../component/Home/Footer.js';

const Writing = () => {
    return(
        <React.Fragment>

            <div>
               <Header/> 
            </div>

            <div className={styles.footer}>
                <Footer/>
            </div>

        </React.Fragment>
    )
}

export default Writing;
