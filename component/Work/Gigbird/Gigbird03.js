import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import gigbird from '../../../public/gif/gigbird.gif';
import gigbird09 from '../../../public/gigbird/gigbird09.png';
import gigbird10 from '../../../public/gigbird/gigbird10.png';
import gigbird11 from '../../../public/gigbird/gigbird11.png';
import gigbird12 from '../../../public/gigbird/gigbird12.png';
import gigbird13 from '../../../public/gigbird/gigbird13.png';
import gigbird14 from '../../../public/gigbird/gigbird14.png';

export const Gigbird03 = () => {

    return(
        <React.Fragment>

            <div className={styles.progressMain}>

                <Grid container style={{paddingTop:'2%'}}>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'12%'}}>
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

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    LOGO DESIGN
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Listening to the Bird is Chirping
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    The bird is a critical symbol for the brand. We choose orange 
                                    to present energy, power, and excitement. I combined the 
                                    elements of music, power, and bird into the logo design. The 
                                    oblique angle also brought the brand more characters.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={2} md={4}></Grid>
                    <Grid item xs={8} md={4}>
                        <img src={gigbird} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={2} md={4}></Grid>
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
                                    WIREFRAMING
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Mobile-first is the Top Priority
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    The whole picture of the calendar is quite hard to 
                                    display okay on the mobile. I created the wireframe 
                                    of different views about the calendar and discussed 
                                    with the developer frequently to make sure the 
                                    experience to browse the calendar can be functional 
                                    and smooth.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%', paddingLeft:'6%', paddingRight:'6%'}} spacing={2}>
                    <Grid item xs={6} md={3}>
                        <img src={gigbird09} style={{width:'100%'}}/>
                        <span className={styles.imgDescription} style={{marginLeft:'0.6rem'}}>Monthlys View</span>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={gigbird10} style={{width:'100%'}}/>
                        <span className={styles.imgDescription} style={{marginLeft:'0.6rem'}}>Weekly View</span>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={gigbird11} style={{width:'100%'}}/>
                        <span className={styles.imgDescription} style={{marginLeft:'0.6rem'}}>Daily View</span>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={gigbird12} style={{width:'100%'}}/>
                        <span className={styles.imgDescription} style={{marginLeft:'0.6rem'}}>Single Event</span>
                    </Grid>
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
                                    MOCKUP
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Grab Every Information about Your Interested Event
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Consider the heavy information, the interface design 
                                    uses a clean style to make users focus on the event 
                                    itself. The navigation at the bottom of the app will 
                                    always present the functions which are commonly using. 
                                    On the calendar view, the displaying content is 
                                    limited and critical to distinguish. On the Chinese 
                                    typography, the rounded font brings the brand character 
                                    light, funny, and entertainment.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%', paddingLeft:'5%', paddingRight:'5%'}}>
                    <Grid item xs={false} md={1}></Grid>
                    <Grid item xs={12} md={10}>
                        <img src={gigbird13} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={false} md={1}></Grid>
                </Grid>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'12%'}}>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle1}>
                                    THE PROCESS / 03
                                </span>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle2}>
                                    Outcome
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

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    After the engineer finished the prototype, we suspended the 
                                    project for now. Speaking of the outcome, all of us learned 
                                    something along the way. We worked remotely, completed the 
                                    tasks on schedule even no one pushes us to do so. Now I 
                                    understand how hard to run a startup without self-discipline 
                                    and pressure (if you work with a couple of friends). We 
                                    enjoyed the experience working together and looking forward 
                                    to the next opportunity.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%', paddingLeft:'8%', paddingRight:'8%'}}>
                    <Grid item xs={false} md={1}></Grid>
                    <Grid item xs={12} md={10}>
                        <img src={gigbird14} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={false} md={1}></Grid>
                </Grid>

                <div style={{marginTop:'6%'}}>&nbsp;</div>

            </div>

        </React.Fragment>
    )
}