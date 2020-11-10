import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import progress01 from '../../public/progress01.png';
import dot from '../../public/dot.png';

export const Process01 = () => {
    return(
        <React.Fragment>

            <div className={styles.progressMain}>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'8%'}}>
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
                    <Grid item xs={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisTitle1}>
                                    COMPETITIVE ANALYSIS
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisTitle2}>
                                    Feature comparison to understand the industry standard
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisContent}>
                                    At the beginning of the kick-off, we didn't receive well-defined 
                                    requirements, and the back-end engineers were figuring out the data 
                                    from the suppliers. Designers started from benchmarking to understand 
                                    the fundamental functions of seat selection. Based on the feature 
                                    comparison, I noted down the 
                                    <span style={{fontWeight:700}}>
                                        &nbsp;various scenarios, features, flow, chance for optimization, 
                                        and potential risks
                                    </span>
                                    , as a starting point to explore how we could shape the product and 
                                    define the scope of MVP.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <div style={{backgroundColor:'white',height:'40rem'}}>
                            <img
                                src={progress01}
                                style={{width:'100%', height:'100%'}}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid container style={{marginTop:'2%'}}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={3} className={styles.content}>
                            
                            <Grid item xs={12}>
                                <span className={styles.imgDescription2}>
                                    Noted the features across the process. Purple stands for fundamental function, 
                                    yellow stands for the uncommon trait comparing to other competitors
                                </span>
                            </Grid>
                            
                            <Grid item xs={12} style={{marginTop:'10%'}}>
                                <span className={styles.competitiveAnalysisTitle1}>
                                    IN-DEPTH INTERVIEW
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisTitle2}>
                                    Collect insights from users
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisContent}>
                                    Since it's an entirely new feature, and we still have enough lead time. 
                                    We decided to do the user interview to collect more insights from the 
                                    users. The research plan, discussion guides, and all five sessions were 
                                    all conducted by the designers. 
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                
                <Grid item xs={3}></Grid>
                
                <Grid item xs={6}>
                    
                    <Grid container spacing={3} className={styles.content}>
                        
                        <Grid item xs={12}>
                            <span className={styles.researchTitle}>
                                RESEARCH GOAL
                            </span>
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

            </div>

        </React.Fragment>
    )
}