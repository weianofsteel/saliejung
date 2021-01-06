import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Public.module.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const CarouselMultiple = (props) => {
    
    const [carousel, setCarousel] = React.useState(0);
    
    const handleCarouselNext = () => {
        setCarousel(carousel + 1);
    }

    const handleCarouselLast = () => {
        setCarousel(carousel - 1);
    }

    const {
        imgsrc,
        caption
    } = props;
    
    return(
        <React.Fragment>

                <div className={styles.carouselOuter}>
                    <Grid container style={{marginTop:'3%'}}>
                        <Grid item xs={false} md={2}></Grid>
                        <Grid item xs={12} md={8}>
                            <div style={{backgroundColor:'white'}}>
                                <img
                                    src={imgsrc[carousel]}
                                    className={styles.carouselImg}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={false} md={2}></Grid>
                    </Grid>
                </div>

                <Grid container className={styles.captionContainer}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container>
                            <Grid item xs={3}>
                                <IconButton
                                    onClick={handleCarouselLast}
                                    disabled={carousel==0?true:false}
                                >
                                    <ArrowBackIcon style={{fontSize:'1.5rem'}}/>
                                </IconButton>
                            </Grid>
                            
                            <Grid item xs={6} style={{marginTop:'1.5%'}}>
                                <span className={styles.imgDescription}>
                                    {caption[carousel]}
                                </span>
                            </Grid>

                            <Grid item xs={3} style={{textAlign:'right'}}>
                                <IconButton
                                    onClick={handleCarouselNext}
                                    disabled={carousel==imgsrc.length-1?true:false}
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