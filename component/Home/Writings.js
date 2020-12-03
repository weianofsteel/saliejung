import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import Link from '@material-ui/core/Link';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import writing01 from '../../public/writings/writing01.png';
import writing02 from '../../public/writings/writing02.png';

export const Writings = () => {
    return(
        <React.Fragment>
            
            {/* title */}

            <Grid container spacing={1} style={{paddingTop:"6%"}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4} style={{paddingLeft:0}}>
                    <span className={styles.writingsTitle}>
                        Writings
                    </span>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}></Grid>
            </Grid>

            {/* title */}

            {/* article */}

            <Grid container spacing={1} style={{paddingTop:"6%"}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4} className={styles.articleBlock} style={{marginRight:"1%",paddingTop:20}}>
                    <span>
                        <Link
                            href='/'
                            style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                        >
                            An exciting adventure for a new designer at Agoda&ensp;
                        </Link>
                        <OpenInNewIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
                    </span>
                    <br/>
                    <span style={{fontSize:"16px",fontWeight:500,fontFamily:'Roboto'}}>December 2019</span>
                </Grid>
                <Grid item xs={4} className={styles.articleBlock} style={{marginLeft:"1%",paddingTop:20}}>
                    <span>
                        <Link
                            href='/'
                            style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                        >
                            Mentoring the Next Generation of Behavioral Designers in Thailand&ensp;
                        </Link>
                        <OpenInNewIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
                    </span>
                    <br/>
                    <span style={{fontSize:"16px",fontWeight:500,fontFamily:'Roboto'}}>August 2020</span>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>

            {/* article */}

            {/* image */}

            <Grid container spacing={1} style={{paddingTop:"5%", paddingBottom:"6%"}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4} className={styles.imageBlock} style={{marginRight:"1%"}}>
                    <img 
                        src={writing01}
                        style={{width:'100%', height:'100%'}}
                    />
                </Grid>
                <Grid item xs={4} className={styles.imageBlock} style={{marginLeft:"1%"}}>
                    <img 
                        src={writing02}
                        style={{width:'100%', height:'100%'}}
                    />
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>

            {/* image */}

        </React.Fragment>
    )
}
