import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import agoda from '../../public/agoda-logo.jpg';
import showcase01 from '../../public/showcase/showcase01.png';
import showcase02 from '../../public/showcase/showcase02.jpg';
import showcase03 from '../../public/showcase/showcase03.jpg';
import showcase04 from '../../public/showcase/showcase04.jpg';
import showcase05 from '../../public/showcase/showcase05.jpg';
import Link from '@material-ui/core/Link';

export const Showcase = () => {
    
    const [ box1, setBox1] = React.useState(true);

    const handleBox1On = () => {
        setBox1(false);
    }

    const handleMouseLeave = () => {
        setBox1(true);
    }
    
    return(
        <React.Fragment>
            
            <Grid container>
                <Grid item xs={5}>
                    <div 
                        className={styles.showcaseBox2}
                    >
                        <Link 
                            href='/'
                            onMouseEnter={handleBox1On}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img 
                                src={agoda}
                                className={styles.img}
                            />
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={7} style={{paddingLeft:"8px"}}>
                    <div className={styles.showcaseBox}>
                        <img src={showcase01} className={styles.img}/>
                    </div>
                </Grid>     
            </Grid>
            
            <Grid container className={styles.showcaseBlock}>
                <Grid item xs={6}>
                    <div className={styles.showcaseBox}>
                        <img src={showcase02} className={styles.img}/>
                    </div>
                </Grid>
                <Grid item xs={6} style={{paddingLeft:"8px"}}>
                    <div className={styles.showcaseBox}>
                        <img src={showcase03} className={styles.img}/>
                    </div>
                </Grid>     
            </Grid>

            <Grid container className={styles.showcaseBlock}>
                <Grid item xs={7}>
                    <div className={styles.showcaseBox}>
                        <img src={showcase04} className={styles.img}/>
                    </div>
                </Grid>
                <Grid item xs={5} style={{paddingLeft:"8px"}}>
                    <div className={styles.showcaseBox}>
                        <img src={showcase05} className={styles.img}/>
                    </div>
                </Grid>     
            </Grid>

        </React.Fragment>
    )
}