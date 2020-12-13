import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import { Carousel3 } from './Carousel3.js';

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
                                <span className={styles.competitiveAnalysisTitle1}>
                                    TECHNICAL REVIEW
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisTitle2}>
                                    Refine the details to close the gap
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

                <div>
                    <Carousel3/>
                </div>

                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            
                            <Grid item xs={12} style={{marginTop:'10%'}}>
                                <span className={styles.competitiveAnalysisTitle1}>
                                    OUTCOME
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisTitle2}>
                                    More to be updated...
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisContent}>
                                    The project is still implementing, performance result will be updated 
                                    afterward.
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