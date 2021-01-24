import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import process01 from '../../public/process/process01.png';
import process02 from '../../public/process/process02.png';
import process03 from '../../public/process/process03.png';
import process04 from '../../public/process/process04.png';
import process05 from '../../public/process/process05.png';
import dot from '../../public/dot.png';
import { Carousel } from '../Public/Carousel.js';

export const Process01 = () => {

    return(
        <React.Fragment>

            <div className={styles.progressMain}>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
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
                    <Grid item xs={2} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
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
                                    <span className={styles.boldContent}>
                                        &nbsp;various scenarios, features, flow, chance for optimization, 
                                        and potential risks
                                    </span>
                                    , as a starting point to explore how we could shape the product and 
                                    define the scope of MVP.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

                <div>
                    <Carousel 
                        imgsrc={[process01,process02]}
                        caption={[
                            'Noted the features across the process. Purple stands for fundamental function, yellow stands for the uncommon trait comparing to other products.',
                            'From simple selection to specific assigning seats, there are many approaches to achieve the needs.'
                        ]}
                    />
                </div>

                <Grid container style={{marginTop:'2%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            
                            <Grid item xs={12} style={{marginTop:'10%'}}>
                                <span className={styles.designHighlight}>
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
                                    Since it was an entirely new feature, and we still have 
                                    enough lead time. We decided to do the user interview to 
                                    collect more insights from the real users. The research 
                                    plan, discussion guides, and all five sessions were all 
                                    conducted by the designers. 
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                
                    <Grid item xs={1} md={3}></Grid>
                    
                    <Grid item xs={10} md={6}>
                        
                        <Grid container spacing={3} className={styles.content}>
                            
                            <Grid item xs={12}>
                                <span className={styles.researchTitle}>
                                    RESEARCH GOAL
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            Define the scope of MVP in the first phase
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{marginTop:'5%'}}>
                                <span className={styles.researchTitle}>
                                    KEY QUESTIONS
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            What is the intention to select a seat?
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
                                            What kind of information is not necessary to help travelers make decisions? 
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
                                            What can they do without when looking at all the content that is on the 
                                            page?
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
                                            What kind of considerations goes into selecting the seats?
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
                                            For those not selecting seats during booking, would they 
                                            choose it during post-booking or online check-in?
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
                                            At which point during the booking would the customer prefer to choose the 
                                            seats?
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
                                            In what situation would the travelers pay for the seats?
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{marginTop:'5%'}}>
                                <span className={styles.researchTitle}>
                                    PARTICIPANTS OVERVIEW
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            Four participants preferred booking with airlines depends on 
                                            the destination and the Frequent-flyer program they have.
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
                                            Three participants mentioned that they usually book through the 
                                            desktop.
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={1} md={3}></Grid>

                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                
                    <Grid item xs={1} md={3}></Grid>
                    
                    <Grid item xs={10} md={6}>
                        
                        <Grid container className={styles.content}>
                            <Grid item xs={12}>
                            <div style={{width:'100%'}}>
                                <img
                                    src={process03}
                                    style={{width:'100%'}}
                                />
                            </div>
                            </Grid>
                            <Grid item xs={12} style={{marginLeft:'1%'}}>
                                <span className={styles.imgDescription2}>
                                    We interviewed by video call due to work-from-home policy when 
                                    the COVID-19 hit. It is tricky to observe behavior outside of 
                                    the screen since participants only shared their mobile screen
                                </span>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item xs={1} md={3}></Grid>
                
                </Grid>

                <Grid container style={{marginTop:'5%'}}>
                
                    <Grid item xs={1} md={3}></Grid>
                    
                    <Grid item xs={10} md={6}>
                        
                        <Grid container spacing={3} className={styles.content}>
                            
                            <Grid item xs={12}>
                                <span className={styles.researchTitle}>
                                    FIND-OUTS
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            When the seat map is clear enough in terms of information and UI, the participants 
                                            didn't pay attention to the seat legend. However, it is still critical to explain 
                                            different options if they want to check more details.
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
                                            They all have precise preferences on seat selection: (1) 
                                            Front (The very front of the available options) (2) 
                                            Window/Aisle/ No middle (3) Legroom (4) Distance to the 
                                            toilet/exit (especially for kids and elder)
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
                                            The intention to choose seats during booking is the same 
                                            for everyone: (1) If free (2) If travel with family (kids, 
                                            parents) or friends (sit together) (3) Long-haul flights 
                                            (3.5 hrs+) (4) Crowded flights
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
                                            When landing on the selection page, it always takes a long time that seems to have 
                                            crashed.
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} style={{marginTop:'5%'}}>
                                <span className={styles.researchTitle}>
                                    NEXT STEP
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            Make sure the UI of the seat map is clear enough to recognize
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
                                            When offering various options of seats, do clarify the difference or benefits of 
                                            the seats
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
                                            Make sure we display the first available seat visible without scroll when landing on the 
                                            page
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
                                            Display clearly which seats belong to which passenger
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
                                            Consider the special request for some specific types of 
                                            traveler, such as kids, elderly, business and disabled
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
                                            Reminder for selecting seats when it's free
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
                                            Reminder for group traveler
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
                                            Allow users to choose seats after booked
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
                                            Make sure we display clear feedback for loading
                                        </span>
                                    </Grid>
                                </Grid>
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
                                src={process04}
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
                                    By features audit, we organized the potential 
                                    features in terms of frequency adoption (amount 
                                    of people using them). Post-its in the dark blue 
                                    area were the actions been used by the 
                                    participants the most. We also categorized all 
                                    the behaviors and insights into implementation 
                                    stages as a preliminary analysis.
                                </span>
                            </Grid>
                            
                            <Grid item xs={12} style={{marginTop:'10%'}}>
                                <span className={styles.designHighlight}>
                                    RESEARCH SYNTHESIZE
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisTitle2}>
                                    Define the Bare Minimum of the Project
                                </span>
                            </Grid>

                            <Grid item xs={12}>
                                <span className={styles.competitiveAnalysisContent}>
                                    Considering the dependency on the supplier and 
                                    the development effort, we're looking for the 
                                    MVP version of the solution to reduce the risk 
                                    during implementation. Hence, after the research 
                                    phase, we broke down all the features and 
                                    requirements into phased tasks.
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
                                src={process05}
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
                                    We listed out the potential design criteria and 
                                    discussed the project scope with the product 
                                    manager.
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