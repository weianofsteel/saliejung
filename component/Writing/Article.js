import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Writing.module.css';
import Link from '@material-ui/core/Link';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import writing01 from '../../public/writings/writing01.png';
import writing02 from '../../public/writings/writing02.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        color:'#1F1F1F', 
        fontFamily: 'Roboto Slab', 
        paddingBottom:'0.02rem', 
        lineHight:'0.02rem',
        "&:hover":{
            borderBottom:'2px solid black'
        }
    }
});

export const Article = () => {
    
    const classes = useStyles();

    return(
        <React.Fragment>
                
                {/* article */}

                <Grid container spacing={1} style={{paddingTop:"6%"}}>
                    <Grid item xs={12} md={5} className={styles.articleBlock} style={{paddingTop:20}}>
                        <div style={{height:'18rem'}}>
                            <span>
                                <Link
                                    href='/Writing'
                                    style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                                    underline='none'
                                >
                                    <span className={classes.title}>
                                        An exciting adventure for a new designer at Agoda&ensp;
                                    </span>
                                    <OpenInNewIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
                                </Link>
                            </span>
                            <br/>
                            <span style={{fontSize:"16px",fontFamily:'Roboto'}}>December 2019</span>
                        </div>
                        <div>
                            <img 
                                src={writing01}
                                style={{width:'100%', height:'100%'}}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={12} md={5} className={styles.articleBlock} style={{paddingTop:20}}>
                        <div style={{height:'18rem'}}>
                            <span>
                                <Link
                                    href='/Writing'
                                    style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                                    underline='none'
                                >
                                    <span className={classes.title}>
                                        Mentoring the Next Generation of Behavioral Designers in Thailand&ensp;
                                    </span>
                                    <OpenInNewIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
                                </Link>
                            </span>
                            <br/>
                            <span style={{fontSize:"16px",fontFamily:'Roboto'}}>August 2020</span>
                        </div>
                        <div>
                            <img 
                                src={writing02}
                                style={{width:'100%', height:'100%'}}
                            />
                        </div>
                    </Grid>
                </Grid>

                {/* article */}
            
        </React.Fragment>
    )
}