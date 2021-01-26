import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import vue05 from '../../../public/vue/vue05.png';
import vue06 from '../../../public/vue/vue06.png';
import vue07 from '../../../public/vue/vue07.png';
import vue08 from '../../../public/vue/vue08.png';
import dot from '../../../public/dot.png';

export const Vue02 = () => {
    
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
                                    KICKOFF
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Start Everything from Scratch
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Initially, we just wanted to craft an MVP, which is dedicated 
                                    to a small focus group, the real movie geek. So the information 
                                    architecture we planned was simple with the necessary content. 
                                    However, no more than six months, we found there are many 
                                    possibilities for the entertainment industry. It is not only 
                                    about movies but also distributors, VOD, and forums.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'3%', paddingLeft:'5%', paddingRight:'5%'}} spacing={3}>
                    <Grid item xs={12} md={6}>
                        <img src={vue05} style={{width:'100%'}}/>
                        <br/><br/>
                        <span className={styles.imgDescription}>
                            The original information architecture for the MVP.
                        </span>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={vue06} style={{width:'100%'}}/>
                        <br/><br/>
                        <span className={styles.imgDescription}>
                            We added more ideas for phase 2 later.
                        </span>
                    </Grid>
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
                                    Movies are also Universal Languages
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Luckily, there are so many references relating to the movie, 
                                    ticket booking, and reviews. Despite the United States, 
                                    websites in Japan, China, Korea, and Taiwan all have their 
                                    features due to the different cultures. I took those good 
                                    finds and applied them accordingly to designing VUE.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8} style={{paddingLeft:'4%', paddingRight:'4%'}}>
                        <img src={vue07} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    USER STORIES
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Prioritize the Tasks
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Developing the product by SCRUM, we set the epic according to 
                                    the information architecture we defined. We organized the user 
                                    stories and tasks on Jira and categorized them into belonging 
                                    epic and phase.
                                    <br/><br/>
                                    Some user stories came to below:
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                
                    <Grid item xs={1} md={3}></Grid>
                    
                    <Grid item xs={10} md={6}>
                        
                        <Grid container spacing={3} className={styles.content}>


                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            There is a movie quite famous recently. I want to know more about its reviews.
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            I do not have time to see the movie right now. I want to add it to a watchlist then I can check later.
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            I made a movie list and want to share it with my friend.
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            What is the highest rating movie recently?
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            I am going to see a movie later, where is the nearest theater around me?
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            I just knew a movie from years ago. Is it on any streaming platforms?
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            Get some free time now, does there any recommendations about the movie watching at home?
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={1} md={3}></Grid>

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
                                    USER TESTING
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    The Definition of the Perfect Product Depends
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    After completed the prototype, we conducted user testing 
                                    sessions with 12 people. We noted down all the feedback and 
                                    bugs as tasks on Jira, and we discussed those opinions, 
                                    deciding how to optimize them. We found out most of the 
                                    feedback is personal. It is critical to narrow it down to some 
                                    common problems or push it to the later phase.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8} style={{paddingLeft:'4%', paddingRight:'4%'}}>
                        <img src={vue08} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
                </Grid>

                <Grid container style={{}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.imgDescription}>
                                    <br/>After user testing, we printed out the main page and noted our comments.
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