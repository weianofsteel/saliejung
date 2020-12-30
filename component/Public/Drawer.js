import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Public.module.css';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

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
        paddingTop:'3rem'
    }
});

export const Drawer = (props) => {
    
    const classes = useStyles();

    const {
        handleDrawerClose
    } = props;

    return(
        <React.Fragment>
            <div style={{height:'100vh', marginLeft:'6%', marginRight:'6%', paddingTop: "10px"}}>
            <Grid container>
                <Grid item xs={4}>
                    <span className={styles.drawerTitle}>saliejung</span>
                </Grid>
                <Grid item xs={7}></Grid>            
                <Grid item xs={1} style={{textAlign:'center'}}>
                    <div>
                        <IconButton
                            onClick={handleDrawerClose}
                        >            
                            <CloseIcon style={{color:'#B8B8B8'}}/>
                        </IconButton> 
                    </div>
                </Grid>
            </Grid>
                        
            <Grid container className={classes.drawerHeader} style={{marginTop:'4rem'}}>
                <Grid item xs={4}>
                    <span className={styles.link}>
                        <Link href="/Work" underline='none' className={classes.drawerLink}>WORK</Link>
                    </span>
                </Grid>
            </Grid>    

            <Grid container className={classes.drawerHeader}>
                <Grid item xs={4}>
                    <span className={styles.link}>
                        <Link href="/Writing" underline='none' className={classes.drawerLink}>WRITINGS</Link>
                    </span>
                </Grid>
            </Grid>

            <Grid container className={classes.drawerHeader}>
                <Grid item xs={4}>
                    <span className={styles.link}>
                        <Link href="/About" underline='none' className={classes.drawerLink}>ABOUT</Link>
                    </span>
                </Grid>
            </Grid>

            <Grid container className={classes.drawerHeader}>
                <Grid item xs={4}>
                    <span className={styles.link}>
                        <Link href='./SalieChien_Resume.pdf' target='_blank' rel='noopener' underline='none' className={classes.drawerLink}>RESUME</Link>
                    </span>
                </Grid>
            </Grid>    
            </div>
        </React.Fragment>
    )
} 