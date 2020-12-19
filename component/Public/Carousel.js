import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const Carousel = (props) => {
    
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
                <div style={{marginTop:'5%', marginLeft:'6%', marginRight:'6%'}}>
                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8}>
                        <div style={{backgroundColor:'white'}}>
                            <img
                                src={props.img1}
                                style={{width:'100%', height:'100%'}}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
                </Grid>
                </div>
            :''}

            {carousel == 2?
                <div style={{marginTop:'5%', marginLeft:'6%', marginRight:'6%'}}>
                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8}>
                        <div style={{backgroundColor:'white'}}>
                            <img
                                src={props.img2}
                                style={{width:'100%', height:'100%'}}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={false} md={2}></Grid>
                </Grid>
                </div>
            :''}

            <Grid container style={{marginTop:'2%', paddingLeft:'4.5%', paddingRight:'4.5%'}}>
                <Grid item xs={false} md={2}></Grid>
                <Grid item xs={12} md={8}>
                    <Grid container>
                        <Grid item xs={3}>
                            <IconButton
                                onClick={handleCarouselLast}
                                disabled={carousel==1?true:false}
                            >
                                <ArrowBackIcon style={{fontSize:'1.5rem'}}/>
                            </IconButton>
                        </Grid>
                            
                        {carousel == 1?
                            <Grid item xs={6} style={{marginTop:'1.5%'}}>
                                <span className={styles.imgDescription2}>
                                    {props.caption1}
                                </span>
                            </Grid>
                        :''}

                        {carousel == 2?        
                            <Grid item xs={6} style={{marginTop:'1.5%'}}>
                                <span className={styles.imgDescription2}>
                                    {props.caption2}
                                </span>
                            </Grid>
                        :''}

                        <Grid item xs={3} style={{textAlign:'right'}}>
                            <IconButton
                                onClick={handleCarouselNext}
                                disabled={carousel==2?true:false}
                            >
                                <ArrowForwardIcon style={{fontSize:'1.5rem'}}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={2}></Grid>
            </Grid>

        </React.Fragment>
    )
}