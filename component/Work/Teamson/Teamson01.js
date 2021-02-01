import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import { LearnMore } from '../../Public/LearnMore.js';
import teamsonHeader from '../../../public/teamson/teamson-header.png';
import teamson from '../../../public/gif/teamson.gif';

export const Teamson01 = () => {
    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={teamsonHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>
            
            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={4}></Grid>
                <Grid item xs={6} md={4}>
                    <div className={styles.title2}>
                        Teamson Furniture  
                    </div>
                </Grid>     
                <Grid item xs={3} md={4}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        Boost Sales by a Brand New Experience
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
                        As a famous design furniture brand based in the U.S.A, Teamson has 
                        a great market portion on Amazon and Wayfair since 1997. To launch 
                        an ambitious new online experience, they decided to combine all of 
                        their brands by meeting their 10th anniversary. 
                        <br/><br/>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>CHALLENGE&nbsp;&nbsp;</span>
                        Mainly focus on kids' furniture and toys, Teamson still has brands 
                        manufacturing modern furniture, and they also plan to develop pets 
                        appliances. The number of total products comes to more than 400, 
                        which means it is crucial to help the customers find the product 
                        they want. For brand strategy, it was also hard to combine four 
                        brands with different styles into one website. 
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
                                May - November 2017
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Team</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Web Designer (1), Visual Designer (1), Product Manager (1), Engineers (3)
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>My role</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Competitive Analysis, Flowchart, Branding, Web Design
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
                                An Outstanding Stage for the Brand
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                The objective of this project is not only about an online 
                                store but to create a shared platform to accommodate all 
                                the brands within Teamson. It is a place for each brand 
                                to present its creativity. Considering easy maintenance 
                                and development, I designed a template for the brand page, 
                                but there is a different design on the top section. Those 
                                playful elements are applied to icons, colors, and dynamic 
                                animations.
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'8%'}}>
                <Grid item xs={1} md={2}></Grid>
                <Grid item xs={10} md={8}>
                    <img src={teamson} style={{width:'100%'}}/>
                </Grid>
                <Grid item xs={1} md={2}></Grid>
            </Grid>

            <Grid container style={{marginTop:'8%'}}>
                
                <Grid item xs={3} md={5}></Grid>
                <Grid item xs={6} md={2}>
                    <h3 className={styles.reflection}>
                        Reflection
                    </h3>
                </Grid>
                <Grid item xs={3} md={5}></Grid>
            
            </Grid>

            <Grid container style={{marginTop:'1%'}}>
                <Grid item xs={5}></Grid>
                <Grid item xs={2} style={{textAlign:'center'}}>
                    <span className={styles.dotLine}>
                        ·&nbsp;·&nbsp;·
                    </span>
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid> 

            <Grid container style={{marginTop:'3%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3} className={styles.content}>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                My first time designed an e-commerce website was a pressure 
                                journey, it was also a starter for me to think about how to 
                                make those sophisticated UI design useful. Every step and 
                                click relating to sales, I worked hard to experience other 
                                successful case and applied the good parts on the Teamson 
                                site. This project made me think deeply about every decision 
                                I made, UI & UX design is not only about looking good but 
                                also good to use, for sure.
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'6%',marginBottom:'6%'}} className={styles.scrollDown}>
                <Grid item xs={2} md={4}></Grid>
                <Grid item xs={8} md={4} style={{textAlign:'center'}}>
                    <LearnMore scrollY={1800} />
                </Grid>
                <Grid item xs={2} md={4}></Grid>
            </Grid>

        </React.Fragment>
    )
}