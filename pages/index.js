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

const Index = () => {
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

            {/* showcase */}

                <Grid container spacing={1} style={{marginTop:"12%"}}>
                        <Showcase/>
                </Grid>

            {/* showcase */}

            {/* view all projects */}

                 <Grid container spacing={1} style={{marginTop:"8%", marginBottom:"8%"}}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                        <Button href="/Work">
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