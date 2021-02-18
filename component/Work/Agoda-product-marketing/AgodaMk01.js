import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import agodaMkHeader from '../../../public/agodaMk/agodaMk-header.jpg';
import { Carousel } from '../../Public/Carousel.js';
import mk01 from '../../../public/gif/mk01.gif';
import mk02 from '../../../public/gif/mk02.gif';
import LockIcon from '@material-ui/icons/Lock';

export const AgodaMk01 = () => {


    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={agodaMkHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>

            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={1} md={4}></Grid>
                <Grid item xs={10} md={4}>
                    <div className={styles.title2}>
                        Agoda Product Marketing    
                    </div>
                </Grid>     
                <Grid item xs={1} md={4}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        Get a Better Offer by Taking Little Risks   
                    </h2>
                    <h2 className={styles.title4}>§</h2>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>OBJECTIVE&nbsp;&nbsp;</span>
                        This project is an enhancement project based on an existing feature, which 
                        we offer a super valuable offer without identifying the hotel name and room 
                        details. We can only show the limited information like hotel star rating, 
                        location, and review rating. There are only 80~100 bookings per day that come 
                        from this feature. With the new deal with some hotels, we can display more 
                        information to help customers decide, and expect having more bookings.
                    </p>
                    <br/>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>CHALLENGE&nbsp;&nbsp;</span>
                        With more details to show, it is still tricky to not cross the line. The 
                        requirement is to show three offers but not identify which one is the 
                        explicit hotel the customers will get until they complete the booking. To 
                        explain the rule itself is tricky enough, and we want to win customers' 
                        trust. We also face technical constraints on displaying information across 
                        the funnel.
                    </p>
                    <br/>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>RESPONSIBILITIES&nbsp;&nbsp;</span>
                        We conducted the usability testing with two sessions. I came up with two 
                        directions of flow and found out the better solution among the sessions. 
                        After finalized the design, I also shared an internal case study with the 
                        design team. It helps designers to have a better direction on conducting 
                        usability testing afterward.
                    </p>
                    <br/>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>OUTCOME&nbsp;&nbsp;</span>
                        We just introduced the feature and currently running the experiment. More details to be updated later.
                    </p>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <div className={styles.progressMain} style={{padding:'4%'}}>
                
                <Carousel
                    imgsrc={[mk01, mk02]}
                    caption={[
                        'The final direction we delivered.',
                        "The prototype we went through during usability testing."
                    ]}
                />

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                    <div style={{backgroundColor:'white', color:'black', padding:'0.2rem'}}>
                        
                        <LockIcon style={{marginTop:'1rem', marginLeft:'0.4rem'}}/>
                        <p className={styles.articleMK} style={{marginTop:'-1.6rem', marginLeft:'2.2rem'}}>
                            I’m able to share more details about the project privately.
                        </p> 
                    </div>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

            </div>

        </React.Fragment>
    )
}