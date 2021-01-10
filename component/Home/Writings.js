import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import Link from '@material-ui/core/Link';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import writing01 from '../../public/writings/writing01.png';
import writing02 from '../../public/writings/writing02.png';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        color:'#1F1F1F', 
        fontFamily: 'Roboto Slab', 
        paddingBottom:'0.02rem', 
        lineHight:'0.02rem'
    },
    titleOnHover: {
        color:'#1F1F1F', 
        fontFamily: 'Roboto Slab', 
        paddingBottom:'0.02rem', 
        lineHight:'0.02rem',
        borderBottom:'2px solid black'
    }
});

export const Writings = () => {
    
    const classes = useStyles();

    const [hover, setHover] = React.useState(0);
    
    const handleHoverOn = () => {
        setHover(1);
    }

    const handleHoverOff = () => {
        setHover(0);
    }

    return(
        <React.Fragment>
            
            {/* title */}

            <Grid container spacing={1} style={{paddingTop:"6%"}}>
                <Grid item xs={1} md={2}></Grid>
                <Grid item xs={10} md={4}>
                    <span className={styles.writingsTitle}>
                        Writings
                    </span>
                </Grid>
                <Grid item xs={false} md={4}></Grid>
                <Grid item xs={false} md={2}></Grid>
            </Grid>

            {/* title */}

            {/* article */}

            <Hidden smDown>
                <Grid container spacing={1} style={{paddingTop:"6%",wrap:'nowrap'}} spacing={8}>
                    <Grid item md={2}></Grid>
                    <Grid item md={4} className={styles.articleBlock} style={{marginTop:'1%',paddingTop:20}}>
                        <Link
                            href='https://careersatagoda.com/blog/new-designer-agoda-bangkok-relocation/'
                            style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                            underline='none'
                            target='_blank' 
                            rel='noopener'
                            onMouseEnter={handleHoverOn}
                            onMouseLeave={handleHoverOff}
                        >
                            <div className={styles.articleContent}>
                            <span>
                                <span className={hover==0?classes.title:classes.titleOnHover}>
                                    An exciting adventure for a new designer at Agoda
                                </span>
                                <span>&ensp;</span>
                                <OpenInNewIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
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
                        </Link>
                    </Grid>
                
                    <Grid item md={4} className={styles.articleBlock} style={{marginLeft:'1%',marginTop:'1%',paddingTop:20}}>
                        <Link
                            href='https://careersatagoda.com/blog/mentoring-behavioral-designers-thailand-agoda/'
                            style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                            underline='none'
                            target='_blank' 
                            rel='noopener'
                            onMouseEnter={handleHoverOn}
                            onMouseLeave={handleHoverOff}
                        >
                            <div className={styles.articleContent}>
                            <span>
                            <span className={hover==0?classes.title:classes.titleOnHover}>
                                    Mentoring the Next Generation of Behavioral Designers in Thailand
                                </span>
                                <span>&ensp;</span>
                            <OpenInNewIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
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
                        </Link>
                    </Grid>
                    <Grid item md={2}></Grid>
                </Grid>
            </Hidden>

            <Hidden mdUp>
                <Grid container spacing={1} style={{paddingTop:"6%"}} spacing={2}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} className={styles.articleBlock} style={{paddingTop:20}}>
                        <Link
                            href='https://careersatagoda.com/blog/new-designer-agoda-bangkok-relocation/'
                            style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                            underline='none'
                            target='_blank' 
                            rel='noopener'
                        >
                            <div style={{height:'17rem'}}>
                            <span>
                            <span className={classes.title}>
                                An exciting adventure for a new designer at Agoda
                                </span>
                                <span>&ensp;</span>
                            <OpenInNewIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
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
                        </Link>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} className={styles.articleBlock} style={{marginTop:'1%',paddingTop:20}}>
                        <Link
                            href='https://careersatagoda.com/blog/mentoring-behavioral-designers-thailand-agoda/'
                            style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                            underline='none'
                            target='_blank' 
                            rel='noopener'
                        >
                            <div style={{height:'17rem'}}>
                            <span>
                                    <span className={classes.title}>
                                        Mentoring the Next Generation of Behavioral Designers in Thailand
                                    </span>
                                    <span>&ensp;</span>
                                <OpenInNewIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
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
                        </Link>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Hidden>

            {/* article */}

            <Grid container spacing={1} style={{paddingTop:"5%", paddingBottom:"6%"}}>
            
            </Grid>

        </React.Fragment>
    )
}
