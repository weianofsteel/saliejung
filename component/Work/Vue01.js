import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import vueHeader from '../../public/vue/vue-header.png';

export const Vue01 = () => {
    
    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={vueHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>

            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={5}></Grid>
                <Grid item xs={6} md={2}>
                    <div className={styles.title2}>
                        VUE Movie Database   
                    </div>
                </Grid>     
                <Grid item xs={3} md={5}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        IMDb for Asia, the Biggest Database for Movie, Celebrity, and Netflix Finder.
                    </h2>
                    <h2 className={styles.title4}>§</h2>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={styles.article}>
                        <span style={{fontWeight:700, letterSpacing:'0.03rem'}}>CONTEXT&nbsp;&nbsp;</span>
                        If we could collect all the movies into a database, what would you do? 
                        At the first meeting, the product manager asked me this question, and I 
                        immediately thought of IMDb, the website I would always check after I 
                        see a movie. However, IMDb did a great job on the database, then what 
                        else could we do? As a product based in Taiwan, the object turns out to 
                        curate the largest movie database in Mandarin, the IMDb in Asia. We also 
                        aim to create a better UI & UX design comparing to IMDb 90s style.
                        <br/><br/>
                        <span style={{fontWeight:700, letterSpacing:'0.03rem'}}>APPROACH&nbsp;&nbsp;</span> 
                        It was a valuable experience for me to craft a product from 0 to 1. We 
                        decided to build this product by Scrum. In the beginning, all the team 
                        members collected user stories on Jira, and the product owner categorized 
                        them into a different phase. At the same time, I did lots of research and 
                        planned the content structure for each page. Then we soon had our minimum 
                        viable product (MVP). We kept doing user testing and optimized. 
                        Simultaneously, we started engaging in marketing, Facebook business page, 
                        and looking for business cooperation.
                    </p>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>
            
        </React.Fragment>
    )
}