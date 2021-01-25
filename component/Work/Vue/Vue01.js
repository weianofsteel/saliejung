import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import vueHeader from '../../../public/vue/vue-header.png';
import vue01 from '../../../public/vue/vue01.png';
import vue02 from '../../../public/vue/vue02.png';
import vue03 from '../../../public/vue/vue03.png';
import vue04 from '../../../public/vue/vue04.png';
import { LearnMore } from '../../Public/LearnMore.js';

export const Vue01 = () => {
    
    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={vueHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>

            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={5}></Grid>
                <Grid item xs={6} md={2}>
                    <div className={styles.title2}>
                        VUE Movie Database   
                    </div>
                </Grid>     
                <Grid item xs={3} md={5}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        IMDb for Asia, the Biggest Database for Movie, Celebrity, and Netflix Finder.
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
                        If we could collect all the movies into a database, what would you do? 
                        At the first meeting, the product manager asked me this question, and I 
                        immediately thought of IMDb, the website I would always check after I 
                        see a movie. However, IMDb did a great job on the database, then what 
                        else could we do? As a product based in Taiwan, the object turns out to 
                        curate the largest movie database in Mandarin, the IMDb in Asia. We also 
                        aim to create a better UI & UX design comparing to IMDb 90s style.
                        <br/><br/>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>APPROACH&nbsp;&nbsp;</span> 
                        It was a valuable experience for me to craft a product from 0 to 1. We 
                        decided to build this product by Scrum. In the beginning, all the team 
                        members collected user stories on Jira, and the product owner categorized 
                        them into a different phase. At the same time, I did lots of research and 
                        planned the content structure for each page. Then we soon had our minimum 
                        viable product (MVP). We kept doing user testing and optimized. 
                        Simultaneously, we started engaging in marketing, Facebook business page, 
                        and looking for business cooperation.
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
                                Jan 2017 - June 2018
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Team</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Web Designer (1), Visual Designer (1), Product Manager (1), Engineers (3), Marketing Specialist (1)
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>My role</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Project Planning, Competitive Analysis, Web Design, Media Kit, Landing Page, Marketing Materials
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
                                Way Beyond MVP
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                With the passion for movies, we cannot help to introduce 
                                as many as features we can. The UI/UX design might not 
                                polish that well, but we want VUE to fulfill all the user 
                                desires. We hope that VUE could be a platform that does 
                                everything about movies. You can rate movies, create a 
                                watchlist, leave reviews, read gossip news, and even book 
                                a ticket.
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container spacing={6} style={{marginTop:'4rem', paddingLeft:'4%', paddingRight:'4%'}}>
                <Grid item xs={6} md={3}>
                    <img src={vue01} style={{width:'100%'}}/>
                    <br/><br/>
                    <span className={styles.imgDescription}>
                        Recent Ratings
                    </span>
                </Grid>
                <Grid item xs={6} md={3}>
                    <img src={vue02} style={{width:'100%'}}/>
                    <br/><br/>
                    <span className={styles.imgDescription}>
                        Add to Movie List
                    </span>
                </Grid>
                <Grid item xs={6} md={3}>
                    <img src={vue03} style={{width:'100%'}}/>
                    <br/><br/>
                    <span className={styles.imgDescription}>
                        Discussion & Review
                    </span>
                </Grid>
                <Grid item xs={6} md={3}>
                    <img src={vue04} style={{width:'100%'}}/>
                    <br/><br/>
                    <span className={styles.imgDescription}>
                        Movie Times & Tickets
                    </span>
                </Grid>
            </Grid>

            <Grid container style={{marginTop:'8%'}}>
                
                <Grid item xs={5}></Grid>
                <Grid item xs={2}>
                    <h3 className={styles.reflection}>
                        Reflection
                    </h3>
                </Grid>
                <Grid item xs={5}></Grid>
            
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
                                As a web designer working at a digital agency, the budget is 
                                the critical condition of any project. I was lucky to be part 
                                of the KINJO project with such a large scope. During production,
                                I spent much time discussing with front-end developers and 
                                find that there are still processes and designs we can improve.
                                <br/><br/>
                                For example, I did not think of interaction much before. Even 
                                I had some references in hand, I did not organize them well 
                                and only find them out while developers ask. So we tried FSM 
                                (Finite-state machine) for the first time and noted other 
                                details on Confluence. Developers also left their questions on 
                                it for more discussion. Still not familiar with the working 
                                process, but it was a good start at least.
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