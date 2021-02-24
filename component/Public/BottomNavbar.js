import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Public.module.css';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
    link: {
        fontFamily:'Roboto Slab',
        fontWeight:400,
        letterSpacing:'1px',
        color:'black',
        fontSize:'3rem',
        lineHeight:'4rem',
        "&:hover":{
            color:'#8F8F8F'
        }
    },
    link2: {
        fontFamily:'Roboto Slab',
        fontWeight:400,
        letterSpacing:'1px',
        color:'black',
        fontSize:'1.5rem',
        lineHeight:'2rem',
        "&:hover":{
            color:'#8F8F8F'
        }
    },
    link3: {
        fontFamily:'Roboto Slab',
        fontWeight:400,
        letterSpacing:'1px',
        color:'black',
        fontSize:'1rem',
        lineHeight:'1.5rem',
        "&:hover":{
            color:'#8F8F8F'
        }
    }
});

export const BottomNavbar = () => {

    const classes = useStyles();

    return(
        <React.Fragment>

            <div className={styles.main1}>
                
                <Hidden mdDown>
                    <Grid container spacing={1}>
                        <Grid item xs={false} sm={2}></Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={4} style={{textAlign:'left'}}>
                                    <span className={styles.link}>
                                        <Link href="/Work" underline='none' className={classes.link}>WORK</Link>
                                    </span>
                                </Grid>
                                <Grid item xs={4} style={{textAlign:'center'}}>
                                    <span className={styles.link}>
                                        <Link href="/Writings" underline='none' className={classes.link}>WRITINGS</Link>
                                    </span>
                                </Grid>
                                <Grid item xs={4} style={{textAlign:'right'}}>
                                    <span className={styles.link}>
                                        <Link href="/About" underline='none' className={classes.link}>ABOUT</Link>
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={false} sm={2}></Grid>
                    </Grid>
                </Hidden>

                <Hidden lgUp xsDown>
                    <Grid container spacing={1}>
                        <Grid item xs={false} sm={2}></Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={4} style={{textAlign:'left'}}>
                                    <span className={styles.link}>
                                        <Link href="/Work" underline='none' className={classes.link2}>WORK</Link>
                                    </span>
                                </Grid>
                                <Grid item xs={4} style={{textAlign:'center'}}>
                                    <span className={styles.link}>
                                        <Link href="/Writings" underline='none' className={classes.link2}>WRITINGS</Link>
                                    </span>
                                </Grid>
                                <Grid item xs={4} style={{textAlign:'right'}}>
                                    <span className={styles.link}>
                                        <Link href="/About" underline='none' className={classes.link2}>ABOUT</Link>
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={false} sm={2}></Grid>
                    </Grid>
                </Hidden>

                <Hidden smUp>
                    <Grid container spacing={1}>
                        <Grid item xs={false}></Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={4} style={{textAlign:'left'}}>
                                    <span className={styles.link}>
                                        <Link href="/Work" underline='none' className={classes.link3}>WORK</Link>
                                    </span>
                                </Grid>
                                <Grid item xs={4} style={{textAlign:'center'}}>
                                    <span className={styles.link}>
                                        <Link href="/Writings" underline='none' className={classes.link3}>WRITINGS</Link>
                                    </span>
                                </Grid>
                                <Grid item xs={4} style={{textAlign:'right'}}>
                                    <span className={styles.link}>
                                        <Link href="/About" underline='none' className={classes.link3}>ABOUT</Link>
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={false}></Grid>
                    </Grid>
                </Hidden>


            </div>

        </React.Fragment>
    )
}