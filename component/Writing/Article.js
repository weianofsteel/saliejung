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
        lineHight:'0.02rem'
    },
    titleOnHover: {
        color:'#1F1F1F', 
        fontFamily: 'Roboto Slab', 
        paddingBottom:'0.02rem', 
        lineHight:'0.02rem',
        borderBottom:'2px solid black'
    },
    titleBlock: {
        height:'18rem', 
        borderTop:'1px solid #B8B8B8', 
        paddingTop:20
    }
});

export const Article = () => {
    
    const classes = useStyles();

    const [hover, setHover] = React.useState(0);
    
    const handleHoverOn1 = () => {
        setHover(1);
    }

    const handleHoverOn2 = () => {
        setHover(2);
    }

    const handleHoverOff = () => {
        setHover(0);
    }

    return(
        <React.Fragment>
                
                {/* article */}

                <Grid container spacing={1} style={{paddingTop:"6%"}} spacing={3}>
                    <Grid item xs={12} md={5} className={styles.articleBlock}>
                        <Link
                            href='https://careersatagoda.com/blog/new-designer-agoda-bangkok-relocation/'
                            style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                            underline='none'
                            target='_blank' 
                            rel='noopener'
                            onMouseEnter={handleHoverOn1}
                            onMouseLeave={handleHoverOff}
                        >
                            <div className={classes.titleBlock}>
                                <span>
                                    <span className={hover==1?classes.titleOnHover:classes.title}>
                                        An exciting adventure for a new designer at Agoda
                                    </span>
                                    <span>&ensp;</span>
                                    <OpenInNewIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
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
                        </Link>
                    </Grid>
                    <Grid item xs={false}></Grid>
                    <Grid item xs={12} md={5} className={styles.articleBlock}>
                        <Link
                            href='https://careersatagoda.com/blog/mentoring-behavioral-designers-thailand-agoda/'
                            style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                            underline='none'
                            target='_blank' 
                            rel='noopener'
                            onMouseEnter={handleHoverOn2}
                            onMouseLeave={handleHoverOff}
                        >
                            <div className={classes.titleBlock}>
                                <span>
                                    <span className={hover==2?classes.titleOnHover:classes.title}>
                                        Mentoring the Next Generation of Behavioral Designers in Thailand
                                    </span>
                                    <span>&ensp;</span>
                                    <OpenInNewIcon style={{fontSize:'inherit',marginBottom:'-5px'}}/>
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
                        </Link>
                    </Grid>
                </Grid>

                {/* article */}
            
        </React.Fragment>
    )
}