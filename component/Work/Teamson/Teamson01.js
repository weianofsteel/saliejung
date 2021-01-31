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

        </React.Fragment>
    )
}