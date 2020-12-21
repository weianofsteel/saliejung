import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/About.module.css';
import Button from '@material-ui/core/Button';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export const Aboutme = () => {
    return(
        <React.Fragment>
            
            <div style={{marginTop:'8%'}}>
                <p className={styles.aboutme}>
                    Ｍy name is 簡聖蓉, read as "Chien, Sheng-Jung" a Taiwanese 
                    designer currently based in Bangkok. Or, you can just call me 
                    Salie.<br/><br/>
                    I have created digital products since 2016, striving to make 
                    people enjoy the digital world through memorable, useful, and 
                    friendly experiences. I seek to create simple and aesthetic 
                    interactive experiences by learning, practicing, and reflecting
                     constantly.<br/><br/>
                    In the past few years, I have delivered various designs for 
                    clients from leading tech companies, startups, and design 
                    agencies. Currently, I am a Product Designer at Agoda. I worked
                     on Agoda Flights for the next level after it launched in 
                     mid-2019 and curating a better experience for Hotels Pricing. 
                    At Agoda, I co-initiated a recruitment program and gave a 
                    public speech to increase awareness of Agoda Design, and 
                    partnered with Thammasat Design Center to mentor a couple of 
                    talents. The program finally becomes a regular session in the 
                    Agoda design team.
                </p>
                <h2 className={styles.subtitle}>
                    Before knowing design
                </h2>
                <p className={styles.aboutme}>
                    I was born and raised in Taipei, Taiwan, dreaming of becoming 
                    an English teacher or an international trader when I was little.
                     The technology sounds like a nerdy term to me, and the design 
                     is even further from my life. I did not have a chance to learn 
                    user experience or design thinking until I was onboarding on my 
                    first design job as an intern.
                    <br/><br/>
                    The transition from Taiwan to Thailand, and from business 
                    major to design digital products wasn't a smooth path. 
                    Luckily, I am a fast learner who is always curious about new 
                    technology and trends. I enjoy learning new things every day 
                    in the fast-changing industry, which is the most attractive 
                    part to me about design technology. I believe that a good 
                    design comes from the balance between user-centered motivation
                     and business goals.
                     <br/><br/>
                    Outside of work, I am traveling, watching movies, Netflix, 
                    eating cake, and cooking.
                    <br/><br/>
                    You can follow me here - LinkedIn, Medium and Github
                    or reach out by email - saliejung47@gmail.com
               </p>
            </div>

            <br/><br/>

            <div>
                <Button
                    href='/Resume'
                    style={{color: '#8F8F8F',fontSize: '22px', fontFamily:'Roboto', fontWeight:400}}
                    endIcon={<OpenInNewIcon/>}
                >
                    VIEW RESUME
                </Button>
            </div>

        </React.Fragment>
    )
}