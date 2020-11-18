import React from 'react';
import styles from '../../css/Work.module.css';
import { Header } from '../../component/Home/Header.js';
import { Footer } from '../../component/Home/Footer.js';
import { Showcase } from '../../component/Work/Showcase.js';  
import { Scrollup } from '../../component/Public/Scrollup';

const Work = () => {

    const handleScrolltoTop = () => {
        if(window !== undefined) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    }

    return(
        <React.Fragment>

            <div>
                <Header/>
            </div>

            <div className={styles.main}>
                
                <h1 className={styles.title}>
                    Work
                </h1>

                <div style={{paddingTop:'5%',marginLeft:'80%',position:'fixed'}}>
                    <Scrollup
                        handleScrolltoTop={handleScrolltoTop}
                    />
                </div>

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