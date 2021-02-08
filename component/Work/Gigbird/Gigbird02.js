import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import dot from '../../../public/dot.png';
import gigbird04 from '../../../public/gigbird/gigbird04.png';
import gigbird05 from '../../../public/gigbird/gigbird05.png';
import gigbird06 from '../../../public/gigbird/gigbird06.png';
import gigbird07 from '../../../public/gigbird/gigbird07.png';
import gigbird08 from '../../../public/gigbird/gigbird08.png';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        fontFamily:'Roboto',
        fontWeight:400,
        color:'#8F8F8F',
        fontSize:'0.875rem',
        lineHeight: '1.25rem',
        paddingLeft:'2%',
        "&:hover":{
            color:'black'
        }
    }
});

export const Gigbird02 = () => {

    const classes = useStyles();
    
    return (
        <React.Fragment>

            <div className={styles.progressMain}>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'12%'}}>
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

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    BRIEFING
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Everything Starts from Our Personal Pain Point
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    The idea of building an event calendar came up from the other 
                                    two members, and they invited me to join the project. Firstly, 
                                    we shared our own stories specifically. Some of our stories 
                                    were:
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                
                    <Grid item xs={1} md={3}></Grid>
                    
                    <Grid item xs={10} md={6}>
                        
                        <Grid container spacing={3} className={styles.content}>


                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            I can only get the concert information by accident, mostly on news or post sharing.
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
                                            There is no website for collecting all music events. If I only use one platform, I may miss some events.
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
                                            I just knew a photographic exhibition from the poster on the street. How could I set a reminder on my Google Calendar if I haven't decided when to go?
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={1} md={3}></Grid>

                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Then we set the project goal and roadmap by taking references 
                                    from two successful products, Genius and Eagle. Genius is the 
                                    world's biggest collection of song lyrics and musical 
                                    knowledge, starting from RAP lyrics and did great then expand 
                                    to all genres. Eagle created a new way to collect, search, and 
                                    organize your image files all in one place. Their marketing 
                                    strategy was also a success by active interaction on official 
                                    forums and testimonials. 
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container style={{paddingLeft:'5%', paddingRight:'5%'}}>
                            <Grid item xs={12} md={6}>
                                <img src={gigbird04} style={{width:'100%'}}/>
                                <Link href='https://genius.com/' underline='none' className={classes.link} style={{}}> 
                                    Genius
                                </Link>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <img src={gigbird05} style={{width:'100%'}}/>
                                <Link href='https://genius.com/' underline='none' className={classes.link}> 
                                    Eagle
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
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
                                    COMPETITIVE ANALYSIS
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Not So Competitive in Taiwan Market
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Many platforms provide ticket booking and concert discovery 
                                    services for music events, such as Songkick and Resident 
                                    Advisor. We had good models for reference. However, most 
                                    Taiwan platforms focus on ticket sales rather than long-term 
                                    relationship building on membership. The functions of 
                                    notification and UI/UX design also lack for maintaining. After 
                                    research on any possibilities, we all shared our mind map and 
                                    ideas.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8} style={{paddingLeft:'4%', paddingRight:'4%'}}>
                        <img src={gigbird06} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
                </Grid>

                <Grid container style={{}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.imgDescription}>
                                    <br/>The mind map I shared initially.
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
                                    PROJECT MANAGEMENT
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Even it's a Random Opinion, Write it Down
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Due to remote work, we made a great effort in recording 
                                    everything, from meeting notes to any ideas. Considering the 
                                    expense, we saved files on Google Drive, followed tasks, and 
                                    managed project progress on Asana (free plan).
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8} style={{paddingLeft:'4%', paddingRight:'4%'}}>
                        <img src={gigbird07} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
                </Grid>

                <Grid container style={{}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.imgDescription}>
                                    <br/>All desired requirements and user stories will first list in the Product Backlog project.
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
                                    NAMING
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    A Name To be Impressive
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Brainstorming must be fun. We made a table and thought of the 
                                    potential product name separately at first. Then we had a quick 
                                    meeting for brainstorming. We just blurted out the words 
                                    appearing in our mind and type them down. We also tried a name 
                                    generator online, looking for more inspiration. Lately, we 
                                    voted on five options, and the result came out.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8} style={{paddingLeft:'4%', paddingRight:'4%'}}>
                        <img src={gigbird08} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
                </Grid>

                <Grid container style={{}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.imgDescription}>
                                    <br/>The screenshot at the bottom right was the definition I found on Urban Dictionary. Sketches at the top right came out in my mind during brainstorming.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

            </div>

        </React.Fragment>
    )
}