import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import moxa03 from '../../../public/moxa/moxa03.png';
import moxa04 from '../../../public/moxa/moxa04.png';
import moxa05 from '../../../public/moxa/moxa05.png';
import moxa06 from '../../../public/moxa/moxa06.png';
import moxa07 from '../../../public/moxa/moxa07.png';
import moxa08 from '../../../public/moxa/moxa08.png';
import moxa09 from '../../../public/moxa/moxa09.jpg';
import moxa10 from '../../../public/moxa/moxa10.jpg';
import moxa11 from '../../../public/moxa/moxa11.jpg';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        fontFamily:'Roboto',
        fontWeight:400,
        color:'#8F8F8F',
        fontSize:'1.1rem',
        "&:hover":{
            color:'black'
        }
    },
    linkCaption: {
        fontFamily:'Roboto',
        fontWeight:400,
        color:'#8F8F8F',
        fontSize:'0.875rem',
        lineHeight:'1.25rem',
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
                                    <Link 
                                        href='https://pro.similarweb.com/#/website/worldwide-overview/moxa.com/*/999/2020.10-2020.12?webSource=Total' 
                                        underline='none' 
                                        className={classes.link}
                                        target='_blank'
                                    > 
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

                <Grid container style={{marginTop:'4%'}} spacing={1}>

                    <Grid item xs={1}></Grid>

                    <Grid item xs={5}>
                        <img src={moxa03} style={{width:'100%'}}/>
                    </Grid>

                    <Grid item xs={5}>
                        <img src={moxa04} style={{width:'100%'}}/>
                    </Grid>

                    <Grid item xs={1}></Grid>

                    <Grid item xs={1}></Grid>

                    <Grid item xs={10} style={{marginTop:'-0.3rem'}}>
                        <img src={moxa05} style={{width:'100%'}}/>
                    </Grid>

                    <Grid item xs={1}></Grid>

                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    COMPETITIVE ANALYSIS
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Define the Look & Feel as an International Enterprise
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    During the research phase, I checked many competitor websites 
                                    like Cisco, Siemens & ABB. Their digital branding is not in a 
                                    fancy or aesthetic style but focuses on the product and solution 
                                    they offer. The most critical part is to explain their service 
                                    clearly, which allows users easy to find their needs.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}} spacing={2}>

                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <img src={moxa06} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={5}>
                        <img src={moxa07} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={1}></Grid>

                    <Grid item xs={1}></Grid>
                    <Grid item xs={5} style={{paddingLeft:'1%'}}>
                        <span className={styles.imgDescription2}>
                            <Link 
                                href='https://www.siemens.com/global/en.html' 
                                underline='none' 
                                className={classes.linkCaption}
                                target='_blank'
                            > 
                                Siemens
                            </Link>
                            &nbsp;is the largest industrial manufacturing company in Europe.
                        </span>
                    </Grid>
                    <Grid item xs={5} style={{paddingLeft:'1%'}}>
                        <span className={styles.imgDescription2}>
                            <Link 
                                href='https://www.cisco.com/c/en/us/index.html' 
                                underline='none' 
                                className={classes.linkCaption}
                                target='_blank'
                            > 
                                Cisco
                            </Link>
                            &nbsp;develops, manufactures, and sells networking hardware and other high-technology services and products.
                        </span>
                    </Grid>
                    <Grid item xs={1}></Grid>

                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    RESEARCH
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Clarify the Function of the Website Fundamentally
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Every website starts from a site map, which is a clear picture 
                                    to identify the project focus and analyze the scope. Moxa has 
                                    six main parts, which also means six departments to define the 
                                    angle and business purpose. Our mission is to integrate all the 
                                    ideas and vision and deliver them into a consistent brand 
                                    identity and user experience.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <img src={moxa08} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>

                <Grid container style={{marginTop:'1%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.imgDescription2}>
                                    The site map
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    DESIGN PROPOSAL & INTERVIEW
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Reveal the Key Factor behind the curtain
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    At the beginning of the design phase, we have half-day 
                                    discussion sessions with some departments. It was a great 
                                    chance to understand Moxa better with direct feedback. That 
                                    was also our first time seeing the actual product that Moxa 
                                    develops and produces, which is hard for a designer to imagine. 
                                    I feel it's not a cold object but a functional helper to 
                                    improve our life everywhere around us.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'2%'}}>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <img src={moxa09} style={{width:'100%',maxHeight:'80%'}}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={moxa10} style={{width:'100%',maxHeight:'80%'}}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={moxa11} style={{width:'100%',maxHeight:'80%'}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>

            </div>

        </React.Fragment>
    )
}