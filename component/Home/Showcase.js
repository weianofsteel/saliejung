import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import agoda from '../../public/agoda-logo2.png';
import showcase01 from '../../public/showcase/showcase01.png';
import showcase02 from '../../public/showcase/showcase02.png';
import showcase03 from '../../public/showcase/showcase03.jpg';
import showcase04 from '../../public/showcase/showcase04.jpg';
import showcase05 from '../../public/showcase/showcase05.jpg';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    imgBox: {
        backgroundColor: '#F5F5F5',
        height: '30rem',
        width:'100%',
        overflow:'hidden'
    },
    imgBoxOnHover: {
        backgroundColor:'#1F1F1F',
        opacity:'90%',
        height: '30rem',
        width:'100%',
        overflow:'hidden'
    },
    img1: {
        opacity:'10%'
    }
})

export const Showcase = () => {
    
    const classes = useStyles();
    
    const [ box1, setBox1] = React.useState(true);
    
    const [ box2, setBox2] = React.useState(true);

    const [ box3, setBox3] = React.useState(true);

    const handleBox1On = () => {
        setBox1(false);
    }

    const handleBox2On = () => {
        setBox2(false);
    }

    const handleBox3On = () => {
        setBox3(false);
    }

    const handleMouseLeave = () => {
        setBox1(true);
        setBox2(true);
        setBox3(true);
    }
    
    return(
        <React.Fragment>
            
            <Grid container>
                <Grid item xs={5}>
                    <Link href='/' underline='none' style={{textAlign:'center'}}>
                        <div 
                            className={box1===true?classes.imgBox:classes.imgBoxOnHover}
                            onMouseEnter={handleBox1On}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={agoda} className={box1===true?'':classes.img1} style={{marginTop:'10rem'}}/>
                            {box1===true?'':
                                <React.Fragment>
                                    <p className={styles.titleOnHover} style={{marginTop:'-16rem'}}>2019/20 • Agoda Design</p>
                                    <p className={styles.title2OnHover}>An exciting adventure in Bangkok and travel industry</p>
                                </React.Fragment>
                            }
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={7} style={{paddingLeft:"8px"}}>
                    <Link href='/' underline='none' style={{textAlign:'center'}}>
                        <div 
                            className={box2===true?classes.imgBox:classes.imgBoxOnHover}
                            onMouseEnter={handleBox2On}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={showcase01} className={box2===true?'':classes.img1} style={{marginTop:'10rem'}}/>
                            {box2===true?'':
                                <React.Fragment>
                                    <p className={styles.titleOnHover} style={{marginTop:'-28rem'}}>2020 • Agoda Flights • App Design</p>
                                    <p className={styles.title2OnHover}>Complete your journey with seat selection</p>
                                </React.Fragment>
                            }
                        </div>
                    </Link>
                </Grid>     
            </Grid>
            
            <Grid container className={styles.showcaseBlock}>
                <Grid item xs={6}>
                    <Link href='/' underline='none' style={{textAlign:'center'}}>
                        <div 
                            className={box3===true?classes.imgBox:classes.imgBoxOnHover}
                            onMouseEnter={handleBox3On}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={showcase02} className={box3===true?'':classes.img1} style={{marginTop:'4rem',height:'70%',width:'70%'}}/>
                            {box3===true?'':
                                <React.Fragment>
                                    <p className={styles.titleOnHover} style={{marginTop:'-24rem'}}>2017 • KINJO Jewelry • Web Design</p>
                                    <p className={styles.title2OnHover}>An e-commerce site brings a 12-year brand a new life</p>
                                </React.Fragment>
                            }
                        </div>
                    </Link>
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