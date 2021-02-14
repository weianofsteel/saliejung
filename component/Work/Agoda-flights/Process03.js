import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import process13 from '../../../public/process/process13.png';

export const Process03 = () => {
    return(
        <React.Fragment>

            <div className={styles.progressMain} style={{paddingTop:'3%', paddingBottom:'8%'}}>

                <Grid container>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'8%'}}>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle1}>
                                    THE PROCESS / 03
                                </span>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle2}>
                                    Evaluate
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

                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            
                            <Grid item xs={12} style={{marginTop:'10%'}}>
                                <span className={styles.designHighlight}>
                                    TECHNICAL REVIEW
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisTitle2}>
                                    Refine the Details to Close the Gap
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisContent}>
                                    When we implemented the project, there were more issues to recognize 
                                    from the supplier. It is hard to understand all the technical 
                                    constraints and define the solution accordingly. Therefore, we worked 
                                    closely with the QA engineers at the last mile to prepare all the worse 
                                    scenarios. I appreciated their effort to be the bridge between the 
                                    designer, developer, business insight, and provide suggestions at balance. 
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>
                
                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8}>
                        <div style={{backgroundColor:'white'}}>
                            <img
                                src={process13}
                                style={{width:'100%'}}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>

                <Grid container style={{marginTop:'1%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.imgDescription2}>
                                    A completed excel to list down all the CMS across the 
                                    platforms waiting for translation.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            
                            <Grid item xs={12} style={{marginTop:'10%'}}>
                                <span className={styles.designHighlight}>
                                    OUTCOME
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisTitle2}>
                                    Introduce the Core Flight Feature to Customers
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisContent}>
                                    After we launched the feature for A/B testing, over 16K users have interacted with it within one week. And we still look for more suppliers to join to offer more options. Although we reached a few people, we found only 5.02% of the users complete the flow for selecting seats. One assumption is that we place the "done" the CTA to finish the flow to the last segment on purpose. We force users to go through all the flight segments to increase the touchpoint that says some people might ignore it and fail to select the seats. Another assumption is that most of our bookings are domestic and low-cost carriers now. The need to choose seats are not crucial to customers.
                                    <br/><br/><br/>
                                    *Due to confidential restriction, please reach out for more details.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

            </div>

        </React.Fragment>
    )
}