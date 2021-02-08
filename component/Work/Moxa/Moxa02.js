import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import moxa01 from '../../../public/moxa/moxa01.png';
import moxa02 from '../../../public/moxa/moxa02.jpg';
import moxaGif01 from '../../../public/gif/moxa01.gif';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        fontFamily:'Roboto',
        fontWeight:400,
        color:'#8F8F8F',
        fontSize:'1rem',
        letterSpacing:'1px',
        "&:hover":{
            color:'black'
        }
    }
});

export const Moxa02 = () => {

    const classes = useStyles();

    return(
        <React.Fragment>

            <div className={styles.progressMain}>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'12%'}}>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle1}>
                                    THE PROCESS / 01
                                </span>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle2}>
                                    Research, Understand & Define
                                </span>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.dotLine}>
                                    ·&nbsp;·&nbsp;·
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    WEBSITE ANALYSIS
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Understand the Business and the Users
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    During the kickoff, we used an online tool,&nbsp; 
                                    <Link href='https://pro.similarweb.com/#/companyresearch/websiteanalysis/overview/website-performance/kinjo.co/*/764/2020.01-2020.03?webSource=Total' underline='none' className={classes.link}> 
                                        Similar Web 
                                    </Link>
                                    , to analyze the original website. We found out over 70% of 
                                    users view the website by desktop, and 42% of the traffic 
                                    comes from the direct channel. According to our client, most 
                                    users are engineers & sales, who usually check the Moxa 
                                    website in the office for business purposes. Beyond that, 
                                    the new website will only focus on the English language. 
                                    It should be ready to face the global market.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

            </div>

        </React.Fragment>
    )
}