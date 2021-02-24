import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Public.module.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        fontSize:'1.5rem',
        color:'#8F8F8F',
        "&:hover":{
            color:'#1F1F1F'
        }
    }
});

export const Carousel = (props) => {
    
    const classes = useStyles();
    
    const [carousel, setCarousel] = React.useState(0);
    
    const handleCarouselNext = () => {
        if(carousel < imgsrc.length - 1){
            setCarousel(carousel + 1);
        }else{
            setCarousel(0);
        }    
    }

    const handleCarouselLast = () => {
        if(carousel > 0){
            setCarousel(carousel - 1);
        }else{
            setCarousel(imgsrc.length - 1);
        }    
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
                            <div style={{backgroundColor:'#F5F5F5'}}>
                                <img
                                    src={imgsrc[carousel]}
                                    className={styles.carouselImg}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={false} md={2}></Grid>
                    </Grid>
                </div>

                <Grid container className={styles.captionContainer} style={{marginTop:'1rem'}}>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container>
                            <Grid item xs={3}>
                                <IconButton
                                    onClick={handleCarouselLast}
                                    style={{backgroundColor: 'transparent'}}
                                    disableRipple={true}
                                >
                                    <ArrowBackIcon className={classes.icon}/>
                                </IconButton>
                            </Grid>
                            
                            <Grid item xs={6}>
                                <span className={styles.imgDescription}>
                                    {caption[carousel]}
                                </span>
                            </Grid>

                            <Grid item xs={3} style={{textAlign:'right'}}>
                                <IconButton
                                    onClick={handleCarouselNext}
                                    style={{backgroundColor: 'transparent'}}
                                    disableRipple={true}
                                >
                                    <ArrowForwardIcon className={classes.icon}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
                </Grid>

        </React.Fragment>
    )
}