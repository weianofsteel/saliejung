import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

export const Header = () => {
    return(
        <React.Fragment>
            
            <div className={styles.main1}>
                <Grid container spacing={2} style={{marginTop: "10px"}}>
                    <Grid item xs={2}>
                        <Link href='/' style={{color:'#1F1F1F'}}><span className={styles.title}>Saliejung</span></Link>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    
                    <Hidden mdDown>
                        <Grid item xs={1} className={styles.menuBar}>
                            <span className={styles.link}>
                                <Link href="/Work" style={{color:'#8F8F8F'}}>Work</Link>
                            </span>
                        </Grid>
                        <Grid item xs={1} className={styles.menuBar}>
                            <span className={styles.link}>
                                <Link href="/Writing" style={{color:'#8F8F8F'}}>Writing</Link>
                            </span>
                        </Grid>
                        <Grid item xs={1}>
                            <span className={styles.link}>
                                <Link href="/About" style={{color:'#8F8F8F'}}>About</Link>
                            </span>
                        </Grid>
                        <Grid item xs={1}>    
                            <span className={styles.link}>
                                <Link href="/Resume" style={{color:'#8F8F8F'}}>Resume</Link>
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