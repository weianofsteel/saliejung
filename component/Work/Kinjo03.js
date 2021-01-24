import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Work.module.css';
import kinjo09 from '../../public/kinjo/kinjo09.png';
import kinjo10 from '../../public/kinjo/kinjo10.png';
import kinjo11 from '../../public/kinjo/kinjo11.png';
import kinjo12 from '../../public/kinjo/kinjo12.png';
import kinjo13 from '../../public/kinjo/kinjo13.png';
import kinjo14 from '../../public/kinjo/kinjo14.png';
import kinjo15 from '../../public/kinjo/kinjo15.png';
import { Carousel } from '../Public/Carousel.js';

export const Kinjo03 = () => {

    return(
        <React.Fragment>

            <div className={styles.progressMain} style={{paddingTop:'5%'}}>

                <Grid container>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'8%'}}>
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
                                    FLOWCHART
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Customers always Look for More
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    By interviewed the client and some potential customers, we 
                                    concluded the user stories to multiple scenarios:
                                    <ul>
                                        <li>
                                            I want to make two rings at once, so I reserve two courses for only one customer.
                                        </li>
                                        <li>
                                            I want to send my friend to join a course as a gift. Can I pay for the workshop without confirming the date?
                                        </li>
                                        <li>
                                            I am going to travel to Taiwan for five days. Unfortunately, there are no remaining seats. Can I call customer service to be on the waiting list?
                                        </li>
                                        <li>
                                            If I only reserve the course, I do not have to fill out the address during checkout.
                                        </li>
                                    </ul>
                                    <br/><br/>
                                    However, the process and requirements are getting complicated. 
                                    It was necessary to simplify it and narrow down the scope. 
                                    After frequent discussion with the developers and confirmed 
                                    with the client, we drew the flowchart to double-check all 
                                    the situations can be satisfied.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} style={{textAlign:'center'}}>
                        <img src={kinjo09} style={{width:'100%'}}/>
                        <span className={styles.caption}>
                            The flowchart was way more complicated initially. We simplified it 
                            due to technical constraints and project scope.
                        </span>
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
                                    WIREFRAME
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Define How to Express the Deeper Story
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    After confirming the flow, it had been easier to connect all 
                                    the dots on the website. However, other than the customization 
                                    and booking, it is critical to describe the brand story to the 
                                    customers. The process of metalworking is also appealing for 
                                    those who want to join the workshop.
                                    <br/><br/>
                                    To clarify those massive content, I sketched and used Axure to 
                                    create wireframes for the initial discussion. There are two 
                                    primary services: Product and Workshop. Each of them has its 
                                    landing page to explain details about categories and 
                                    recommendations. No matter the customers have already heard 
                                    of KINJO before or not, they will know them better. Most 
                                    importantly, find the ring they always want for a long time 
                                    and even make it by themself.
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'3%'}}>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8}>
                        <Grid container spacing={5} style={{textAlign:'center'}}>
                            <Grid item xs={6}>
                                <span className={styles.caption}>
                                    Course Landing Page
                                </span>
                                <img src={kinjo10} style={{width:'100%'}}/>
                            </Grid>
                            <Grid item xs={6}>
                                <span className={styles.caption}>
                                    Single Course Page
                                </span>
                                <img src={kinjo11} style={{width:'100%'}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
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
                                    MOCKUP
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Show the Elegance in Every Detail 
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Based on the sitemap above, more than twenty static pages 
                                    need to design, not to mention the dynamic pages with the 
                                    shopping and reservation flow. I worked with another designer
                                    , Cece, to complete the mockup together. At the beginning of 
                                    the project kickoff, she focused on branding and visuals. 
                                    After defined the style and direction, I started building the 
                                    design system and library to accelerate the working process.
                                    <br/><br/>
                                    We created an abundance of various components to bring out 
                                    the story about the brand, making process, product details
                                    , and metalworking knowledge. It is not only about selling 
                                    products but telling a story that we sincerely want to share. 
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <div>
                    <Carousel
                        imgsrc={[kinjo12, kinjo13, kinjo14]}
                        caption={[
                            'Course Reservation',
                            "Product Customization",
                            "Blog Post"
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

                <Grid container style={{marginTop:'8%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} className={styles.content}>
                            <Grid item xs={12}>
                                <span className={styles.designHighlight}>
                                    DESIGN SYSTEM
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightTitle}>
                                    Just Learned the Importance of Design System
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={styles.designHighlightContent}>
                                    Usually, our clients do not put much budget on digital 
                                    branding. Fortunately, this project is big enough to define 
                                    a proper design system. It was not only a challenge for 
                                    myself but all the team members. Hence we spent many 
                                    resources and time discussing and learned together. I 
                                    collaborated closely with front-end engineers to build a 
                                    design system that satisfied both needs. As a web designer
                                    , I finally understood the importance of component naming 
                                    and the technical language we should know to better 
                                    communicate with the engineers. 
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <Grid container style={{marginTop:'5%'}}>
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                        <img src={kinjo15} style={{width:'100%'}}/>
                        <span className={styles.caption}>
                            I researched other design systems for reference, such as Material 
                            Design (Google), Carbon Design System (IBM), Lightning Design System 
                            (Salesforce). Eventually, we organized the symbols on Airtable (Left) 
                            and took documentation on Confluence (Right).
                        </span>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2} md={3}></Grid>
                    <Grid item xs={8} md={6}>
                        <Grid container spacing={3} className={styles.content} style={{marginTop:'8%'}}>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle1}>
                                    THE PROCESS / 03
                                </span>
                            </Grid>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <span className={styles.progressTitle2}>
                                    Next Step
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

                <Grid container className={styles.content} style={{marginTop:'5%'}}>
                    <Grid item xs={false} md={3}></Grid>
                    <Grid item xs={12} md={6}>
                        <span className={styles.caption}>
                            The project had a pre-launch at the end of October 2018. Promise Rings with customization flow and buyer's guide will implement in the later phase.
                        </span>
                    </Grid>
                    <Grid item xs={false} md={3}></Grid>
                </Grid>

                <div style={{marginTop:'5%'}}>&nbsp;</div>

            </div>

        </React.Fragment>
    )
}