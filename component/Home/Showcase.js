import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import agoda from '../../public/agoda-logo.jpg';
import agoda2 from '../../public/agoda-logo.png';
import agoda3 from '../../public/agoda-logo2.png';
import showcase01 from '../../public/showcase/showcase01.png';
import showcase02 from '../../public/showcase/showcase02.jpg';
import showcase03 from '../../public/showcase/showcase03.jpg';
import showcase04 from '../../public/showcase/showcase04.jpg';
import showcase05 from '../../public/showcase/showcase05.jpg';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    imgBox: {
        backgroundColor: '#F5F5F5',
        height: '500px',
        zIndex: 2,
        width:'100%'
    }
})

export const Showcase = () => {
    
    const classes = useStyles();
    
    const [ box1, setBox1] = React.useState(true);

    const handleBox1On = () => {
        setBox1(false);
    }

    const handleMouseLeave = () => {
        setBox1(true);
    }
    
    return(
        <React.Fragment>
            
            <Grid container>
                <Grid item xs={5}>
                    {/* <div 
                        className={styles.showcaseBox2}
                    >
                        <Link 
                            href='/'
                            onMouseEnter={handleBox1On}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img 
                                src={agoda}
                                className={styles.img}
                            />
                        </Link>
                    </div> */}
                    <div className={classes.imgBox}>
                    <Link href='/'>
                        <img src={agoda3}/>
                    </Link>
                    </div>
                </Grid>
                <Grid item xs={7} style={{paddingLeft:"8px"}}>
                    <div className={styles.showcaseBox}>
                        <img src={showcase01} className={styles.img}/>
                    </div>
                </Grid>     
            </Grid>
            
            <Grid container className={styles.showcaseBlock}>
                <Grid item xs={6}>
                    <div className={styles.showcaseBox}>
                        <img src={showcase02} className={styles.img}/>
                    </div>
                </Grid>
                <Grid item xs={6} style={{paddingLeft:"8px"}}>
                    <div className={styles.showcaseBox}>
                        <img src={showcase03} className={styles.img}/>
                    </div>
                </Grid>     
            </Grid>

            <Grid container className={styles.showcaseBlock}>
                <Grid item xs={7}>
                    <div className={styles.showcaseBox}>
                        <img src={showcase04} className={styles.img}/>
                    </div>
                </Grid>
                <Grid item xs={5} style={{paddingLeft:"8px"}}>
                    <div className={styles.showcaseBox}>
                        <img src={showcase05} className={styles.img}/>
                    </div>
                </Grid>     
            </Grid>

        </React.Fragment>
    )
}