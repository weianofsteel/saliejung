import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import { LearnMore } from '../../Public/LearnMore.js';
import moxaHeader from '../../../public/moxa/moxa-header.png';

export const Moxa01 = () => {
    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={moxaHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>

            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={4}></Grid>
                <Grid item xs={6} md={4}>
                    <div className={styles.title2}>
                        MOXA Technologies 
                    </div>
                </Grid>     
                <Grid item xs={3} md={4}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        Trusted Image for a Leading Brand in Industrial Networking Industry
                    </h2>
                    <h2 className={styles.title4}>§</h2>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>CONTEXT&nbsp;&nbsp;</span>
                        Founded in Taiwan for more than 30 years, Moxa is a leading 
                        provider of industrial networking, computing, and automation 
                        solutions to help customers enable connectivity for the Industrial 
                        Internet of Technology (IIoT). Before this project, we had worked on 
                        some campaign landing page for Moxa. This time, they want to achieve 
                        a greater goal - revamping the original official website, integrating 
                        all the information, products, and PR contents on the new site. We aim 
                        to give the brand a new digital image with consistent language across 
                        the company and improve the experience to fulfill customers' needs to 
                        increase the conversion rate. 
                        <br/><br/>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>CHALLENGE&nbsp;&nbsp;</span>
                        You can tell by the product line that Moxa is a big corporation 
                        like Siemens, Cisco, or HPE. It certainly took more time to 
                        communicate with different sectors. We even need to have final 
                        confirmation of the homepage design from the senior management. 
                        That's the main reason why it took more than a year for the 
                        implementation. Speaking of industrial networking, it is not a 
                        simple field to understand. Luckily, our client is more than 
                        willing to guide us that industry knowledge along the way.  
                    </p>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={5} className={styles.content}>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Timeline</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Aug 2017 - Jan 2019 (7 months in design)
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Team</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Designer (2), Art Director (1), Product Manager (1), Front-end Developers (3)
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>My role</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Competitive Analysis, Wireframe, Information Architecture, Design Proposal, UI/UX Design, Web Design
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'8%'}}>
                <Grid item xs={5}></Grid>
                <Grid item xs={2} style={{textAlign:'center'}}>
                    <span className={styles.dotLine}>
                        ·&nbsp;·&nbsp;·
                    </span>
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>

        </React.Fragment>
    )
}