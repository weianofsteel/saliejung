import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import agodaHeader from '../../public/agoda-design/design-header.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Design01 } from './Design01.js';
import { Design02 } from './Design02.js';

export const AgodaDesign = () => {
    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={agodaHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>

            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={5}></Grid>
                <Grid item xs={6} md={2}>
                    <div className={styles.title2}>
                        Agoda Design     
                    </div>
                </Grid>     
                <Grid item xs={3} md={5}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        An exciting adventure in the travel industry    
                    </h2>
                    <h2 className={styles.title4}>§</h2>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={styles.article}>
                        Joined the Agoda Design team is not only a career path but also a life-changing experience for 
                        me. The opportunities to work with people from many different cultures is challenging but 
                        engaging. Other than that, I want to share some memorable stories when I worked here. 
                        <br/>
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
                                June 2019 to present
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Team I joined</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Flights, Product Marketing, SEO, Pricing
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>My role</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Competitive Analysis, User interview, Design Research, UI/UX Design (Web & App)
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'6%',marginBottom:'6%'}} className={styles.scrollDown}>
                <Grid item xs={2} md={4}></Grid>
                <Grid item xs={8} md={4} style={{textAlign:'center'}}>
                    <span>
                        LEARN MORE
                    </span>
                </Grid>
                <Grid item xs={2} md={4}></Grid>
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <ExpandMoreIcon/>
                </Grid>
            </Grid>

            <div>
                <Design01/>
            </div>

            <div>
                <Design02/>
            </div>

        </React.Fragment>
    )
}