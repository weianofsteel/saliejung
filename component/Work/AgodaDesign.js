import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';

export const AgodaFlights = () => {
    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                <Grid item xs={2} md={4}></Grid>
                <Grid item xs={8} md={4} style={{textAlign:'center'}}>
                    <img src={flights01}/>
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

        </React.Fragment>
    )
}