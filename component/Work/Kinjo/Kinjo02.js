import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import kinjo06 from '../../../public/kinjo/kinjo06.png';
import kinjo07 from '../../../public/kinjo/kinjo07.png';
import kinjo08 from '../../../public/kinjo/kinjo08.png';
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

export const Kinjo02 = () => {

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

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8} style={{textAlign:'center'}}>
                        <img src={kinjo06} style={{width:'100%', marginBottom:'1rem'}}/>
                        <span className={styles.caption}>
                            There are their official websites previously, 2008 on the left, 
                            2011 on the right.
                        </span>
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    KICKOFF
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Exploring the Opportunity
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Firstly, we used &nbsp;
                                    <Link href='https://pro.similarweb.com/#/companyresearch/websiteanalysis/overview/website-performance/kinjo.co/*/764/2020.01-2020.03?webSource=Total' underline='none' className={classes.link}> 
                                        Similar Web 
                                    </Link>
                                    &nbsp;to analyze the original 
                                    website and we found that about 67% of visits were from 
                                    organic search, which means high brand awareness. However
                                    , customers can only get limited information from blogger 
                                    and facebook business page, rather than the official 
                                    website. Therefore, we discussed lots with the client 
                                    about organizing the information hierarchy for the new 
                                    website.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} style={{textAlign:'center'}}>
                        <img src={kinjo07} style={{width:'100%'}}/>
                        <span className={styles.caption}>
                            We spent lots of time discussing with the client about the new 
                            information architecture for the new website.
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
                                    Think Thoroughly like Picking the Wedding Ring
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    The ring is not a simple product. You have to consider the 
                                    size, the personalized engraving, and the materials. Other 
                                    than that, course booking is also complicated. The most 
                                    challenging part is how to sync the remaining seats within 
                                    date, time, and stores. To think comprehensively, we worked 
                                    with developers during the research phase to prevent 
                                    technical limitations as far as possible.
                                    <br/><br/>
                                    We provided some selected design references to the client. 
                                    After discussion, we defined the design direction to focus 
                                    on&nbsp; 
                                    <span className={styles.boldContent}>storytelling</span> 
                                    &nbsp;like the brand motto,&nbsp;
                                    <span className={styles.boldContent}>A Memory to Remember</span>. 
                                    From online experience to products and workshops, we would 
                                    like customers to feel the brand from the heart and keep it 
                                    as a beautiful memory in mind.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6} style={{textAlign:'center'}}>
                        <img src={kinjo08} style={{width:'100%'}}/>
                        <span className={styles.caption}>
                            We used&nbsp; 
                            <Link href='https://en.eagle.cool/' underline='none' className={classes.link}> 
                                Eagle (Left)
                            </Link>
                            &nbsp;to collect ideas and inspiration and shared 
                            our research notes on Confluence (Right).
                        </span>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

            </div>

        </React.Fragment>
    )
}