import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import Link from '@material-ui/core/Link';
import CallMadeIcon from '@material-ui/icons/CallMade';
import writing01 from '../../public/writings/writing01.png';
import writing02 from '../../public/writings/writing02.png';
import Hidden from '@material-ui/core/Hidden';

export const Writings = () => {
    return(
        <React.Fragment>
            
            {/* title */}

            <Hidden smDown>
                <Grid container spacing={1} style={{paddingTop:"6%"}}>
                    <Grid item sm={2}></Grid>
                    <Grid item sm={4} style={{paddingLeft:0}}>
                        <span className={styles.writingsTitle}>
                            Writings
                        </span>
                    </Grid>
                    <Grid item sm={4}></Grid>
                    <Grid item sm={2}></Grid>
                </Grid>
            </Hidden>
            
            <Hidden mdUp>
                <Grid container spacing={1} style={{paddingTop:"6%"}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} style={{textAlign:'center'}}>
                        <span className={styles.writingsTitle}>
                            Writings
                        </span>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </Hidden>

            {/* title */}

            {/* article */}

            <Grid container spacing={1} style={{paddingTop:"6%"}} spacing={5}>
                <Grid item xs={false} md={2}></Grid>
                <Grid item xs={12} md={4} className={styles.articleBlock} style={{marginRight:'1%',marginTop:'1%',paddingTop:20}}>
                    <div style={{height:'17rem'}}>
                    <span>
                        <Link
                            href='/'
                            style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                        >
                            An exciting adventure for a new designer at Agoda&ensp;
                        </Link>
                        <CallMadeIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
                    </span>
                    <br/>
                    <span style={{fontSize:"16px",fontWeight:500,fontFamily:'Roboto'}}>December 2019</span>
                    </div>
                    <div className={styles.imageBlock}>
                        <img 
                            src={writing01}
                            style={{width:'100%', height:'100%'}}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={styles.articleBlock} style={{marginLeft:'1%',marginTop:'1%',paddingTop:20}}>
                    <div style={{height:'17rem'}}>
                    <span>
                        <Link
                            href='/'
                            style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                        >
                            Mentoring the Next Generation of Behavioral Designers in Thailand&ensp;
                        </Link>
                        <CallMadeIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
                    </span>
                    <br/>
                    <span style={{fontSize:"16px",fontWeight:500,fontFamily:'Roboto'}}>August 2020</span>
                    </div>
                    <div className={styles.imageBlock}>
                        <img 
                            src={writing02}
                            style={{width:'100%', height:'100%'}}
                        />
                    </div>
                </Grid>
                <Grid item xs={false} md={2}></Grid>
            </Grid>

            {/* article */}

            {/* image */}

            <Grid container spacing={1} style={{paddingTop:"5%", paddingBottom:"6%"}}>
                <Grid item xs={2}></Grid>
                {/* <Grid item xs={4} className={styles.imageBlock} style={{marginRight:"1%"}}>
                    <img 
                        src={writing01}
                        style={{width:'100%', height:'100%'}}
                    />
                </Grid> */}
                {/* <Grid item xs={4} className={styles.imageBlock} style={{marginLeft:"1%"}}>
                    <img 
                        src={writing02}
                        style={{width:'100%', height:'100%'}}
                    />
                </Grid> */}
                <Grid item xs={2}></Grid>
            </Grid>

            {/* image */}

        </React.Fragment>
    )
}
