import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        fontFamily:'Roboto',
        fontWeight:400,
        letterSpacing:'1px',
        marginLeft: '32px',
        color:'#8F8F8F',
        fontSize:'18px',
        "&:hover":{
            color:'black'
        },
    // menuBar: {
    //     display: 'inline',
    //     }
    }
});

export const Header = () => {

    const classes = useStyles();

    return(
        <React.Fragment>
            
            <div className={styles.main1}>
                <Grid container spacing={2} style={{marginTop: "10px"}}>
                    <Grid item xs={2}>
                        <Link href='/' underline='none' style={{color:'#1F1F1F'}}><span className={styles.title}>saliejung</span></Link>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    
                    <Hidden mdDown>
                        <Grid item xs={4} className={styles.menuBar}>
                            <span className={styles.link}>
                                <Link href="/Work" underline='none' className={classes.link}>WORK</Link>
                            </span>
                            <span className={styles.link}>
                                <Link href="/Writing" underline='none' className={classes.link}>WRITINGS</Link>
                            </span>
                            <span className={styles.link}>
                                <Link href="/About" underline='none' className={classes.link}>ABOUT</Link>
                            </span>
                            <span className={styles.link}>
                                <Link href="/Resume" underline='none' className={classes.link}>RESUME</Link>
                            </span>
                        </Grid>
                    </Hidden>

                    <Hidden lgUp>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={1}>
                            <IconButton>
                                <MenuIcon/>
                            </IconButton>
                        </Grid>
                    </Hidden>

                    {/* drawer */}

                    <Drawer>
                        
                    </Drawer>

                    {/* drawer */}

                </Grid>
            </div>

        </React.Fragment>
    )
}