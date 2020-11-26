import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';

const Carousel = (props) => {
    
    const [count, setCount] = React.useState(0);

    const {
        imgsrc,
        rotateBy,
        width,
        height,
        controlButton,
        navigateButton
    } = props;

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleBack = () => {
        setCount(count => count - rotateBy);
    }

    const handleNext = () => {
        setCount(count => count + rotateBy);
    }

    const list = [];

    for(let i = 0; i <= imgsrc.length - 1; i++) {
        list.push(
            <React.Fragment>
               {parseInt( count / rotateBy) % imgsrc.length === i ?
                    <div style={{width:width, height:height}}>
                        <img src={imgsrc[i]} style={{margin: '0 auto', width:'100%', height:'100%'}}/>
                    </div>
                :''}        
            </React.Fragment>
        )
    }

    const RadioNavigation = [];

    for(let i = 0; i <= imgsrc.length - 1; i++) {
        RadioNavigation.push(
            <React.Fragment>
                {parseInt( count / rotateBy) % imgsrc.length === i ?
                    <IconButton onClick={()=>{setCount(count => rotateBy * i)}}>
                        <PlayCircleFilledIcon/>
                    </IconButton>
                :
                    <IconButton onClick={()=>{setCount(count => rotateBy * i)}}>
                        <RadioButtonUncheckedIcon/>
                    </IconButton>
                }
            </React.Fragment>
        )
    }


    return(
        <React.Fragment>
        
            <Grid container justify="center" alignItems="center">
                
                {controlButton === true ?
                    <Button style={{margin:'auto 0'}} onClick={handleBack}>
                        <ArrowBackIosIcon/>
                    </Button>
                :''}

                {list}

                {controlButton === true ?
                    <Button style={{margin:'auto 0'}} onClick={handleNext}>
                        <ArrowForwardIosIcon/>
                    </Button>
                :''}
            
            </Grid>

            {navigateButton === true ?
                <Grid container justify="center" alignItems="center">
                
                    {RadioNavigation}
                
                </Grid>
            :''}
            
        </React.Fragment>
    )
}

export default Carousel;