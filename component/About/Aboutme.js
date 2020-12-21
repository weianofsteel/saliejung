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
                    I learned a lot from discussing with colleagues and clients, they taught me many things 
                    beyond my imagination and broaden my point of view. Gradually, I established my own 
                    values of design, even created the first design system in the company. It means a lot 
                    to me, it makes me realize I am not only a designer who drew the rectangles in the Sketch,
                     but the designer who create system and disciplines. That is an important value for a big
                    team.<br/><br/>
                    Even there is still long way to learn, I am so excited to know more! In the future, I 
                    plan to put UX methods deeply into practice. To make people enjoy the digital world we 
                    are all going to face. 
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