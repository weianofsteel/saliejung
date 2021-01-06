import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import design01 from '../../public/agoda-design/design01.png';
import design02 from '../../public/agoda-design/design02.png';
import design03 from '../../public/agoda-design/design03.png';
import design04 from '../../public/agoda-design/design04.png';
import design05 from '../../public/agoda-design/design05.png';
import { Carousel } from '../Public/Carousel.js';

export const Design01 = () => {

    return(
        <React.Fragment>

            <div className={styles.progressMain} style={{paddingTop:'10px'}}>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <img src={design01} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designTitle}>
                                    When I just joined Agoda
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designContent}>
                                    It is my first time joining such a big company. There are many events such as all 
                                    hands, year-end party, town hall, gathering all the employees to know the company 
                                    better and have fun together. I am surprised how a big organization with 5,000+ 
                                    employees makes sure everyone is on the right track and works in the same direction.
                                     I won't forget the day when my avatar was projecting on the big screen as the 
                                     5,000th employee. What a glory as a new joiner!
                                </span>
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

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designTitle}>
                                    User interview with internal & external users
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designContent}>
                                    We conducted user labs when we have enough lead time and resources for some projects.
                                     With the help of our user researchers, we worked together to plan the discussion 
                                     guide. In some sessions, we worked with the translator to make the interviewee more 
                                     comfortable to describe their experience in their native language. As designers, 
                                     we also conducted the user interview session ourselves to collect initial feedback 
                                     from internal users.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

                <div>
                    <Carousel 
                        img1={design02}
                        img2={design03}
                        caption1={'By interviewing with the observation room, the interviewees are getting more comfortable to share their experience.'}
                        caption2={"During the pandemic and WFH period, we even conducted the user interview by video call. It's harder to observe the users' behaviors and reactions."}
                    />
                </div>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2} style={{textAlign:'center'}}>
                        <span className={styles.dotLine}>
                            ·&nbsp;·&nbsp;·
                        </span>
                    </Grid>
                    <Grid item xs={5}></Grid>
                </Grid>

                <Grid container style={{marginTop:'6%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designTitle}>
                                    Internal workshop for brainstorming
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designContent}>
                                    Some projects heavily rely on technical constraints, so we get engineers to involve 
                                    in the design process as early as possible. During the pandemic and WFH period, we 
                                    even conducted brainstorming by the online tool to collect ideas, share insights, 
                                    and vote for the excited one. Most of them have been include in the milestones by 
                                    the product manager for the upcoming quarter.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

                <div>
                    <Carousel 
                        img1={design04}
                        img2={design05}
                        caption1={'It was productive to conduct the brainstorming session online, that participants were involving to drag the post-it and write down their ideas. And so environment friendly!'}
                        caption2={"During the pandemic and WFH period, we even conducted the user interview by video call. It's harder to observe the users' behaviors and reactions."}
                    />
                </div>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2} style={{textAlign:'center'}}>
                        <span className={styles.dotLine}>
                            ·&nbsp;·&nbsp;·
                        </span>
                    </Grid>
                    <Grid item xs={5}></Grid>
                </Grid>

            </div>

        </React.Fragment>
    )
}