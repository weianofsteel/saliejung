import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import agoda from '../../public/agoda-logo.png';
import Link from '@material-ui/core/Link';
import work07 from '../../public/work/work07.png';
import showcase01 from '../../public/showcase/showcase01.png';


export const Showcase = () => {

    return(
        <React.Fragment>
            
            <Grid container>
                <Grid item xs={5}>
                    <div className={styles.showcaseBox}>
                        <Link href='/Work/Agoda-flights'>
                            <img src={agoda} className={styles.img}/>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={7} style={{paddingLeft:"1%"}}>
                    <div className={styles.showcaseBox}>
                        <img src={showcase01} className={styles.img}/>
                    </div>
                </Grid>     
            </Grid>
            
            <Grid container className={styles.showcaseBlock}>
                <Grid item xs={6}>
                    <div className={styles.showcaseBox}></div>
                </Grid>
                <Grid item xs={6} style={{paddingLeft:"1%"}}>
                    <div className={styles.showcaseBox}></div>
                </Grid>     
            </Grid>

            <Grid container className={styles.showcaseBlock}>
                <Grid item xs={7}>
                    <div className={styles.showcaseBox}></div>
                </Grid>
                <Grid item xs={5} style={{paddingLeft:"1%"}}>
                    <div className={styles.showcaseBox}></div>
                </Grid>     
            </Grid>

            <Grid container className={styles.showcaseBlock}>
                <Grid item xs={6}>
                    <div className={styles.showcaseBox}>
                        <img src={work07} className={styles.img}/>
                    </div>
                </Grid>
                <Grid item xs={6} style={{paddingLeft:"1%"}}>
                    <div className={styles.showcaseBox}></div>
                </Grid>     
            </Grid>

        </React.Fragment>
    )
}