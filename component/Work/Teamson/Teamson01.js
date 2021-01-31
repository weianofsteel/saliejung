import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import { LearnMore } from '../../Public/LearnMore.js';

export const Teamson01 = () => {
    return(
        <React.Fragment>

<Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={5}></Grid>
                <Grid item xs={6} md={2}>
                    <div className={styles.title2}>
                        Teamson Furniture  
                    </div>
                </Grid>     
                <Grid item xs={3} md={5}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                    Boost Sales by a Brand New Experience
                    </h2>
                    <h2 className={styles.title4}>§</h2>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>CONTEXT&nbsp;&nbsp;</span>
                        Many events are happening during our daily life, you may see the 
                        information from news, Facebook, or friends' posts. How to keep those 
                        events on my calendar or somewhere? That's the problem coming up when 
                        I haven't decided when to the event yet. The idea of a fully functional 
                        event calendar came out of our minds.
                        <br/><br/>
                        <span style={{fontWeight:700, letterSpacing:'0.08rem'}}>CHALLENGE&nbsp;&nbsp;</span> 
                    </p>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

        </React.Fragment>
    )
}