import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/About.module.css';

export const Experience = () => {
    return(
        <React.Fragment>
            
            <div className={styles.experienceTitle} style={{marginTop:"-25%"}}>
                <span>Experience</span>
            </div>

            <Grid container spacing={1} style={{marginTop:"5%"}}>
                
                <Grid item xs={5}>
                    <span className={styles.jobTitle}>Agoda</span>
                </Grid>

                <Grid item xs={2}></Grid>

                <Grid item xs={5}>
                    <p className={styles.jobtDetail}>UX Designer</p>
                    <p className={styles.jobtDetail}>June 2019 - present</p>
                </Grid>
            </Grid>

            <Grid container spacing={1} style={{marginTop:"5%"}}>
                
                <Grid item xs={5}>
                    <span className={styles.jobTitle}>Tenten Digital Agency</span>
                </Grid>

                <Grid item xs={2}></Grid>

                <Grid item xs={5}>
                    <p className={styles.jobtDetail}>Web Designer</p>
                    <p className={styles.jobtDetail}>September 2016 - July 2018</p>
                </Grid>
            </Grid>

            <Grid container spacing={1} style={{marginTop:"5%"}}>
                
                <Grid item xs={5}>
                    <span className={styles.jobTitle}></span>
                </Grid>

                <Grid item xs={2}></Grid>

                <Grid item xs={5}>
                    <p className={styles.jobtDetail}>Design Intern</p>
                    <p className={styles.jobtDetail}>June 2016 - August 2016</p>
                </Grid>
            </Grid>

            <Grid container spacing={1} style={{marginTop:"5%"}}>
                
                <Grid item xs={5}>
                    <span className={styles.jobTitle}>VidaOrange.com</span>
                </Grid>

                <Grid item xs={2}></Grid>

                <Grid item xs={5}>
                    <p className={styles.jobtDetail}>Social Media Editor</p>
                    <p className={styles.jobtDetail}>June 2015 - May 2016</p>
                </Grid>
            </Grid>

            <div className={styles.experienceTitle} style={{marginTop:"25%"}}>
                <span>Education</span>
            </div>

            <div style={{marginTop:"5%"}}>
                <span className={styles.jobTitle}>B.B.A. in Business Administration</span> 
                <p className={styles.jobtDetail}>National Central University, Taiwan</p>
                <p className={styles.jobtDetail}>2011 - 2015</p>    
            </div>

            <div className={styles.experienceTitle} style={{marginTop:"25%"}}>
                <span>Contact</span>
            </div>

            <div style={{marginTop:"5%"}}>
                <span>
                    <a href="/">Email</a>/
                    <a href="/"> LinkedIn</a>/
                    <a href="/">Medium</a>/
                    <a href="/">Github</a>
                </span>
            </div>
            
        </React.Fragment>
    )
}