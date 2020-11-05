import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import Link from '@material-ui/core/Link';
import TouchAppIcon from '@material-ui/icons/TouchApp';

export const Writings = () => {
    return(
        <React.Fragment>
            
            {/* title */}

            <Grid container spacing={1} style={{paddingTop:"6%"}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4} style={{paddingLeft:0}}>
                    <span className={styles.writingsTitle}>
                        <Link href="/Writing/Writing" style={{color:"black", fontFamily: 'Roboto Slab'}}>Writings</Link>
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
                            An exciting adventure for a new designer at Agoda
                            <TouchAppIcon/>
                        </Link>
                    </span>
                    <br/>
                    <span style={{fontSize:"16px",fontFamily:'Roboto'}}>December 2019</span>
                </Grid>
                <Grid item xs={4} className={styles.articleBlock} style={{marginLeft:"1%",paddingTop:20}}>
                    <span>
                        <Link
                            href='/'
                            style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                        >
                            Mentoring the Next Generation of Behavioral Designers in Thailand
                            <TouchAppIcon/>
                        </Link>
                    </span>
                    <br/>
                    <span style={{fontSize:"16px",fontFamily:'Roboto'}}>August 2020</span>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>

            {/* article */}

            {/* image */}

            <Grid container spacing={1} style={{paddingTop:"5%", paddingBottom:"6%"}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4} className={styles.imageBlock} style={{marginRight:"1%"}}></Grid>
                <Grid item xs={4} className={styles.imageBlock} style={{marginLeft:"1%"}}></Grid>
                <Grid item xs={2}></Grid>
            </Grid>

            {/* image */}

        </React.Fragment>
    )
}
