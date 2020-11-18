import React from 'react';
import styles from '../../css/Resume.module.css';
import { Header } from '../../component/Home/Header.js'; 
import { Footer } from '../../component/Home/Footer.js';
import { Scrollup } from '../../component/Public/Scrollup'; 


const Resume = () => {

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

            <div style={{paddingTop:'20%',marginLeft:'80%',position:'fixed'}}>
                    <Scrollup
                        handleScrolltoTop={handleScrolltoTop}
                    />
            </div>
            
            <div className={styles.footer}>
                <Footer/>
            </div>

        </React.Fragment>
    )
}

export default Resume;