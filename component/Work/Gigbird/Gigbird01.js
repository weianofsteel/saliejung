import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import { LearnMore } from '../../Public/LearnMore.js';
import gigbirdHeader from '../../../public/gigbird/gigbird-header.png';
import gigbird01 from '../../../public/gigbird/gigbird01.png';
import gigbird02 from '../../../public/gigbird/gigbird02.png';
import gigbird03 from '../../../public/gigbird/gigbird03.png';

export const Gigbird01 = () => {
    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={gigbirdHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>

            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={5}></Grid>
                <Grid item xs={6} md={2}>
                    <div className={styles.title2}>
                        Gig Bird Event   
                    </div>
                </Grid>     
                <Grid item xs={3} md={5}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        Celebrate Every Music Event You Enjoy with People
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
                        Many events are happening during our daily life, you may see the 
                        information from news, Facebook, or friends' posts. How to keep those 
                        events on my calendar or somewhere? That's the problem coming up when 
                        I haven't decided when to the event yet. The idea of a fully functional 
                        event calendar came out of our minds.
                        <br/><br/>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>CHALLENGE&nbsp;&nbsp;</span> 
                        The biggest challenge every side project will face must be time & money
                        , so as we. Without income, how could we pay for the expense of some 
                        tools? Beyond the practical situation, what is the motive to complete 
                        the project? For everyone, the workload is also a burden for full-time 
                        job workers.
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
                                July 2018
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Team</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Me (Design), Eve (Marketing), Vince (Development)
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>My role</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Project Planning, Competitive Analysis, UI/UX Design, Logo Design
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
                                Let's Test the Idea First
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                Without much experience in logo design, I took the inspiration by 
                                the geometric shape to explore the possibility of Gigbird. I hope 
                                everyone thinks about the brand with movement, energy, and music. 
                                Speaking of interface design, it's hard to achieve everything as an 
                                MVP. Even the outcome is still in the testing phase. We are looking 
                                forward to having more resources and effort to polish it better in 
                                the future. To be continued.
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'2%',paddingLeft:'4%', paddingRight:'4%'}} spacing={1}>
                <Grid item xs={12} md={6} style={{paddingRight:'0.5rem'}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <img src={gigbird01} style={{width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={gigbird03} style={{width:'100%'}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container>
                        <Grid item xs={12}>
                            <img src={gigbird02} style={{width:'100%'}}/>
                        </Grid>
                    </Grid>
                </Grid>
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
                                Though it is not my first time designing and planning a product 
                                from 0 to 1, I have more flexibility to do whatever I want in this 
                                project. As the only designer, my job is not only to make the logo 
                                or design layouts. I spent more time sharing and discussing my idea 
                                with the team. Besides, I took this chance to practice my UX skills 
                                and methods, learn by doing. Finally, we complete the app prototype. 
                                Although, without backend resources to pull the database, it is not 
                                ready to launch. The process we craft this product from scratch is 
                                a valuable experience for me.
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