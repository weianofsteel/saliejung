import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import Button from '@material-ui/core/Button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

export const Footer = () => {
    return(
        <React.Fragment>
            
            <Grid container spacing={1} className={styles.footerBlock}>
                <Grid item xs={7}>
                    <div>
                        Salie ShengJung Chien --- Product Designer
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div>
                        Open to new opportunities
                    </div>
                    <br/>
                    <Button 
                        href="/"
                        startIcon={<MailOutlineIcon/>}
                    >
                        GMAIL
                    </Button>
                    <br/>
                    <br/>
                    <Button 
                        href="/"
                        startIcon={<LinkedInIcon/>}
                    >
                        LINKEDIN
                    </Button>
                    <br/>
                    <Button 
                        href="/"
                        startIcon={<ImportContactsIcon/>}
                    >
                        MEDIUM
                    </Button>
                </Grid>
            </Grid>

            <Grid container spacing={1} className={styles.footerBlock2}>
                <Grid item xs={12}>
                    <span>
                        Designed by Chien ShengJung © 2020 all rights reserve 
                    </span>
                </Grid>
                <Grid item xs={12}>
                    <span>
                        Developed by Wang WeiAn
                    </span>
                </Grid>
            </Grid>
        
        </React.Fragment>
    )
}