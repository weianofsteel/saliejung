import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Public.module.css';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'

const useStyles = makeStyles({
    link: {
        fontFamily:'Roboto',
        fontWeight:400,
        letterSpacing:'1px',
        marginLeft: '32px',
        color:'#8F8F8F',
        fontSize:'1rem',
        "&:hover":{
            color:'black'
        }
    },
    drawerLink: {
        fontFamily:'Roboto',
        textAlign:'left',
        fontWeight:400,
        letterSpacing:'1px',
        color:'#8F8F8F',
        fontSize:'22px',
        "&:hover":{
            color:'black'
        }
    },
    drawerHeader: {
        paddingLeft:'2rem',
        paddingRight:'2rem',
        marginTop:'3rem'
    },
    linkAnchor: {
        fontFamily:'Roboto',
        fontWeight:400,
        letterSpacing:'1px',
        marginLeft: '32px',
        color:'black',
        fontSize:'1rem'
    },
    icon: {
        fontSize:'1.5rem',
        color:'#8F8F8F',
        "&:hover":{
            color:'#1F1F1F'
        }
    },
    menuButton: {
        paddingTop:'2rem',
        textAlign:'center'
    }
});

export const Header = (props) => {

    const classes = useStyles();

    const router = useRouter();

    const {
        handleDrawerOpen
    } = props;

    return(
        <React.Fragment>
            
            <div className={styles.main1}>
                <Grid container spacing={2}>
                    <Grid item xs={2} style={{paddingTop:'1.5rem'}}>
                        <Link href='/' underline='none' style={{color:'#1F1F1F'}}>
                            <span className={styles.title}>saliejung</span>
                        </Link>
                     </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    
                    <Hidden mdDown>
                        <Grid item xs={4} className={styles.menuBar} style={{paddingTop:'1.5rem'}}>
                            <span className={styles.link}>
                                <Link href='/Work' underline='none' className={router.pathname == '/Work'?classes.linkAnchor:classes.link}>
                                    WORK
                                </Link>
                            </span>
                            <span className={styles.link}>
                                <Link href='/Writings' underline='none' className={router.pathname == '/Writings'?classes.linkAnchor:classes.link}>
                                    WRITINGS
                                </Link>
                            </span>
                            <span className={styles.link}>
                                <Link href='/About' underline='none' className={router.pathname == '/About'?classes.linkAnchor:classes.link}>
                                    ABOUT
                                </Link>
                            </span>
                            <span className={styles.link}>
                                <Link href='./SalieChien_Resume.pdf' target='_blank' rel='noopener' underline='none' className={classes.link}>
                                    RESUME
                                </Link>
                            </span>
                        </Grid>
                    </Hidden>

                    <Hidden lgUp>
                        <Grid item xs={2} sm={3}></Grid>
                        <Grid item xs={2} sm={1} className={classes.menuButton}>
                            <IconButton
                                onClick={handleDrawerOpen}
                                style={{backgroundColor: 'transparent', paddingTop:'1.2rem'}}
                                disableRipple={true}
                            >
                                <MenuIcon className={classes.icon}/>
                            </IconButton>
                        </Grid>
                    </Hidden>

                </Grid>
            </div>

        </React.Fragment>
    )
}