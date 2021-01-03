import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Public.module.css';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

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
    }
});

export const Header = (props) => {

    const classes = useStyles();

    const {
        handleDrawerOpen
    } = props;

    return(
        <React.Fragment>
            
            <div className={styles.main1}>
                <Grid container spacing={2} style={{paddingTop: "10px"}}>
                    <Grid item xs={2}>
                        <Link href='/' underline='none' style={{color:'#1F1F1F'}}><span className={styles.title}>saliejung</span></Link>
                     </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    
                    <Hidden mdDown>
                        <Grid item xs={4} className={styles.menuBar} style={{marginTop:'0.5rem'}}>
                            <span className={styles.link}>
                                <Link href='/Work' underline='none' className={classes.link}>WORK</Link>
                            </span>
                            <span className={styles.link}>
                                <Link href='/Writing' underline='none' className={classes.link}>WRITINGS</Link>
                            </span>
                            <span className={styles.link}>
                                <Link href='/About' underline='none' className={classes.link}>ABOUT</Link>
                            </span>
                            <span className={styles.link}>
                                <Link href='./SalieChien_Resume.pdf' target='_blank' rel='noopener' underline='none' className={classes.link}>RESUME</Link>
                            </span>
                        </Grid>
                    </Hidden>

                    <Hidden lgUp>
                        <Grid item xs={2} sm={3}></Grid>
                        <Grid item xs={2} sm={1}>
                            <IconButton
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon fontSize='large'/>
                            </IconButton>
                        </Grid>
                    </Hidden>

                </Grid>
            </div>

        </React.Fragment>
    )
}