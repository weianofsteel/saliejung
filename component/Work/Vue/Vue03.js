import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import vue09 from '../../../public/vue/vue09.png';
import vue10 from '../../../public/vue/vue10.png';
import vue11 from '../../../public/vue/vue11.png';
import vue12 from '../../../public/vue/vue12.png';
import vue13 from '../../../public/vue/vue13.png';
import dot from '../../../public/dot.png';
import Link from '@material-ui/core/Link';
import handleViewport from 'react-in-viewport';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        fontFamily:'Roboto',
        fontWeight:400,
        color:'#8F8F8F',
        fontSize:'1rem',
        letterSpacing:'1px',
        "&:hover":{
            color:'black'
        }
    }
});

const Block = (props) => {
    
    const { forwardedRef, visible } = props;

    useEffect(()=>{
        if(visible == true) {
            forwardedRef.current.play();
        } else {
            forwardedRef.current.pause();
        }
    },[visible])

    return(
        <React.Fragment>
            {visible == true ?
                <video ref={forwardedRef} width='100%' controls autoPlay muted>
                    <source type="video/mp4" src='/video/vue.mp4'/>
                </video>
            :
                <video ref={forwardedRef} width='100%' controls>
                    <source type="video/mp4" src='/video/vue.mp4'/>
                </video>
            }
        </React.Fragment>
    )
}

const ViewportBlock = handleViewport(Block);

export const Vue03 = () => {

    const [ visible, setVisible ] = React.useState(false);

    const classes = useStyles();
    
    return(
        <React.Fragment>
            
            <div className={styles.progressMain} style={{paddingTop:'5%'}}>

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

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    FINAL DESIGN
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Fulfill All Your Needs about Movies
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Beyond the imagination, we finally launched the website with 
                                    most of the fundamental features in Jan 2018. Users can add 
                                    their favorite movie to a watchlist and see other users’ 
                                    ratings. They can discuss and share their opinions after 
                                    watching a movie.
                                    <br/><br/> 
                                    More than that, we cooperated with two theaters so you can 
                                    directly book a movie ticket through VUE. We have curated the 
                                    largest movie database that contains over 350,000 movies and 2 
                                    million cast data in Mandarin. So far, the website of page 
                                    views hit 100 users in real-time and still growing.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'2%',paddingLeft:'4%', paddingRight:'4%'}} spacing={1}>
                    <Grid item xs={12} md={6} style={{paddingRight:'0.5rem'}}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <img src={vue09} style={{width:'100%'}}/>
                            </Grid>
                            <Grid item xs={12}>
                                <img src={vue11} style={{width:'100%'}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12}>
                                <img src={vue10} style={{width:'100%'}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    LAUNCH CAMPAIGN
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Big Announcement
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    It is time to introduce the website to more people. We planned 
                                    a marketing campaign on Facebook, which the goal is to let 
                                    people know what VUE can do for them and getting more exposure. 
                                    Considering the engagement rate and affinity categories, we 
                                    created a video to reach more audiences. We spent some 
                                    marketing budget for the campaign, and it attracted page likes 
                                    and increased page views on the website.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8} style={{paddingLeft:'5%', paddingRight:'5%'}}>
                        <ViewportBlock 
                            onEnterViewport={()=>{setVisible(true);}}
                            onLeaveViewport={()=>{setVisible(false);}}
                            visible={visible}
                        />
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
                                    MEDIA KIT
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    One More Thing
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    In mid-2017, we received an inquiry for cooperation from 
                                    Malaysia. For the first time, I researched to know more about 
                                    the digital experience in South Asia. Most of the online 
                                    experience is old-style and hard to use, except for some 
                                    websites such as&nbsp;
                                    <Link href='https://in.bookmyshow.com/explore/home/mumbai' underline='none' className={classes.link}> 
                                        BookMyShow  
                                    </Link> 
                                    &nbsp;in India. We took the chance and 
                                    cooperated with a local marketing company in Malaysia, which 
                                    started by translating VUE into Malay.
                                    <br/><br/>
                                    Besides, our marketing team actively looked for cooperation 
                                    opportunities with more theatres. We created a complete media 
                                    kit to explain our idea, our development background, all the 
                                    UI and functional design, and the potential possibility of VUE. 
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8} style={{paddingLeft:'4%', paddingRight:'4%'}}>
                        <img src={vue12} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
                </Grid>

                <Grid container style={{}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.imgDescription}>
                                    <br/>Take a look at the&nbsp; 
                                    <Link href="/vue_media-kit_2018.pdf" target="_blank" className={styles.imgDescriptionLink} style={{color:'#8F8F8F'}}>media kit</Link> 
                                    &nbsp;if you are interested.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle1}>
                                    THE PROCESS / 03
                                </span>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle2}>
                                    Next Step
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
                
                    <Grid item xs={1} md={3}></Grid>
                    
                    <Grid item xs={10} md={6}>
                        
                        <Grid container spacing={3} className={styles.content}>

                            <Grid item xs={12}>
                                <span className={styles.collectInsightContent}>
                                    Due to the fast development of VUE, we had started to optimize UI, 
                                    UX design, and plan for new sections for a few months. Our main 
                                    objects are:
                                </span>
                            </Grid>

                            <Grid item xs={12} style={{marginTop:'3%'}}>
                                <Grid container>
                                    <Grid item xs={1} className={styles.dotAlign}>
                                        <img src={dot}/>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <span className={styles.collectInsightContent}>
                                            A landing page to let people know every magic on VUE in a short time
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
                                            A new page for VOD services (still relating to the movie and TV shows)
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
                                            More engagement in the movie reviews and discussion (maybe forum)
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
                                            More sociable between users (those movie geeks)
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={1} md={3}></Grid>

                </Grid>

                <Grid container style={{marginTop:'3%'}}>

                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <img src={vue13} style={{width:'100%'}} />
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>

                </Grid>

                <div style={{marginTop:'4%'}}>&nbsp;</div>

            </div>

        </React.Fragment>
    )
}