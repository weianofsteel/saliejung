import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Banner } from '../component/Home/Banner.js';
import { Showcase } from '../component/Home/Showcase.js';
import { Writings } from '../component/Home/Writings.js';
import { Footer } from '../component/Home/Footer.js';
import { Header } from '../component/Home/Header.js';
import Funfacts from '../component/Home/Funfacts.js';
import styles from '../css/Home.module.css';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useEffect } from 'react';

const Index = () => {
    
    const [scroll, setScroll] = React.useState(0);

    useEffect(()=>{
        if(window !== undefined){
            setScroll(window.scrollY);
        }
    })

    return(
        <React.Fragment>
        
            {/* title & menu */}
                
            <div>
                <Header/>
            </div>            

            {/* title & menu */}

            <div className={styles.main1}>
                
            {/* banner */}

                <Grid container spacing={1} style={{marginTop:"12%"}}>
                    <div>
                        <Banner/>
                    </div>
                </Grid>

            {/* banner */}


            <Grid container spacing={1} style={{marginTop:"2%"}}>
            <Grid item xs={11}></Grid>
            <Grid item xs={1}>
            <Button style={{position:'fixed'}} onClick={()=>{console.log(scroll, 999)}}>
                <ExpandLessIcon fontSize='large' style={{fontSize:'50px'}}/>
            </Button>
            </Grid>
            </Grid>

            {/* showcase */}

                <Grid container spacing={1} style={{marginTop:"12%"}}>
                        <Showcase/>
                </Grid>

            {/* showcase */}

            {/* view all projects */}

                 <Grid container spacing={1} style={{marginTop:"8%", marginBottom:"8%"}}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                        <Button 
                            href="/Work"
                        >
                            <span className={styles.buttonViewAllProjects}>VIEW ALL PROJECTS</span>
                        </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                </Grid>

            {/* view all projects */}

            </div>

            {/* writings */}

            <div className={styles.main2}>
                <Writings/>
            </div>

            {/* writings */}

            {/* fun facts */}

            <div>
                <Funfacts/>
            </div>

            {/* fun facts */}

            {/* footer */}

            <div className={styles.main3}>
                <Footer/>
            </div>
            <div style={{marginTop:"4%"}}></div>

            {/* footer */}

        </React.Fragment>
    )
}

export default Index;