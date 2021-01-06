import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import design06 from '../../public/agoda-design/design06.png';
import design07 from '../../public/agoda-design/design07.png';
import design08 from '../../public/agoda-design/design08.png';
import design09 from '../../public/agoda-design/design09.png';
import design10 from '../../public/agoda-design/design10.png';
import { Carousel } from '../Public/Carousel.js';
import { CarouselMultiple } from '../Public/CarouselMultiple.js';

export const Design02 = () => {

    return(
        <React.Fragment>
            
            <div className={styles.progressMain} style={{paddingTop:'6%'}}>
                
                <Grid container>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designTitle}>
                                    Design System is everyone's responsibility
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designContent}>
                                    <br/>
                                    The design system is new to the Agoda Design team. Some 
                                    dedicated designers built the fundamental elements and 
                                    shared library, still heavily rely on the rest of the 
                                    designers from other teams to contribute and maintain the 
                                    system for future needs. I'm lucky to be the first 
                                    designer to introduce a new component and collaborate 
                                    with the design system team to compose the comprehensive 
                                    documentation, such as definition, dos, and don'ts, and 
                                    variations of the component. We also figured out the 
                                    working process along the way and shared the experience in 
                                    design all-hands.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <img src={design06} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={2}></Grid>
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

                <Grid container style={{marginTop:'6%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designTitle}>
                                    TDC Recruitment program
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designContent}>
                                    <br/>
                                    It is a valuable opportunity! I co-host a recruitment 
                                    program with another designer to recruit talents by 
                                    coaching and mentoring the participants to complete the 
                                    design challenges. At the end of the evaluation, we 
                                    offered a scholarship to those who achieve the expectation. 
                                    We partner with Thammasat Design Center, a Thailand-based 
                                    design institution that provides various design-related 
                                    courses, to reach out to a broaden designers community in 
                                    Bangkok. 
                                    <br/><br/>
                                    From participants' feedback, we are glad to hear that they 
                                    learn something out of design skills, but also communication, 
                                    research methods, and measurable testing. I learn a lot along 
                                    the way by providing feedback and guide direction. It was also 
                                    my first time giving a public speech about design topics and 
                                    let more people know about Agoda Design. Many people got 
                                    interested and came to have a chat after my sharing.
                                    <br/><br/>
                                    After two batches of the program, we handed it over to other 
                                    designers continuing to coach the potential talents, and 
                                    it becomes a regular program within the Agoda Design team.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

                <div style={{paddingBottom:'8%'}}>
                    <CarouselMultiple
                        imgsrc={[design07, design08, design09, design10]}
                        caption={[
                            'I gave a speech to 20 students at TDC, talked about the working process, design projects, and culture in Agoda Design.',
                            'In the first batch, we had two participants. One comes from a product management background, and the other one is a visual designer.',
                            'We conducted the second batch of the program offline due to WFH policy',
                            'I joined one class of the behavioral design by TDC, and participants in the exercises with the students.'
                        ]}
                    />
                </div>

            </div>

        </React.Fragment>
    )
}