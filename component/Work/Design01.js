import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import design01 from '../../public/agoda-design/design01.png';
import dot from '../../public/dot.png';
import { Carousel } from '../Public/Carousel.js';

export const Design01 = () => {

    return(
        <React.Fragment>

            <div className={styles.progressMain} style={{paddingTop:'10px'}}>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <img src={design01} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>

        </React.Fragment>
    )
}