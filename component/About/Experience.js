import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/About.module.css';

export const Experience = () => {
    return(
        <React.Fragment>

            <Grid container spacing={1}>
                <Grid item xs={12} style={{borderTop:'1px solid black'}}>
                    <div className={styles.experienceTitle}>
                        <span>Experience</span>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <span className={styles.jobTitle}>UX Designer</span>
                </Grid>

                <Grid item xs={12}>
                    <p className={styles.jobtDetail}>Agoda Services Co., Ltd. | Bangkok</p>
                    <p className={styles.jobtDetail}>June 2019 - present</p>
                </Grid>
            </Grid>

            <Grid container spacing={1} style={{marginTop:"5%"}}>
                
                <Grid item xs={12}>
                    <span className={styles.jobTitle}>Freelance Web Designer</span>
                </Grid>

                <Grid item xs={12}>
                    <p className={styles.jobtDetail}>July 2018 - Present</p>
                </Grid>
            </Grid>

            <Grid container spacing={1} style={{marginTop:"5%"}}>
                
                <Grid item xs={12}>
                    <span className={styles.jobTitle}>Web Designer</span>
                </Grid>

                <Grid item xs={12}>
                    <p className={styles.jobtDetail}>Tenten Digital Agency | Taipei</p>
                    <p className={styles.jobtDetail}>September 2016 - July 2018</p>
                </Grid>
            </Grid>

            <Grid container spacing={1} style={{marginTop:"5%"}}>
                
                <Grid item xs={12}>
                    <span className={styles.jobTitle}>Design Intern</span>
                </Grid>

                <Grid item xs={12}>
                    <p className={styles.jobtDetail}>Tenten Digital Agency | Taipei</p>
                    <p className={styles.jobtDetail}>June 2016 - September 2016</p>
                </Grid>
            </Grid>

            <Grid container spacing={1} style={{marginTop:"5%"}}>
                
                <Grid item xs={12}>
                    <span className={styles.jobTitle}>Social Media Editor</span>
                </Grid>

                <Grid item xs={12}>
                    <p className={styles.jobtDetail}>Fusion Medium Inc. | Taipei</p>
                    <p className={styles.jobtDetail}>June 2015 - May 2016</p>
                </Grid>
            </Grid>

            <div className={styles.experienceTitle} style={{marginTop:"5%"}}>
                <span>Education</span>
            </div>

            <div style={{marginTop:"5%"}}>
                <span className={styles.jobTitle}>B.B.A. in Business Administration</span> 
                <p className={styles.jobtDetail}>National Central University, Taiwan</p>
                <p className={styles.jobtDetail}>2011 - 2015</p>    
            </div>

            <div className={styles.experienceTitle} style={{marginTop:"5%"}}>
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