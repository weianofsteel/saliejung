import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import design01 from '../../public/agoda-design/design01.png';
import design02 from '../../public/agoda-design/design02.png';
import dot from '../../public/dot.png';
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
                                <span className={styles.competitiveAnalysisTitle2}>
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
                                <span className={styles.competitiveAnalysisTitle2}>
                                    User interview with internal & external users
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designContent}>
                                    We conducted user labs when we have enough lead time and resources for some projects.
                                     With the help of our user researchers, we worked together to plan the discussion 
                                    guide. In some sessions, we worked with the translator to make the interviewee more 
                                    comfortable to describe their experience in their native language. As designers, we 
                                    also conducted the user interview session by ourselves to collect initial feedback 
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
                        img2={design02}
                        caption1={'By interviewing with the observation room, the interviewees are getting more comfortable to share their experience.'}
                        caption2={'By interviewing with the observation room, the interviewees are getting more comfortable to share their experience.'}
                    />
                </div>

            </div>

        </React.Fragment>
    )
}