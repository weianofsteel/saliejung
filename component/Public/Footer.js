import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Public.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    link: {
        fontFamily:'Roboto',
        fontWeight:400,
        lineHeight:'1.8rem',
        color:'#8F8F8F',
        fontSize:'1rem',
        "&:hover":{
            color:'black'
        }
    },
    copyright: {
        fontFamily:'Roboto',
        fontWeight:400,
        lineHeight:'0.75rem',
        fontSize:'0.75rem',
        color:'#8F8F8F',
        "&:hover":{
            color:'black'
        }
    }
});    

export const Footer = () => {
    
    const classes = useStyles();
    
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
                        OPEN TO NEW OPPORTUNITIES
                    </div>
                    <span className={styles.footerLeftContent}>
                        saliejung47@gmail.com
                    </span>
                    <br/>
                    <br/>
                    <br/>
                    <Link 
                        href='https://www.linkedin.com/in/salie-chien/' 
                        underline='none' 
                        className={classes.link}
                        target='_blank' 
                        rel='noopener'
                    >
                        Linkedin
                    </Link>
                    <br/>
                    <Link 
                        href='https://saliejung.medium.com/' 
                        underline='none' 
                        className={classes.link}
                        target='_blank' 
                        rel='noopener'
                    >
                        Medium
                    </Link>
                </Grid>
            </Grid>

            <Grid container spacing={1} className={styles.footerBlock2}>
                <Grid item xs={12}>
                    <span className={styles.copyright}>
                        Designed by Chien ShengJung © 2021 all rights reserve 
                    </span>
                </Grid>
                <Grid item xs={12}>
                    <span className={styles.copyright}>
                        Developed by <Link underline='none' className={classes.copyright}>Wang WeiAn</Link>
                    </span>
                </Grid>
            </Grid>

            <Grid container style={{height:'3rem'}}></Grid>
        
        </React.Fragment>
    )
}