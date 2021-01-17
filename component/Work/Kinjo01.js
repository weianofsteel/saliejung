import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import kinjoHeader from '../../public/kinjo/kinjo-header.png';
import { LearnMore } from '../Public/LearnMore.js';

export const Kinjo01 = () => {
    
    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={kinjoHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>

            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={5}></Grid>
                <Grid item xs={6} md={2}>
                    <div className={styles.title2}>
                        KINJO Jewelry    
                    </div>
                </Grid>     
                <Grid item xs={3} md={5}></Grid>
            </Grid>

        
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                </Grid>     
                <Grid item xs={3}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        An E-commerce Site Brings a 12-year Brand a New Picture  
                    </h2>
                    <h2 className={styles.title4}>§</h2>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.03rem'}}>CONTEXT&nbsp;&nbsp;</span>
                        With a 12-year history, KINJO is the top one metalworking & workshop 
                        brand in Taiwan. Now they have eight stores, attracting more than 1,800 
                        tourists to experience handmade rings every month. The goal of this 
                        project is to build an e-commerce site. To collect customer data, manage 
                        orders, and reserve workshop online. Also, reshape their digital branding 
                        to improve the efficiency of their marketing strategy and sales.
                        <br/><br/>
                        <span style={{fontWeight:700, letterSpacing:'0.03rem'}}>CHALLENGE&nbsp;&nbsp;</span> 
                        It is not only an e-commerce site, but all the businesses of KINJO 
                        need to integrate into one place. We spent lots of time figuring out the need 
                        of clients, customers, and the brand. The most challenging part is to find the 
                        balance and not overwhelm people. Speaking of the project scope, it is also a 
                        challenge for me and all the team members to collaborate and communicate along 
                        the working process.
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
                                Jan 2018 - Oct 2018
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Team</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Designers (2), Product Manager (1), Engineers (3)
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>My role</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Competitive Analysis, Flowchart, Wireframe, Web Design, Design System
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

            <Grid container style={{marginTop:'8%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3} className={styles.content}>
                        <Grid item xs={12}>
                            <span className={styles.designHighlight}>
                                DESIGN HIGHLIGHT
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightTitle}>
                                Treat Every Movement Gently and Carefully
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                To create the elegance and classic of the brand image, we carefully 
                                select the serif font for English characters and use high-end 
                                photography. Other than that, we spent more effort on tweaking the 
                                animation with engineers. These subtle details might be hard to 
                                notice, and customers naturally enjoy the experience.
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

            <Grid container style={{marginTop:'8%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3} className={styles.content}>
                        <Grid item xs={12}>
                            <span className={styles.designHighlight}>
                                DESIGN HIGHLIGHT
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightTitle}>
                                A Well-define Design Guideline to Highly Improve the Working Process
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                We created a complete guideline for KINJO. For every color, we define 
                                clearly the usages and even codename using for developers. For 
                                typography, every kind of heading, paragraph, and even spec for RWD are 
                                well defined. 
                                Our developers were satisfied by the system we built, makes them start a 
                                project more quickly than before. There is no need to ask designers, again 
                                and again. For designers, we can also define this fundamental guideline fast 
                                in the future.
                                It is not only a guideline for the website, which could be easily applied to 
                                the marketing material using widely across the different funnel.
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'6%',marginBottom:'6%'}} className={styles.scrollDown}>
                <Grid item xs={2} md={4}></Grid>
                <Grid item xs={8} md={4} style={{textAlign:'center'}}>
                    <LearnMore scrollY={1590} />
                </Grid>
                <Grid item xs={2} md={4}></Grid>
            </Grid>

        </React.Fragment>
    )
}