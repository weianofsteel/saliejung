import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import flights01 from '../../public/flights01.png';
import flights02 from '../../public/flights02.png';
import flights03 from '../../public/flights03.png';
import flights04 from '../../public/flights04.png';
import flights05 from '../../public/flights05.png';
import dot from '../../public/dot.png';
import { Process01 } from './Process01.js';


export const AgodaFlights = () => {

    return(
        <React.Fragment>
            
            <Grid container className={styles.img01}>
                <Grid item xs={5}></Grid>
                <Grid item xs={2}>
                    <img src={flights01}/>
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>
            
            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={5}></Grid>
                <Grid item xs={2}>
                    <div className={styles.title2}>
                        Agoda Flights     
                    </div>
                </Grid>     
                <Grid item xs={5}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <h2 className={styles.title3}>
                        Complete your journey with seat selection    
                    </h2>
                    <h2 className={styles.title4}>§</h2>
                </Grid>     
                <Grid item xs={3}></Grid>
            </Grid>
            
            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <p className={styles.article}>
                        <span style={{fontWeight:700}}>CONTEXT & CHALLENGE&nbsp;</span>
                        In early 2020, Agoda Flights has launched for six months achieving 1K daily 
                        booking. We started transferring our focus from little enhancement to large-scale 
                        features, aiming to become a more mature product to fulfill all the customers' needs. 
                        Compared to the competitors, there is still a long way to chase.
                        <br/><br/>
                        Seat selection is one of the core features. Not to mention that it is a sophisticated 
                        project, we also have a high dependency on the supplier to define the scope and 
                        confirm the data they could provide. Therefore, we launched the feature with the 
                        free selection that it certainly reduces the risk of implementation. From a scalable 
                        perspective, we still consider the paid seats to accommodate the scenario afterward.
                    </p>
                </Grid>     
                <Grid item xs={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Grid container spacing={5} className={styles.content}>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Timeline</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                March to April 2020 (3 weeks)
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Team</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Designers (2), Product Manager (2), Engineers (12+), QA (2)
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>My role</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Competitive Analysis, User interview, Research, UI/UX Design (App)
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
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
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Grid container spacing={3} className={styles.content}>
                        <Grid item xs={12}>
                            <span className={styles.designHighlight}>
                                DESIGN HIGHLIGHT
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightTitle}>
                                Clarity of the information with sophisticated details
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                The experience of selecting seats involving a bunch of information, from 
                                the flight segment, passenger types, seating restrictions & fare, and the 
                                facilities on the plane. It is critical to display all the information 
                                clearly to help the customer making the decision based on the complexity of 
                                their personal preference. Therefore, we aimed to surface the bare minimum 
                                of the information to be straightforward and direct to simplify the 
                                decision-making process.
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>

            <div style={{marginTop:'5%', marginLeft:'6%', marginRight:'6%'}}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div className={styles.gallery1} style={{height:'24rem'}}>
                                    <img 
                                        src={flights02}
                                        style={{marginTop:'4rem', marginLeft:'10rem'}}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={styles.gallery1} style={{height:'24rem'}}>
                                    <img 
                                        src={flights04}
                                        style={{marginTop:'2rem', marginLeft:'3rem', width:'90%', height:'80%'}}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={styles.gallery1} style={{height:'48.5rem'}}>
                            <img
                                src={flights03}
                                style={{marginTop:'3.5rem', marginLeft:'15rem'}}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>

            <Grid container style={{marginTop:'8%'}}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Grid container spacing={3} className={styles.content}>
                        <Grid item xs={12}>
                            <span className={styles.designHighlight}>
                                DESIGN HIGHLIGHT
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightTitle}>
                                Directly interacting to make decisions with ease
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                While the customer is considering the seating between price, position, and 
                                preference, it guides them better with fluent interaction and real-time 
                                feedback. When it comes to group traveler and multiple slices, we designed 
                                many details such as updating the subtotal, the attribute of seats and 
                                zooming to help them complete the tasks faster.   
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <div className={styles.gallery1} style={{height:'42rem'}}>
                        <img 
                            src={flights05}
                            style={{marginTop:'2.5rem', marginLeft:'19rem'}}
                        />
                    </div>
                    <br/>
                    <span className={styles.imgDescription}>
                        Simple and slick to keep the users focus on decision making.
                    </span>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'8%'}}>
                
                <Grid item xs={3}></Grid>
                
                <Grid item xs={6}>
                    
                    <Grid container spacing={3} className={styles.content}>
                        
                        <Grid item xs={12}>
                            <h3 className={styles.reflection}>
                                Reflection
                            </h3>
                        </Grid>

                        <Grid item xs={12} style={{textAlign:'center'}}>
                            <span className={styles.dotLine}>
                                ·&nbsp;·&nbsp;·
                            </span>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} className={styles.dotAlign}>
                                    <img src={dot}/>
                                </Grid>
                                <Grid item xs={11}>
                                    <span className={styles.designHighlightContent}>
                                        Benchmarking helps (a lot) for introducing a new feature - Especially for 
                                        the later progress, there are many little fine-tune needing a quick decision
                                        . When engineers were building it, I already shifted my focus to other 
                                        projects. It helps to recall the memory from a couple of screenshots and the 
                                        research summary.  
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
                                    <span className={styles.designHighlightContent}>
                                        Benchmarking helps (a lot) for introducing a new feature - Especially for 
                                        the later progress, there are many little fine-tune needing a quick decision
                                        . When engineers were building it, I already shifted my focus to other 
                                        projects. It helps to recall the memory from a couple of screenshots and the 
                                        research summary.  
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
                                    <span className={styles.designHighlightContent}>
                                        Benchmarking helps (a lot) for introducing a new feature - Especially for 
                                        the later progress, there are many little fine-tune needing a quick decision
                                        . When engineers were building it, I already shifted my focus to other 
                                        projects. It helps to recall the memory from a couple of screenshots and the 
                                        research summary.  
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid item xs={3}></Grid>

            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={5}></Grid>
                <Grid item xs={2} style={{textAlign:'center'}}>
                    <span className={styles.scrollDown}>
                        scroll down to learn more
                    </span>
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>

            <div>
                <Process01/>
            </div>
            
        </React.Fragment>
    )
}