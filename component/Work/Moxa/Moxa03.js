import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import { Carousel } from '../../Public/Carousel.js';
import moxaGif05 from '../../../public/gif/moxa05.gif';
import moxaGif06 from '../../../public/gif/moxa06.gif';
import moxaGif07 from '../../../public/gif/moxa07.gif';
import moxa12 from '../../../public/moxa/moxa12.png';
import moxa13 from '../../../public/moxa/moxa13.png';
import moxa14 from '../../../public/moxa/moxa14.png';
import moxa15 from '../../../public/moxa/moxa15.png';
import moxa16 from '../../../public/moxa/moxa16.png';

export const Moxa03 = () => {
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
                                    MOCKUP
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    An Accessible Product Finder
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    As you can see, the original information architecture of the 
                                    menu was a  bit messy. There are six categories and several 
                                    sub-categories under the product section, which is hard to find 
                                    the specific product. It is frustrated to see such a menu like 
                                    this. The solution is organizing all the products into three 
                                    main categories, that users can check the main category first 
                                    then find out the products and more details after clicking on 
                                    the page. There is also an index page to search products in 
                                    their preferred ways.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <div>
                    <Carousel
                        imgsrc={[moxa12, moxa13, moxa14]}
                        caption={[
                            'The original product menu with three layers and the hierarchy of each other is ambiguous.',
                            'We worked with the client to narrow it down and guide users to the complete product index.',
                            'By the index, customers can search by product category and series.'
                        ]}
                    />
                </div>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    MOTION GRAPHICS
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    How IIoT connect with the Industries
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    With the increasing trend of the industrial Internet of 
                                    Things (IIoT), Moxa wants to highlight this rising star. 
                                    To better explain the application to different industries 
                                    and areas, we worked on some motion graphics to make 
                                    customers easily imagine the process to solutions.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'4%'}}>

                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Carousel
                            imgsrc={[moxaGif05, moxaGif06, moxaGif07]}
                            caption={[
                                '“How IIoT improve the process to collect your data?”',
                                '“How IIoT improve the process to connect your data?”',
                                '“How IIoT improve the process to make your data actionable?”'
                            ]}
                        />
                    </Grid>
                    <Grid item xs={1}></Grid>

                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2} style={{textAlign:'center'}}>
                        <span className={styles.dotLine}>
                            ·&nbsp;·&nbsp;·
                        </span>
                    </Grid>
                    <Grid item xs={5}></Grid>
                </Grid>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    ICONOGRAPHY DESIGN
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Strengthen the Tedious content with Creative
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    We tried many approaches to balance the rich content and 
                                    simplify the complexity of the industrial industry. I 
                                    designed several icons to express the content straightforward. 
                                    They can represent an abstract idea or broader knowledge.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <div>
                    <Carousel
                        imgsrc={[moxa15, moxa16]}
                        caption={[
                            'The simple version of icons stand for a single idea.',
                            'The compound version of icons stand for the process, application, and broader concept.'
                        ]}
                    />
                </div>

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2} style={{textAlign:'center'}}>
                        <span className={styles.dotLine}>
                            ·&nbsp;·&nbsp;·
                        </span>
                    </Grid>
                    <Grid item xs={5}></Grid>
                </Grid>

                <div style={{marginTop:'8%'}}>&nbsp;</div>

            </div>

        </React.Fragment>
    )
}