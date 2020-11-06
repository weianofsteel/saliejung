import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/About.module.css';

export const Gallery = () => {
    return(
        <React.Fragment>
            
            <Grid container spacing={3}>
                
                <Grid item xs={6}>
                    
                    <Grid container spacing={3} style={{paddingTop:"20%"}}>
                        <Grid item xs={12}>
                            <div className={styles.imageBlock}></div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={styles.imageBlock}></div>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={6}>

                    <Grid container spacing={3} style={{paddingTop:"-20%"}}>
                        <Grid item xs={12}>
                            <div className={styles.imageBlock}></div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={styles.imageBlock}></div>
                        </Grid>
                    </Grid>

                </Grid>
                
            </Grid>

        </React.Fragment>
    )
}