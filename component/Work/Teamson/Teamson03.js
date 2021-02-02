import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import teamson07 from '../../../public/teamson/teamson07.png';
import teamson08 from '../../../public/teamson/teamson08.png';
import teamson09 from '../../../public/teamson/teamson09.png';
import teamson10 from '../../../public/teamson/teamson10.png';
import teamson11 from '../../../public/teamson/teamson11.png';

export const Teamson03 = () => {
    return(
        <React.Fragment>

            <div className={styles.progressMain}>

                <Grid container style={{}}>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'12%'}}>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle1}>
                                    THE PROCESS / 02
                                </span>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle2}>
                                    Design & Iterate
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
                                    ICON DESIGN
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Sorts of Products with a Consist Style
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Teamson's target audience is grandmother and mom, but 
                                    the customers are kids. We defined the tone & manner 
                                    in a neutral style, but we still want to keep the 
                                    creative lifestyle with elaborate icons. Considering 
                                    the specialty of Teamson products, we designed the 
                                    icons for every category. Customers easily distinguish 
                                    products by them.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8}>
                        <img src={teamson07} style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.imgDescription}>
                                    <br/>We created 40 fun and creative icons.
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
                                    FINAL DESIGN
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Organize the Products with Functional Logic
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    To solve the problem of hard search among hundreds of 
                                    products, I worked hard on a better search experience. 
                                    On the product list page, there are filters for product 
                                    category and brand. Also, customers can sort products by 
                                    price and name. On the single product page, there is 
                                    sufficient information to know all the details, such as 
                                    product specs, brand story, assembly instruction, and 
                                    recommendations.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container spacing={6} style={{marginTop:'4rem', paddingLeft:'4%', paddingRight:'4%'}}>
                    <Grid item xs={6} md={3}>
                        <img src={teamson08} style={{width:'100%'}}/>
                        <br/><br/>
                        <span className={styles.imgDescription}>
                            &nbsp;Monthlys View
                        </span>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={teamson09} style={{width:'100%'}}/>
                        <br/><br/>
                        <span className={styles.imgDescription}>
                            &nbsp;Weekly View
                        </span>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={teamson10} style={{width:'100%'}}/>
                        <br/><br/>
                        <span className={styles.imgDescription}>
                            &nbsp;Daily View
                        </span>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={teamson11} style={{width:'100%'}}/>
                        <br/><br/>
                        <span className={styles.imgDescription}>
                            &nbsp;Single Event
                        </span>
                    </Grid>
                </Grid>

                <Grid container style={{}}>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'12%'}}>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.dotLine}>
                                    ·&nbsp;·&nbsp;·
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} md={3}></Grid>
                </Grid>

                <div style={{marginTop:'6%'}}>&nbsp;</div>

            </div>

        </React.Fragment>
    )
}