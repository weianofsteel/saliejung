import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import teamson01 from '../../../public/teamson/teamson01.png';
import teamson02 from '../../../public/teamson/teamson02.png';
import teamson03 from '../../../public/teamson/teamson03.png';
import teamson04 from '../../../public/teamson/teamson04.png';
import teamson05 from '../../../public/teamson/teamson05.png';
import teamson06 from '../../../public/teamson/teamson06.png';

export const Teamson02 = () => {
    return(
        <React.Fragment>

            <div className={styles.progressMain}>
                
                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'12%'}}>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle1}>
                                    THE PROCESS / 01
                                </span>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle2}>
                                    Research, Understand & Define
                                </span>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.dotLine}>
                                    ·&nbsp;·&nbsp;·
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    SITEMAP
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Movies are also Universal Languages
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    The client has a clear picture of the content 
                                    for the new website, so we did not spend much 
                                    time discussing the information structure. We 
                                    just made the sitemap more complete with the 
                                    sub-pages.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8}>
                        <img src={teamson01} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    RESEARCH
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Feel like Browse the Product Catalog to Shop
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Without experience in design the e-commerce site, I 
                                    researched a lot on large EC platforms and furniture 
                                    brands, observing their checkout flow, details, and 
                                    the suitable style for Teamson. One of our goals is 
                                    to create an EC site but not makes users feel marketing
                                    and sales, which was quite tricky to find the balance.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8}>
                        <img src={teamson02} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.imgDescription}>
                                    <br/>Researched and found the commonly used UI among those EC sites.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    DESIGN PROPOSAL
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Define the Look and Feel
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    In the beginning, we will have the design proposal 
                                    with the client to define the branding direction. 
                                    Usually, we show two versions of the style on the 
                                    homepage. I planned to boost the brand image by 
                                    fine-tuning situational photos, let those adorable 
                                    products speak by themselves. Using white space, 
                                    grays, and the layout following grid to present 
                                    neutral style makes every brand have their 
                                    opportunities to stand out.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={5} md={4}>
                        <img src={teamson03} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={5} md={4}>
                        <img src={teamson04} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    FLOWCHART
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Figure Out the Customers Needs
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    It was my first e-commerce project, I created the 
                                    flowchart for the shopping & checkout process to make 
                                    sure we won't miss any steps. Users can find the 
                                    products they want from the product list or buyer's 
                                    guide. Due to the sweet service of parts request, I 
                                    also created a flowchart for it. Customers can easily 
                                    request assembly items by fill the form.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%', paddingLeft:'5%', paddingRight:'5%'}} spacing={2}>
                    <Grid item xs={6}>
                        <img src={teamson05} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={teamson06} style={{width:'100%'}}/>
                    </Grid>
                </Grid>

            </div>
            
        </React.Fragment>
    )
}