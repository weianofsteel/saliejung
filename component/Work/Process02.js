import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import process06 from '../../public/process/process06.png';
import process07 from '../../public/process/process07.png';
import process08 from '../../public/process/process08.png';
import process09 from '../../public/process/process09.png';
import process10 from '../../public/process/process10.png';
import { Carousel2 } from '../Work/Carousel2.js';

export const Process02 = () => {
    return(
        <React.Fragment>

            <div className={styles.progressMain} style={{paddingTop:'3%'}}>

                <Grid container>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'8%'}}>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle1}>
                                    THE PROCESS / 02
                                </span>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle2}>
                                    Design & Iterate
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

                <Grid container style={{marginTop:'1%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            
                            <Grid item xs={12} style={{marginTop:'10%'}}>
                                <span className={styles.competitiveAnalysisTitle1}>
                                    PRELIMINARY EXPLORATIONS
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisTitle2}>
                                    Early concepts to gather feedback and direction
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisContent}>
                                    The interface might be the most challenging part of this project. For 
                                    mobile, it is even harder to display so much information on the little 
                                    tiny screen. In the beginning, I focused on the info structure and the 
                                    overall flow.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <div style={{backgroundColor:'white'}}>
                            <img
                                src={process06}
                                style={{width:'100%'}}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            
                            <Grid item xs={12} style={{marginTop:'10%'}}>
                                <span className={styles.competitiveAnalysisTitle1}>
                                    DESIGN ITERATION
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisTitle2}>
                                    Deep dive into the details
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisContent}>
                                    After confirming the flow, I put more effort into the exploration of 
                                    the selection process. There are flight segments, passenger selection, 
                                    seat legend, seat map, and the price update. We were looking for an 
                                    approach to make the displaying more efficient, and explain clear on 
                                    what's the current state of the process.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

                <div style={{marginTop:'5%', marginLeft:'2%', marginRight:'2%'}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} lg={3} style={{textAlign:'center'}}>
                            <div className={styles.gallery1}>
                                <img src={process07}/>
                            </div>
                            <span className={styles.imgDescription3}>
                                Condensed legend makes the widest displaying on the map.
                            </span>    
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} style={{textAlign:'center'}}>
                            <div className={styles.gallery1}>
                                <img
                                    src={process08}
                                />
                            </div>
                            <span className={styles.imgDescription3}>
                                Tab UI on the passenger selection might cause the problem for group travelers.
                            </span>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} style={{textAlign:'center'}}>
                            <div className={styles.gallery1}>
                                <img
                                    src={process09}
                                />
                            </div>
                            <span className={styles.imgDescription3}>
                                The different state of passenger selection button is hard to recognize at 
                                the first glance.
                            </span>
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} style={{textAlign:'center'}}>
                            <div className={styles.gallery1}>
                                <img
                                    src={process10}
                                />
                            </div>
                            <span className={styles.imgDescription3}>
                                Showing initial for the selected seating might not be familiar to 
                                non-English speaker countries.
                            </span>
                        </Grid>
                    </Grid>
                </div>

                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            
                            <Grid item xs={12} style={{marginTop:'10%'}}>
                                <span className={styles.competitiveAnalysisTitle1}>
                                    FINAL DESIGN
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisTitle2}>
                                    Free seats for launch and the next phase
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisContent}>
                                    Based on the timeline and the development effort, we did compromise to 
                                    simplify the process as much as possible. The most challenging part 
                                    must be the worst case for multiple segments and multiple stops flight, 
                                    the design also should be scalable to the paid options. 
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

                <div>
                    <Carousel2/>
                </div>

            </div>

        </React.Fragment>
    )
}