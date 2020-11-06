import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from '../../css/Home.module.css';
import Button from '@material-ui/core/Button';
import photo5 from '../../public/5.jpeg';
import photo3 from '../../public/3.jpeg';
import photo8 from '../../public/8.jpeg';
import photo10 from '../../public/10.jpeg';

class Funfacts extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            galleryState: 0,
            boxHeight: "300px"
        }

        this.handleOnMouseEnter1 = this.handleOnMouseEnter1.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
        this.handleOnMouseEnter2 = this.handleOnMouseEnter2.bind(this);
        this.handleOnMouseEnter3 = this.handleOnMouseEnter3.bind(this);
        this.handleOnMouseEnter4 = this.handleOnMouseEnter4.bind(this);
    }

    handleOnMouseEnter1(){
        this.setState({galleryState: 1})
    }

    handleOnMouseLeave(){
        this.setState({galleryState: 0})
    }

    handleOnMouseEnter2(){
        this.setState({galleryState: 2})
    }

    handleOnMouseEnter3(){
        this.setState({galleryState: 3})
    }

    handleOnMouseEnter4(){
        this.setState({galleryState: 4})
    }

    render() {
        return(
            <React.Fragment>
            
                <Grid container spacing={1} style={{marginTop:"6%"}}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                        <h1 className={styles.funFactsTitle}>Fun Facts</h1>
                    </Grid>
                    <Grid item xs={5}></Grid>
                </Grid>

                <Grid container spacing={1} style={{marginTop:"2%"}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <p className={styles.funFactsContent}>
                            The story behind the name “saliejung” -  “salie” is my french name, “jung” is part of
                            the character of my Chinese name. I love how it combines & pronounce together, so 
                            that’s it. During the transfer period in 2018, I’ve  
                            <span 
                                onMouseEnter={this.handleOnMouseEnter1}
                                onMouseLeave={this.handleOnMouseLeave}
                            >
                                    &nbsp;#freelanced&nbsp;
                            </span> 
                            with #acer for two 
                            campaign projects running in the European area. Back then, I spent 1-month traveling
                            in 
                            <span 
                                onMouseEnter={this.handleOnMouseEnter2}
                                onMouseLeave={this.handleOnMouseLeave}
                            >
                                    &nbsp;#Kyoto&nbsp;
                            </span> 
                            , which is my favorite city (so far). I love exploring the world and my 
                            home 
                            <span 
                                onMouseEnter={this.handleOnMouseEnter3}
                                onMouseLeave={this.handleOnMouseLeave}
                            >
                                    &nbsp;#Taiwan&nbsp;
                            </span>
                             where you can’t stop exploring nature. The most interesting fact about 
                            me is that I’ve been a 
                            <span 
                                onMouseEnter={this.handleOnMouseEnter4}
                                onMouseLeave={this.handleOnMouseLeave}
                            >
                                    &nbsp;#ride operator&nbsp;
                            </span>
                             at a roller coaster when I joined the travel & 
                            experience program at college in the U.S.A.
                        </p>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid container spacing={1} style={{marginTop:"2%"}}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2} className={styles.buttonKnowMoreAboutMe}>
                        <Button 
                            size="large"
                            href="/"
                            style={{fontSize:"22px", color:"#8F8F8F"}}
                        >
                            <span style={{fontFamily:"Roboto"}}>KNOW MORE ABOUT ME</span>
                        </Button>
                    </Grid>
                    <Grid item xs={5}></Grid>
                </Grid>

                {this.state.galleryState == 0 ?
                    <Grid container spacing={1} style={{marginTop:"2%"}}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={1} style={{marginTop:"2%"}}>
                                <Grid item xs={3}>
                                    {/* <div className={styles.galleryBlock1}></div> */}
                                    <div>
                                        <img src={photo10} style={{width:"100%"}}/>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    {/* <div className={styles.galleryBlock2}></div> */}
                                    <div>
                                        <img src={photo5} style={{width:"100%"}}/>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    {/* <div className={styles.galleryBlock3}></div> */}
                                    <div>
                                        <img src={photo8} style={{width:"100%"}}/>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    {/* <div className={styles.galleryBlock4}></div> */}
                                    <div>
                                        <img src={photo3} style={{width:"100%"}}/>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid> : ""
                }

                {this.state.galleryState == 1 ? 
                    <Grid container spacing={1} style={{marginTop:"2%"}}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            {/* <div className={styles.galleryBlock1}></div> */}
                            <div>
                                <img src={photo10} style={{width:"100%"}}/>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                :""}

                {this.state.galleryState == 2 ? 
                    <Grid container spacing={1} style={{marginTop:"2%"}}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            {/* <div className={styles.galleryBlock2}></div> */}
                            <div>
                                <img src={photo5} style={{width:"100%"}}/>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                :""}

                {this.state.galleryState == 3 ? 
                    <Grid container spacing={1} style={{marginTop:"2%"}}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            {/* <div className={styles.galleryBlock3}></div> */}
                            <div>
                                <img src={photo8} style={{width:"100%"}}/>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                :""}

                {this.state.galleryState == 4 ? 
                    <Grid container spacing={1} style={{marginTop:"2%"}}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            {/* <div className={styles.galleryBlock4}></div> */}
                            <div>
                                <img src={photo3} style={{width:"100%"}}/>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                :""}

            </React.Fragment>
        )
    }
}

export default Funfacts;