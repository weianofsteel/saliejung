import React from 'react';
import styles from '../../css/About.module.css';
import Grid from '@material-ui/core/Grid';
import { Header } from '../../component/Home/Header.js'; 
import { Footer } from '../../component/Home/Footer.js';
import { Aboutme } from '../../component/About/Aboutme.js';
import { Gallery } from '../../component/About/Gallery.js';
import { Experience } from '../../component/About/Experience.js';


const About = () => {
    return(
        <React.Fragment>
            
            <div>
                <Header/>
            </div>

            <div className={styles.main}>
                
                <span className={styles.title}>Hi!</span>

                <Grid container spacing={1} style={{marginTop:"3%"}}>
                    
                    <Grid item xs={4}>
                        <Aboutme/>
                    </Grid>
                    
                    <Grid item xs={2}></Grid>
                    
                    <Grid item xs={6}>
                        <Gallery/>
                    </Grid>

                </Grid>

                <Grid container spacing={1} style={{marginTop:"3%"}}>

                    <Grid item xs={4}>
                        <Experience/>
                    </Grid>

                </Grid>

            </div>

            <div className={styles.footer}>
                <Footer/>
            </div>

        </React.Fragment>
    )
}

export default About;