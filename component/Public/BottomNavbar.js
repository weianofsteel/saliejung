import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Public.module.css';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        fontFamily:'Roboto Slab',
        fontWeight:400,
        letterSpacing:'1px',
        color:'black',
        fontSize:'4rem',
        lineHeight:'5rem',
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
                                    <Link href="/Writing" underline='none' className={classes.link}>WRITINGS</Link>
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

            </div>

        </React.Fragment>
    )
}