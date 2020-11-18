import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export const Scrollup = (props) => {
    
    const [scrollC, setScrollC] = React.useState(0);
    
    useEffect(()=>{
        window.addEventListener("scroll", onScroll);
        function onScroll() {
            setScrollC(window.scrollY);
        }  
    })

    const { handleScrolltoTop } = props;

    return(
        <React.Fragment>
            <Grid container style={{align:'right'}}>
                <Grid item xs={11}></Grid>
                
                <Grid item xs={1}>
                    
                    {scrollC > 400 ?
                        <Button 
                            onClick={handleScrolltoTop}
                        >
                            <ExpandLessIcon style={{fontSize:'4rem'}}/>
                        </Button>:''
                    }

                </Grid>

            </Grid>
        </React.Fragment>
    )
}