import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Public.module.css';

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

    const [coordinate, setCoordinate] = React.useState(0);

    useEffect(()=>{
        if(window !== undefined) {
            window.addEventListener("scroll", onScroll);
            function onScroll() {
            setCoordinate(window.scrollY);
            }  
        }
    },[])

    const handleAnchor = () => {
        if(window !== undefined) {
            window.scrollTo({top: coordinate + 600, behavior: 'smooth'})
        }
    }
    
    return(
       
        <React.Fragment>
            
            <Button
                className={classes.button}
                onClick={handleAnchor}
                disableRipple={true}
                style={{backgroundColor: 'transparent'}}
            >
                <Grid container className={styles.ball}>
                    <Grid item xs={12}>
                        <span>Learn More</span>
                    </Grid>
                    <Grid item xs={12} style={{marginTop:'0.5rem'}}>
                        <ArrowDownwardIcon/>
                    </Grid>
                </Grid> 
            </Button>

        </React.Fragment>
    )
}
