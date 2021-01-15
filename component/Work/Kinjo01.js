import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import kinjoHeader from '../../public/kinjo/kinjo-header.png';

export const Kinjo01 = () => {
    
    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={kinjoHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>

            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={5}></Grid>
                <Grid item xs={6} md={2}>
                    <div className={styles.title2}>
                        KINJO Jewelry    
                    </div>
                </Grid>     
                <Grid item xs={3} md={5}></Grid>
            </Grid>

        
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                </Grid>     
                <Grid item xs={3}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        An E-commerce Site Brings a 12-year Brand a New Picture  
                    </h2>
                    <h2 className={styles.title4}>§</h2>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.03rem'}}>CONTEXT&nbsp;&nbsp;</span>
                        With a 12-year history, KINJO is the top one metalworking & workshop 
                        brand in Taiwan. Now they have eight stores, attracting more than 1,800 
                        tourists to experience handmade rings every month. The goal of this 
                        project is to build an e-commerce site. To collect customer data, manage 
                        orders, and reserve workshop online. Also, reshape their digital branding 
                        to improve the efficiency of their marketing strategy and sales.
                        <br/><br/>
                        <span style={{fontWeight:700, letterSpacing:'0.03rem'}}>CHALLENGE&nbsp;&nbsp;</span> 
                        It is not only an e-commerce site, but all the businesses of KINJO 
                        need to integrate into one place. We spent lots of time figuring out the need 
                        of clients, customers, and the brand. The most challenging part is to find the 
                        balance and not overwhelm people. Speaking of the project scope, it is also a 
                        challenge for me and all the team members to collaborate and communicate along 
                        the working process.
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
                                Jan 2018 - Oct 2018
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Team</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Designers (2), Product Manager (1), Engineers (3)
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>My role</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Competitive Analysis, Flowchart, Wireframe, Web Design, Design System
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

        </React.Fragment>
    )
}