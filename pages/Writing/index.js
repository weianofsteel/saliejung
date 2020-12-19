import React from 'react';
import styles from '../../css/Writing.module.css';
import { Header } from '../../component/Home/Header.js'; 
import { Footer } from '../../component/Home/Footer.js';
import Article from '../../component/Writing/Article.js';

const Writing = () => {
    
    return(
        <React.Fragment>
            <div style={{backgroundColor:"#E5E5E5", margin:-10}}>
                <div style={{backgroundColor:"#E5E5E5", margin:0}}>

                    <div>
                        <Header/> 
                    </div>

                    <div className={styles.main}>
                        
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

        </React.Fragment>
    )
}

export default Writing;
