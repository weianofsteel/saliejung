import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import Button from '@material-ui/core/Button';

class Funfacts extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
            
            <Grid container spacing={1} style={{marginTop:"6%"}}>
                <Grid item xs={5}></Grid>
                <Grid item xs={2}>
                    <h1 className={styles.funFactsTitle}>Fun Facts</h1>
                    {/* style={{ fontFamily: 'Roboto Slab'}} */}
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>

            <Grid container spacing={1} style={{marginTop:"2%"}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <p>
                        The story behind the name “saliejung” -  “salie” is my french name, “jung” is part of
                         the character of my Chinese name. I love how it combines & pronounce together, so 
                         that’s it. During the transfer period in 2018, I’ve #freelanced with #acer for two 
                         campaign projects running in the European area. Back then, I spent 1-month traveling
                          in #Kyoto, which is my favorite city (so far). I love exploring the world and my 
                          home #Taiwan where you can’t stop exploring nature. The most interesting fact about 
                          me is that I’ve been a #ride operator at a roller coaster when I joined the travel & 
                          experience program at college in the U.S.A.
                    </p>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>

            <Grid container spacing={1} style={{marginTop:"2%"}}>
                <Grid item xs={5}></Grid>
                <Grid item xs={2} className={styles.buttonKnowMoreAboutMe}>
                    <Button href="/">
                        <span>KNOW MORE ABOUT ME</span>
                    </Button>
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>

            <Grid container spacing={1} style={{marginTop:"2%"}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={2}></Grid>
            </Grid>

        </React.Fragment>
        )
    }
}

export default Funfacts;