import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Grid from '@material-ui/core/Grid';
import {Animated} from "react-animated-css";
// import styles from '../../css/Public.module.css';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const useStyles = makeStyles({
   button: {
    fontFamily: 'Roboto',
    fontSize: '1.1rem',
    fontWeight: 400,
    lineHeight: '1.1rem',
    letterSpacing: '0.05rem',
    color: '#8F8F8F',
    backgroundColor: 'transparent',
    textAlign: 'center',
    "&:hover":{
        color:'#1F1F1F'        
    }
   }
});



export const LearnMore = (props) => {
    
    const classes = useStyles();

    const handleAnchor = () => {
        if(window !== undefined) {
            window.scrollTo({top: scrollY, behavior: 'smooth'})
        }
    }

    const { scrollY } = props;

    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounce, 'bounce')
        }
    }
    
    return(
        // <Animated animationIn="bounce" isVisible={true}>

            <Button
                className={classes.button}
                onClick={handleAnchor}
                disableRipple={true}
                style={{backgroundColor: 'transparent'}}
            >
                <Grid container style={styles.bounce}>
                    <Grid item xs={12}>
                        <span>Learn More</span>
                    </Grid>
                    <Grid item xs={12} style={{marginTop:'0.5rem'}}>
                        <ArrowDownwardIcon/>
                    </Grid>
                </Grid> 
            </Button>

        // </Animated>
    )
}
