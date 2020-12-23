import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export const Footer = () => {
    return(
        <React.Fragment>
            
            <Grid container spacing={1} className={styles.footerBlock}>
                <Grid item xs={12} md={7}>
                    <div className={styles.footerTitle}>
                        Salie ShengJung Chien --- Product Designer
                    </div>
                </Grid>
                <Grid item xs={12} md={5}>
                    <div className={styles.footerLeftTitle}>
                        Open to new opportunities
                    </div>
                    <Link 
                        href="/"
                        underline='none'
                        color='inherit'
                        className={styles.footerLeftContent}
                    >
                        saliejung47@gmail.com
                    </Link>
                    <br/>
                    <br/>
                    <br/>
                    <Link 
                        href="/"
                        color='inherit'
                        className={styles.footerLeftContent}
                    >
                        LINKEDIN
                    </Link>
                    <br/>
                    <Link 
                        href="/"
                        color='inherit'
                        className={styles.footerLeftContent}
                    >
                        MEDIUM
                    </Link>
                </Grid>
            </Grid>

            <Grid container spacing={1} className={styles.footerBlock2}>
                <Grid item xs={12}>
                    <span className={styles.copyright}>
                        Designed by Chien ShengJung © 2020 all rights reserve 
                    </span>
                </Grid>
                <Grid item xs={12}>
                    <span className={styles.copyright}>
                        Developed by Wang WeiAn
                    </span>
                </Grid>
            </Grid>

            <Grid container style={{height:'3rem'}}></Grid>
        
        </React.Fragment>
    )
}