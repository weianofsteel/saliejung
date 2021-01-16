import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
   },
});

export const LearnMore = (props) => {
    
    const classes = useStyles();

    const handleAnchor = () => {
        if(window !== undefined) {
            window.scrollTo({top: scrollY, behavior: 'smooth'})
        }
    }

    const { scrollY } = props;
    
    return(
        <React.Fragment>

            <Button
                className={classes.button}
                onClick={handleAnchor}
                disableRipple={true}
                style={{backgroundColor: 'transparent'}}
            >
                Learn More1 
            </Button>

        </React.Fragment>
    )
}
