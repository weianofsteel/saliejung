import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Writing.module.css';
import Link from '@material-ui/core/Link';
import TouchAppIcon from '@material-ui/icons/TouchApp';

class Article extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
            
                {/* article */}

                <Grid container spacing={1} style={{paddingTop:"6%"}}>
                    <Grid item xs={5} className={styles.articleBlock} style={{paddingTop:20}}>
                        <span>
                            <Link
                                href='/Writing/Article01'
                                style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                            >
                                An exciting adventure for a new designer at Agoda
                                <TouchAppIcon/>
                            </Link>
                        </span>
                        <br/>
                        <span style={{fontSize:"16px",fontFamily:'Roboto'}}>December 2019</span>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={5} className={styles.articleBlock} style={{paddingTop:20}}>
                        <span>
                            <Link
                                href='/'
                                style={{color:'#1F1F1F', fontFamily: 'Roboto Slab'}}
                            >
                                Mentoring the Next Generation of Behavioral Designers in Thailand
                                <TouchAppIcon/>
                            </Link>
                        </span>
                        <br/>
                        <span style={{fontSize:"16px",fontFamily:'Roboto'}}>August 2020</span>
                    </Grid>
                </Grid>

                {/* article */}

                {/* image */}

                <Grid container spacing={1} style={{paddingTop:"5%", paddingBottom:"6%"}}>
                    <Grid item xs={5} className={styles.imageBlock}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={5} className={styles.imageBlock}></Grid>
                </Grid>

                {/* image */}
            
            </React.Fragment>
        )
    }
}

export default Article;