import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import agoda from '../../public/agoda-logo.png';

export const AgodaDesign = () => {
    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                <Grid item xs={2} md={4}></Grid>
                <Grid item xs={8} md={4} style={{textAlign:'center', height:'31rem'}}>
                    <img src={agoda} style={{marginTop:'30%'}}/>
                </Grid>
                <Grid item xs={2} md={4}></Grid>
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

        </React.Fragment>
    )
}