import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import process12 from '../../public/agoda-flights/process12.png';
import process02 from '../../public/process02.png';

export const Carousel3 = () => {
    
    const [carousel, setCarousel] = React.useState(1);
    
    const handleCarouselNext = () => {
        setCarousel(2);
    }

    const handleCarouselLast = () => {
        setCarousel(1);
    }
    
    return(
        <React.Fragment>

            {carousel == 1?
                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div style={{backgroundColor:'white',height:'40rem'}}>
                            <img
                                src={process12}
                                style={{width:'100%', height:'100%'}}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            :''}

            {carousel == 2?
                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div style={{backgroundColor:'white',height:'40rem'}}>
                            <img
                                src={process12}
                                style={{width:'100%', height:'100%'}}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            :''}

            <Grid container style={{marginTop:'2%'}}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={3}>
                            <IconButton
                                onClick={handleCarouselLast}
                                disabled={carousel==1?true:false}
                            >
                                <ArrowBackIcon style={{fontSize:'2.5rem'}}/>
                            </IconButton>
                        </Grid>
                            
                        {carousel == 1?
                            <Grid item xs={6} style={{marginTop:'1.5%'}}>
                                <span className={styles.imgDescription2}>
                                    A completed excel to list down all the CMS across the platforms waiting for 
                                    translation.
                                </span>
                            </Grid>
                        :''}

                        {carousel == 2?        
                            <Grid item xs={6} style={{marginTop:'1.5%'}}>
                                <span className={styles.imgDescription2}>
                                    A completed excel to list down all the CMS across the platforms waiting for 
                                    translation.
                                </span>
                            </Grid>
                        :''}

                        <Grid item xs={3} style={{textAlign:'right'}}>
                            <IconButton
                                onClick={handleCarouselNext}
                                disabled={carousel==2?true:false}
                            >
                                <ArrowForwardIcon style={{fontSize:'2.5rem'}}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>

        </React.Fragment>
    )
}