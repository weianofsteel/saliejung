import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import showcase01 from '../../public/showcase/showcase01.png';
import showcase02 from '../../public/showcase/showcase02.png';
import showcase03 from '../../public/showcase/showcase03.png';
import showcase04 from '../../public/showcase/showcase04.png';
import showcase09 from '../../public/showcase/showcase09.jpg';
import showcase10 from '../../public/showcase/showcase10.jpg';
import showcasecap01 from '../../public/showcase/showcasecap01.png';
import showcasecap02 from '../../public/showcase/showcasecap02.png';
import showcasecap03 from '../../public/showcase/showcasecap03.png';
import showcasecap04 from '../../public/showcase/showcasecap04.png';
import showcasecap09 from '../../public/showcase/showcasecap09.jpg';
import showcasecap10 from '../../public/showcase/showcasecap10.jpg';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    imgBox: {
        backgroundColor: '#F5F5F5',
        height: '100%',
        width:'100%',
        overflow:'hidden',
    },
    imgBoxOnHover: {
        backgroundColor:'#1F1F1F',
        opacity:'100%',
        height: '100%',
        width:'100%',
        overflow:'hidden',
        transition: '.4s ease-in-out'
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
                            {box1===true?
                                <img src={showcase01} className={box1===true?'':classes.img1} style={{width:'100%'}}/>
                            :
                                <img src={showcasecap01} className={box1===false?styles.capImage:''} style={{width:'100%'}}/>
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
                            {box2===true?
                                <img src={showcase02} className={box2===true?'':classes.img1} style={{width:'100%'}}/>
                            :
                                <img src={showcasecap02} className={box2===false?styles.capImage:''} style={{width:'100%'}}/>
                            }
                        </div>
                    </Link>
                </Grid>     
            </Grid>

            <Grid container className={classes.showcaseBlock} spacing={1}>
                <Grid item xs={12} md={7}>
                    <Link href='/Work/Agoda-product-marketing' underline='none'>
                        <div 
                            className={box5===true?classes.imgBox:classes.imgBoxOnHover}
                            onMouseEnter={handleBox5On}
                            onMouseLeave={handleMouseLeave}
                        >
                            {box5===true?
                                <img src={showcase09} className={box5===true?'':classes.img1} style={{width:'100%'}}/>
                            :
                                <img src={showcasecap09} className={box5===false?styles.capImage:''} style={{width:'100%'}}/>
                            }
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Link href='/Work/Agoda-flights-save-passenger' underline='none' style={{textAlign:'center'}}>
                        <div 
                            className={box6===true?classes.imgBox:classes.imgBoxOnHover}
                            onMouseEnter={handleBox6On}
                            onMouseLeave={handleMouseLeave}
                        >
                            {box6===true?
                                <img src={showcase10} className={box6===true?'':classes.img1} style={{width:'100%'}}/>
                            :
                                <img src={showcasecap10} className={box3===false?styles.capImage:''} style={{width:'100%'}}/>
                            }
                        </div>
                    </Link>
                </Grid>     
            </Grid>
            
            <Grid container className={classes.showcaseBlock} spacing={1}>
                <Grid item xs={12} md={6}>
                    <Link href='/Work/Kinjo' underline='none' style={{textAlign:'center'}}>
                        <div 
                            className={box3===true?classes.imgBox:classes.imgBoxOnHover}
                            onMouseEnter={handleBox3On}
                            onMouseLeave={handleMouseLeave}
                        >
                            {box3===true?
                                <img src={showcase03} className={box3===true?'':classes.img1} style={{width:'100%'}}/>
                            :
                                <img src={showcasecap03} className={box3===false?styles.capImage:''} style={{width:'100%'}}/>
                            }
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Link href='/Work/Moxa' underline='none' style={{textAlign:'center'}}>
                        <div 
                            className={box4===true?classes.imgBox:classes.imgBoxOnHover}
                            onMouseEnter={handleBox4On}
                            onMouseLeave={handleMouseLeave}
                        >
                            {box4===true?
                                <img src={showcase04} className={box4===true?'':classes.img1} style={{width:'100%'}}/>
                            :
                                <img src={showcasecap04} className={box3===false?styles.capImage:''} style={{width:'100%'}}/>
                            }
                        </div>
                    </Link>
                </Grid>     
            </Grid>

        </React.Fragment>
    )
}