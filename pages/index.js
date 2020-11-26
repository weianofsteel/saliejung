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
import { Scrollup } from '../component/Public/Scrollup';

const Index = () => {
    
    const handleScrolltoTop = () => {
        if(window !== undefined) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    }

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
            
                    <div style={{paddingTop:'20%',marginLeft:'80%',position:'fixed'}}>
                        <Scrollup
                            handleScrolltoTop={handleScrolltoTop}
                        />
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
                    <Grid item sm={3}></Grid>
                    <Grid item xs={12} sm={6} style={{textAlign:'center'}}>
                        <a href='/Work' className={styles.viewLink}>VIEW ALL PROJECTS</a>
                    </Grid>
                    <Grid item md={3}></Grid>
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