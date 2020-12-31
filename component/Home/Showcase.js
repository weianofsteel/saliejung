import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import agoda from '../../public/agoda-logo.png';
import showcase01 from '../../public/showcase/showcase01.png';
import showcase02 from '../../public/showcase/showcase02.png';
import showcase03 from '../../public/showcase/showcase03.png';
import showcase04 from '../../public/showcase/showcase04.png';
import showcase05 from '../../public/showcase/showcase05.png';
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
        opacity:'100%',
        height: '30rem',
        width:'100%',
        overflow:'hidden'
    },
    img1: {
        opacity:'0%'
    },
    showcaseBlock: {
        marginTop: '0.3rem'
    }
})

export const Showcase = () => {
    
    const classes = useStyles();
    
    const [ box1, setBox1] = React.useState(true);
    
    const [ box2, setBox2] = React.useState(true);

    const [ box3, setBox3] = React.useState(true);

    const [ box4, setBox4] = React.useState(true);

    const [ box5, setBox5] = React.useState(true);

    const [ box6, setBox6] = React.useState(true);

    const handleBox1On = () => {
        setBox1(false);
    }

    const handleBox2On = () => {
        setBox2(false);
    }

    const handleBox3On = () => {
        setBox3(false);
    }

    const handleBox4On = () => {
        setBox4(false);
    }

    const handleBox5On = () => {
        setBox5(false);
    }

    const handleBox6On = () => {
        setBox6(false);
    }

    const handleMouseLeave = () => {
        setBox1(true);
        setBox2(true);
        setBox3(true);
        setBox4(true);
        setBox5(true);
        setBox6(true);
    }
    
    return(
        <React.Fragment>
            
            <Grid container spacing={1}>
                <Grid item xs={12} md={5}>
                    <Link href='/Work/Agoda-design' underline='none' style={{textAlign:'center'}}>
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
                <Grid item xs={12} md={7}>
                    <Link href='/Work/Agoda-flights' underline='none' style={{textAlign:'center'}}>
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
            
            <Grid container className={classes.showcaseBlock} spacing={1}>
                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
                    <Link href='/' underline='none' style={{textAlign:'center'}}>
                        <div 
                            className={box4===true?classes.imgBox:classes.imgBoxOnHover}
                            onMouseEnter={handleBox4On}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={showcase03} className={box4===true?'':classes.img1} style={{marginTop:'4rem',height:'70%',width:'70%'}}/>
                            {box4===true?'':
                                <React.Fragment>
                                    <p className={styles.titleOnHover} style={{marginTop:'-24rem'}}>2017 • KINJO Jewelry • Web Design</p>
                                    <p className={styles.title2OnHover}>An e-commerce site brings a 12-year brand a new life</p>
                                </React.Fragment>
                            }
                        </div>
                    </Link>
                </Grid>     
            </Grid>

            <Grid container className={classes.showcaseBlock} spacing={1}>
                <Grid item xs={12} md={7}>
                    <Link href='/' underline='none'>
                        <div 
                            className={box5===true?classes.imgBox:classes.imgBoxOnHover}
                            onMouseEnter={handleBox5On}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={showcase04} className={box5===true?'':classes.img1} style={{marginTop:'5rem',height:'70%',width:'70%'}}/>
                            {box5===true?'':
                                <React.Fragment>
                                    <p className={styles.titleOnHover} style={{marginTop:'-24rem'}}>2017 • KINJO Jewelry • Web Design</p>
                                    <p className={styles.title2OnHover}>An e-commerce site brings a 12-year brand a new life</p>
                                </React.Fragment>
                            }
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Link href='/' underline='none' style={{textAlign:'center'}}>
                        <div 
                            className={box6===true?classes.imgBox:classes.imgBoxOnHover}
                            onMouseEnter={handleBox6On}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={showcase05} className={box6===true?'':classes.img1} style={{marginTop:'4rem',height:'70%',width:'70%'}}/>
                            {box6===true?'':
                                <React.Fragment>
                                    <p className={styles.titleOnHover} style={{marginTop:'-24rem'}}>2017 • KINJO Jewelry • Web Design</p>
                                    <p className={styles.title2OnHover}>An e-commerce site brings a 12-year brand a new life</p>
                                </React.Fragment>
                            }
                        </div>
                    </Link>
                </Grid>     
            </Grid>

        </React.Fragment>
    )
}