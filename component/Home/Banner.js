import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';

export const Banner = () => {
    return(
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={10} lg={6}>
                    <div className={styles.banner}>
                        I am Salie, a product designer who strives to make people enjoy the digital world.
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={1} style={{marginTop:"2%"}}>
                <Grid item xs={10} lg={6}>
                    <div className={styles.banner2}>
                        Currently work at Agoda based in Bangkok.
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
