import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import Link from '@material-ui/core/Link';
import flights01 from '../../public/flights01.png';


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
            
        </React.Fragment>
    )
}