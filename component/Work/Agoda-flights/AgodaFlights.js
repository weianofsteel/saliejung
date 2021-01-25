import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import flights02 from '../../../public/agoda-flights/flights02.png';
import flights03 from '../../../public/agoda-flights/flights03.png';
import flights04 from '../../../public/agoda-flights/flights04.png';
import dot from '../../../public/dot.png';
import { Process01 } from './Process01.js';
import { Process02 } from './Process02.js';
import { Process03 } from './Process03.js';
import { BottomNavbar} from '../../Public/BottomNavbar.js';
import flightGif from '../../../public/gif/flight.gif';
import flightHeader from '../../../public/agoda-flights/flight-header.png';
import { PageLoader } from '../../Public/PageLoader.js';
import { LearnMore } from '../../Public/LearnMore.js'; 

export const AgodaFlights = () => {

    return(
        <React.Fragment>
            
            <PageLoader/>
            
            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={flightHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>

            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={5}></Grid>
                <Grid item xs={6} md={2}>
                    <div className={styles.title2}>
                        Agoda Flights     
                    </div>
                </Grid>     
                <Grid item xs={3} md={5}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        Complete your journey with seat selection    
                    </h2>
                    <h2 className={styles.title4}>§</h2>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>
            
            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.03rem'}}>CONTEXT & CHALLENGE&nbsp;&nbsp;</span>
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
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
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
                <Grid item xs={false} md={3}></Grid>
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
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
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
                                the flight segment, passenger types, seating restrictions & fare, and 
                                facilities on the plane. It is critical to display all the information 
                                clearly to help the customer making the decision based on the complexity of 
                                their personal preference. Therefore, we aimed to surface the bare minimum 
                                of the information to be straightforward and direct to simplify the 
                                decision-making process.
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <div style={{marginTop:'5%', marginLeft:'6%', marginRight:'6%'}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div className={styles.gallery1}>
                                    <img 
                                        src={flights02}
                                        style={{width:'100%'}}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={styles.gallery1}>
                                    <img 
                                        src={flights04}
                                        style={{width:'100%'}}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={styles.gallery1} style={{height:'100.15%'}}>
                            <img
                                src={flights03}
                                style={{width:'100%'}}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>

            <Grid container style={{marginTop:'8%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3} className={styles.content}>
                        <Grid item xs={12}>
                            <span className={styles.designHighlight}>
                                DESIGN HIGHLIGHT
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightTitle}>
                                Directly Interaction to Help Make Decisions
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                While the customer considering the seating between price, 
                                position, and preference, it guides them better with fluent 
                                interaction and real-time feedback. When it comes to group 
                                travelers and multiple slices, we designed many details such 
                                as updating the subtotal, the attribute of seats, and zooming 
                                to help them complete the tasks faster.  
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <div style={{marginTop:'5%', marginLeft:'6%', marginRight:'6%'}}>
                <Grid container style={{marginTop:'5%'}} spacing={1}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8}>
                        <div className={styles.gallery1}>
                            <img 
                                src={flightGif}
                                style={{width:'100%'}}
                            />
                        </div>
                        <br/>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
                </Grid>
            </div>

            <Grid container style={{}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3} className={styles.content}>
                        <Grid item xs={12}>
                            <span className={styles.imgDescription}>
                                Simple and slick to keep the users focus on decision making.
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'8%'}}>
                
                <Grid item item xs={false} md={3}></Grid>
                
                <Grid item xs={12} md={6}>
                    
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
                                    <img src={dot} />
                                </Grid>
                                <Grid item xs={11}>
                                    <span className={styles.designHighlightContent}>
                                        <span className={styles.boldContent}>Benchmarking helps (a lot) for introducing a new feature -</span> Especially for 
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
                                        <span className={styles.boldContent}>User interview to collect insights -</span> 
                                        We rarely have the chance to conduct formal user 
                                        interviews every time. For such a complex new feature 
                                        like seat selection, it is undoubtedly helpful to 
                                        collect insights across the users as much as possible. 
                                        There are also convincing proofs to back up design 
                                        decisions based on real user behavior.  
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
                                        <span className={styles.boldContent}>QA engineers, the hidden figure -</span> 
                                        The most satisfying experience I have for this project
                                         is building a strong relationship with QA engineers. 
                                         Seat selection is a large-scale project with many 
                                         industry knowledge, business goal, and development 
                                         restriction to consider. I was grateful for the QA 
                                         engineers being a trusting member of the team. The most 
                                         satisfying experience I have for this project is building 
                                         a strong relationship with QA engineers. Seat selection is 
                                         a large-scale project with many industry knowledge, business 
                                         goal, and development restriction to consider. I was grateful 
                                         for the QA engineers being a trusting member of the team.
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
                                        <span className={styles.boldContent}>Ask for feedback from the engineers -</span> 
                                        For a more 
                                        complex new feature, we need to design more feedback 
                                        to smooth the experience. We think about micro 
                                        animations to enhance this part to the users. 
                                        Sometimes, ideas might fly too far away from the 
                                        goal. I appreciated that our engineers are 
                                        collaborated to join the design discussion and share 
                                        feedback from the technical side. We save lots of 
                                        time on delivering a too fancy solution then start 
                                        over again. With team collaboration, we find a better 
                                        balance between realistic, useful, and lovely 
                                        solution.
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
                                        <span className={styles.boldContent}>User testing for enhancement -</span> 
                                        When it was close to the later stage of the project, 
                                        we started WFH due to COVID-19. Unfortunately, we 
                                        were not getting the chance to conduct the user 
                                        testing session, which I believe that it will be 
                                        super helpful for iteration and future phase.
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>

                </Grid>

                <Grid item item xs={false} md={3}></Grid>

            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={2} md={4}></Grid>
                <Grid item xs={8} md={4} style={{textAlign:'center'}}>
                    <LearnMore scrollY={5800} />
                </Grid>
                <Grid item xs={2} md={4}></Grid>
            </Grid>

            <div>
                <Process01/>
            </div>

            <div>
                <Process02/>
            </div>

            <div>
                <Process03/>
            </div>

            <div style={{marginTop:'6%'}}>
                <BottomNavbar/>
            </div>
            
        </React.Fragment>
    )
}