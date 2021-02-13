import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../../css/Work.module.css';
import { LearnMore } from '../../Public/LearnMore.js';
import moxaHeader from '../../../public/moxa/moxa-header.png';
import { Carousel } from '../../Public/Carousel.js';
import moxa01 from '../../../public/moxa/moxa01.png';
import moxa02 from '../../../public/moxa/moxa02.jpg';
import moxaGif01 from '../../../public/gif/moxa01.gif';
import moxaGif02 from '../../../public/gif/moxa02.gif';
import moxaGif03 from '../../../public/gif/moxa03.gif';
import moxaGif04 from '../../../public/gif/moxa04.gif';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    link: {
        fontFamily:'Roboto',
        fontWeight:400,
        color:'#8F8F8F',
        fontSize:'1.1rem',
        "&:hover":{
            color:'black'
        }
    }
});  

export const Moxa01 = () => {
    
    const classes = useStyles();

    return(
        <React.Fragment>

            <Grid container className={styles.img01}>
                
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <img src={moxaHeader} className={styles.bannerImg}/>
                </Grid>
                
            </Grid>

            <Grid container style={{marginTop:"5%"}}>
                <Grid item xs={3} md={4}></Grid>
                <Grid item xs={6} md={4}>
                    <div className={styles.title2}>
                        MOXA Technologies 
                    </div>
                </Grid>     
                <Grid item xs={3} md={4}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={styles.title3}>
                        Trusted Image for a Leading Brand in Industrial Networking Industry
                    </h2>
                    <h2 className={styles.title4}>§</h2>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={styles.article}>
                        <span className={styles.boldContent}>CONTEXT&nbsp;&nbsp;</span>
                        Founded in Taiwan for more than 30 years,&nbsp; 
                        <Link 
                            href='https://www.moxa.com/en/' 
                            underline='none' 
                            className={classes.link}
                            target='_blank'
                        > 
                            Moxa 
                        </Link> 
                        &nbsp;is a leading 
                        provider of industrial networking, computing, and automation 
                        solutions to help customers enable connectivity for the Industrial 
                        Internet of Technology (IIoT). Before this project, we had worked on 
                        some campaign landing page for&nbsp; 
                        <Link 
                            href='https://www.moxa.com/en/' 
                            underline='none' 
                            className={classes.link}
                            target='_blank'
                        > 
                            Moxa 
                        </Link>
                        . This time, they want to achieve 
                        a greater goal - revamping the original official website, integrating 
                        all the information, products, and PR contents on the new site. We aim 
                        to give the brand a new digital image with consistent language across 
                        the company and improve the experience to fulfill customers' needs to 
                        increase the conversion rate. 
                        <br/><br/>
                        <span className={styles.boldContent}>CHALLENGE&nbsp;&nbsp;</span>
                        You can tell by the product line that&nbsp; 
                        <Link 
                            href='https://www.moxa.com/en/' 
                            underline='none' 
                            className={classes.link}
                            target='_blank'
                        > 
                            Moxa 
                        </Link> 
                        &nbsp;is a big corporation 
                        like&nbsp;
                        <Link 
                            href='https://www.siemens.com/global/en.html' 
                            underline='none' 
                            className={classes.link}
                            target='_blank'
                        > 
                            Siemens 
                        </Link> 
                        ,&nbsp; 
                        <Link 
                            href='https://www.cisco.com/c/en/us/index.html' 
                            underline='none' 
                            className={classes.link}
                            target='_blank'
                        > 
                            Cisco 
                        </Link>
                        , 
                        or&nbsp;
                        <Link 
                            href='https://www.hpe.com/us/en/home.html' 
                            underline='none' 
                            className={classes.link}
                            target='_blank'
                        > 
                            HPE 
                        </Link>
                        . 
                        It certainly took more time to 
                        communicate with different sectors. We even need to have final 
                        confirmation of the homepage design from the senior management. 
                        That's the main reason why it took more than a year for the 
                        implementation. Speaking of industrial networking, it is not a 
                        simple field to understand. Luckily, our client is more than 
                        willing to guide us that industry knowledge along the way.  
                    </p>
                </Grid>     
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'5%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={5} className={styles.content}>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Timeline</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Aug 2017 - Jan 2019 (7 months in design)
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>Team</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Designer (2), Art Director (1), Product Manager (1), Front-end Developers (3)
                            </span>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={styles.contentTitle}>My role</span>
                            <br/>
                            <span className={styles.contentDetail}>
                                Competitive Analysis, Wireframe, Information Architecture, Design Proposal, UI/UX Design, Web Design
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
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
                                DESIGN HIGHLIGHT
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightTitle}>
                                The Importance of Information Archtecture
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                Imagine how many things around you connect to the internet. 
                                There are mobile, subway, electricity, and even shipping. 
                                We need&nbsp; 
                                <span className={styles.boldContent}>a robust information structure</span> 
                                &nbsp;to explain the application to the industry well to Moxa's 
                                customers. By grouping relevant information, considering the 
                                needs and easy access to products, the solution is to help 
                                customers digest the content with iconography and interactive 
                                layout. Everyone can enjoy the reading and understanding better 
                                what Moxa could do for them.
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <div>
                <Carousel
                    imgsrc={[moxaGif01, moxa01]}
                    caption={[
                        'I define a structure to accommodate content from different industries. There are manufacturing, rail, power, oil, marine, and transportation.',
                        "We created various layouts for different scenarios and use cases."
                    ]}
                />
            </div>

            <Grid container style={{marginTop:'8%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3} className={styles.content}>
                        <Grid item xs={12}>
                            <span className={styles.designHighlight}>
                                PROTOTYPE
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightTitle}>
                                Little Tricky to Design a Search Function with Details
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                In the beginning, I did not realize it is a challenge to 
                                design the search function. However, since Moxa has tons of 
                                products and they have many types of customers. It is a 
                                critical part of the website to fulfill sales, marketing 
                                specialists, and engineers' needs. Speaking of design, we put 
                                much effort into the interaction and the connection between 
                                the search function and the page. I have to admit that it was 
                                my first time surfing on tons of websites looking for references 
                                on search. Lastly, I delivered three versions with a different 
                                angle of design. We finally published a solution with many details. 
                                Users can easily find their needs with such a friendly experience 
                                with auto-suggestions and promoted results.
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <div>
                <Carousel
                    imgsrc={[moxa02, moxaGif02, moxaGif03, moxaGif04]}
                    caption={[
                        'The final solution',
                        'On the live website',
                        'Not adopted design',
                        'Not adopted design'
                    ]}
                />
            </div>

            <Grid container style={{marginTop:'8%'}}>
                
                <Grid item xs={3} md={5}></Grid>
                <Grid item xs={6} md={2}>
                    <h3 className={styles.reflection}>
                        Reflection
                    </h3>
                </Grid>
                <Grid item xs={3} md={5}></Grid>
            
            </Grid>

            <Grid container style={{marginTop:'1%'}}>
                <Grid item xs={5}></Grid>
                <Grid item xs={2} style={{textAlign:'center'}}>
                    <span className={styles.dotLine}>
                        ·&nbsp;·&nbsp;·
                    </span>
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>

            <Grid container style={{marginTop:'3%'}}>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3} className={styles.content}>
                        <Grid item xs={12}>
                            <span className={styles.designHighlightContent}>
                                What I learned most during this project is to&nbsp; 
                                <span className={styles.boldContent}>simplify complicated information into valuable knowledge</span>
                                . We worked 
                                seamlessly with the client for almost two years. I appreciate 
                                that our clients work as hard as we as designers. Their feedback 
                                always makes me think about how we could do our best to solve 
                                the pain points, which applicable to 99% of the case. We do not 
                                easily give up finding out the best solution. Finally, together 
                                we completed a website that contains a thoughtful user experience, 
                                assisting sales efficiency and digital imagery that clients can trust. 
                                I was satisfied with the outcome and the relationship we built 
                                with the client.
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container style={{marginTop:'6%',marginBottom:'6%'}} className={styles.scrollDown}>
                <Grid item xs={2} md={4}></Grid>
                <Grid item xs={8} md={4} style={{textAlign:'center'}}>
                    <LearnMore scrollY={1590} />
                </Grid>
                <Grid item xs={2} md={4}></Grid>
            </Grid>

        </React.Fragment>
    )
}