import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Banner } from '../component/Home/Banner.js';
import { Showcase } from '../component/Home/Showcase.js';
import { Writings } from '../component/Home/Writings.js';
import { Footer } from '../component/Public/Footer.js';
import { Header } from '../component/Public/Header.js';
import Funfacts from '../component/Home/Funfacts.js';
import styles from '../css/Home.module.css';
import { Drawer } from '../component/Public/Drawer.js';
import { PageLoader } from '../component/Public/PageLoader.js';
import { NextSeo } from 'next-seo';

const Index = () => {

    const [drawer, setDrawer] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawer(true);
    }

    const handleDrawerClose = () => {
        setDrawer(false);
    }

    return(
        <React.Fragment>
        
            <NextSeo
                title="Salie Chien — Product Designer | Portfolio"
                description="Salie Chien is a product designer currently working at Agoda based in Bangkok. She has created digital products since 2016, striving to make people enjoy the digital world through memorable, useful, and friendly experiences. She worked on Agoda Flights for the next level and curating a better experience for Product Marketing."
                openGraph={{
                    url: 'https://saliejung.com',
                    title: 'Salie Chien — Product Designer | Portfolio',
                    description: 'Salie Chien is a product designer currently working at Agoda based in Bangkok. She has created digital products since 2016, striving to make people enjoy the digital world through memorable, useful, and friendly experiences. She worked on Agoda Flights for the next level and curating a better experience for Product Marketing.',
                    images: [
                      {
                        url: 'https://raw.githubusercontent.com/weianofsteel/saliejung/master/public/open-graph.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Salie Chien — Product Designer',
                      }
                    ],
                    site_name: 'Salie Chien — Product Designer',
                  }}
            />
            
            {drawer == false ?
                <React.Fragment>
                {/* title & menu */}
                    
                <PageLoader/>
                
                <div>
                    <Header
                        handleDrawerOpen={handleDrawerOpen}
                    />
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

                {/* footer */}
                </React.Fragment>
            :''}
            
            {drawer == true ?
                <React.Fragment>
                    <div style={{backgroundColor:'#1f1f1f'}}>
                    <Drawer
                        handleDrawerClose={handleDrawerClose} 
                    />
                    </div>
                </React.Fragment>
            :''}

        </React.Fragment>
    )
}

export default Index;